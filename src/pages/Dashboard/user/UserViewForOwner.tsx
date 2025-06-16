import SectionHeader from "@/components/ui/sectionHeader";
import SearchAndFilterBar from "@/components/dashboard/UserViewForOwner/user/SearchAndFilterBar";
import MonthFilter from "@/components/dashboard/UserViewForOwner/user/MonthFilter";
import UserTable from "@/components/dashboard/UserViewForOwner/user/UserTable";
import { useState, useCallback, useMemo, useEffect } from "react";
import Pagination from "@/utils/Pagination";
import CreateUserModal from "@/components/dashboard/UserViewForOwner/user/CreateUserModal";
import axios from "axios";
import Cookies from "js-cookie";
import { Loader2 } from "lucide-react"; 


export type User = {
  id: string;
  userName: string;
  phone?: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  image?: string;
  createdAt?: string;
};

const UserViewForOwner = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    role: "",
    status: "",
    search: "",
    month: "",
  });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = Cookies.get("accessToken");

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/all-users`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

     
      const mappedUsers: User[] = response.data.data.result
        .filter((item: any) => !item.isDeleted) 
        .map((item: any) => ({
          id: item._id,
          userName: item.name || "",
          email: item.email || "",
          phone: item.phone || "",
          role: item.role || "",
          status: "Active", // ✅ All shown users are active only
          image: item.image,
          createdAt: item.createdAt,
        }));


      setUsers(mappedUsers);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesRole =
        !filters.role || user.role.toLowerCase() === filters.role.toLowerCase();
      const matchesStatus =
        !filters.status || user.status.toLowerCase() === filters.status.toLowerCase();
      const matchesSearch =
        !filters.search ||
        user.userName.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.role.toLowerCase().includes(filters.search.toLowerCase());
      const matchesMonth =
        !filters.month ||
        (user.createdAt && user.createdAt.startsWith(filters.month));

      return matchesRole && matchesStatus && matchesSearch && matchesMonth;
    });
  }, [users, filters]);

  const ITEMS_PER_PAGE =10;
  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  const serialStart = (currentPage - 1) * ITEMS_PER_PAGE + 1;

  const handleEdit = useCallback((user: User) => {
    console.log("Edit user:", user);
  }, []);

  return (
    <>
      <SectionHeader
        showBackground={false}
        title="User Management"
        rightContent={<CreateUserModal ButtonText="Create User" />}
      />

      <SearchAndFilterBar
        onRoleChange={(role) => setFilters((prev) => ({ ...prev, role }))}
        onStatusChange={(status) => setFilters((prev) => ({ ...prev, status }))}
        onSearch={(search) => setFilters((prev) => ({ ...prev, search }))}
      />

      <MonthFilter
        onMonthChange={(month) => setFilters((prev) => ({ ...prev, month }))}
      />

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <>
          <UserTable
            users={currentUsers}
            onEdit={handleEdit}
            serialStart={serialStart}
          />

          <Pagination
            data={filteredUsers}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={() => {}}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default UserViewForOwner;
