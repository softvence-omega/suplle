/* eslint-disable @typescript-eslint/no-unused-vars */
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
  role: "manager" | "dine-in" | "waiter" | "takeaway" | "chef" | "cashier" | "maintenance" | "restaurant_owner";
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
const token =  Cookies.get("accessToken") ;
  if (!token) {
    console.error("No token found in cookies");
    alert("Authentication token missing.");
    return;
  }
  console.log("Token:", token);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/users/all-users`,
           {
      headers: {
        "Content-Type": "application/json",
         Authorization: token ,
      },}
        );
         console.log("API response received:", response);
        if (response.data.success) {
          // Transform API data to match frontend structure
          const transformedUsers = response.data.data.result.map((user: any) => ({
            id: user._id,
            userName: user.name,
            phone: user.phone,
            email: user.email,
            role: user.role,
            status: user.isDeleted ? "Inactive" : "Active",
          }));
          
          setUsers(transformedUsers);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  // Rest of the component remains exactly the same...
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesRole =
        !filters.role || user.role.toLowerCase() === filters.role.toLowerCase();
      const matchesStatus =
        !filters.status ||
        user.status.toLowerCase() === filters.status.toLowerCase();
      const matchesSearch =
        !filters.search ||
        user.userName.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.role.toLowerCase().includes(filters.search.toLowerCase());

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

  const handlePageChange = useCallback((_items: unknown[]) => {}, []);

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