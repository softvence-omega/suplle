import SectionHeader from "@/components/ui/sectionHeader";
import SearchAndFilterBar from "@/components/dashboard/UserViewForOwner/user/SearchAndFilterBar";
import MonthFilter from "@/components/dashboard/UserViewForOwner/user/MonthFilter";
import UserTable from "@/components/dashboard/UserViewForOwner/user/UserTable";
import { useState, useCallback, useMemo, useEffect } from "react";
import Pagination from "@/utils/Pagination";
import CreateUserModal from "@/components/dashboard/UserViewForOwner/user/CreateUserModal";
import axios from "axios";
import Cookies from "js-cookie";

export type User = {
  id: string;
  userName: string;
  phone?: string;
  email: string;
  role:
    | "manager"
    | "dine-in"
    | "waiter"
    | "takeaway"
    | "chef"
    | "cashier"
    | "maintenance";
  status: "Active" | "Inactive";
};

const UserViewForOwner = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    role: "",
    status: "",
    search: "",
    month: "",
  });

  const fetchUsers = async () => {
    try {
      const token = Cookies.get("accessToken");

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/all-users`,
        {
          headers: {
            Authorization: token ,
          },
        }
      );

      console.log("Response:", response.data);

      const mappedUsers: User[] = response.data.data.result.map((item: any) => ({
        id: item._id,
        userName: item?.user?.name || "Unnamed",
        email: item?.user?.email || "",
        phone: item?.user?.phone,
        role: item?.user?.role || "manager",
        status: item?.user?.isDeleted ? "Inactive" : "Active",
      }));

      setUsers(mappedUsers);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Optional: If you want to reset page when filters change (already done in handlers)
  // useEffect(() => setCurrentPage(1), [filters]);

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

      // If you want to filter by month (assuming user has a createdAt or similar field)
      // You need to add that field in User and in mappedUsers and add filter here.

      return matchesRole && matchesStatus && matchesSearch;
    });
  }, [users, filters]);

  const ITEMS_PER_PAGE = 10;
  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  const handleRoleChange = useCallback((role: string) => {
    setFilters((prev) => ({ ...prev, role }));
    setCurrentPage(1);
  }, []);

  const handleStatusChange = useCallback((status: string) => {
    setFilters((prev) => ({ ...prev, status }));
    setCurrentPage(1);
  }, []);

  const handleSearch = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1);
  }, []);

  const handleMonthChange = useCallback((month: string) => {
    setFilters((prev) => ({ ...prev, month }));
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((items: unknown[]) => {
    // Optionally, you can update currentPage based on items if needed
    // setCurrentPage(newPageNumber);
    // For now, do nothing or handle as required
  }, []);

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
        onRoleChange={handleRoleChange}
        onStatusChange={handleStatusChange}
        onSearch={handleSearch}
      />

      <MonthFilter onMonthChange={handleMonthChange} />

      <UserTable users={currentUsers} onEdit={handleEdit} />

      <Pagination
        data={filteredUsers}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default UserViewForOwner;
