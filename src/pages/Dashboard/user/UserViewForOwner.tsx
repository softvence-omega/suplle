/* eslint-disable @typescript-eslint/no-unused-vars */
import SectionHeader from "@/components/ui/sectionHeader";
import SearchAndFilterBar from "@/components/dashboard/UserViewForOwner/user/SearchAndFilterBar";
import MonthFilter from "@/components/dashboard/UserViewForOwner/user/MonthFilter";
import UserTable from "@/components/dashboard/UserViewForOwner/user/UserTable";
import { useState, useCallback, useMemo } from "react";
import Pagination from "@/utils/Pagination";
import CreateUserModal from "@/components/dashboard/UserViewForOwner/user/CreateUserModal";


export type User = {
  id: number;
  userName: string;
  phone?: string;
  email: string;
  role: "manager" | "dine-in" | "waiter" | "takeaway" | "chef" | "cashier" | "maintenance";
  status: "Active" | "Inactive";
};



const MOCK_USERS: User[] = [
  { id: 1, userName: "JohnDoe", email: "john@example.com", role: "manager", status: "Active" },
  { id: 2, userName: "JaneSmith", email: "jane@example.com", role: "dine-in", status: "Inactive" },
  { id: 3, userName: "AlexBrown", email: "alex@example.com", role: "waiter", status: "Active" },
  { id: 4, userName: "EmilyWhite", email: "emily@example.com", role: "takeaway", status: "Inactive" },
  { id: 5, userName: "MichaelGreen", email: "michael@example.com", role: "chef", status: "Inactive" },
  { id: 6, userName: "SophiaBlack", email: "sophia@example.com", role: "cashier", status: "Active" },
  { id: 7, userName: "DavidLee", email: "david@example.com", role: "maintenance", status: "Active" },
  { id: 8, userName: "LauraKing", email: "laura@example.com", role: "manager", status: "Active" },
  { id: 9, userName: "ChrisWalker", email: "chris@example.com", role: "waiter", status: "Inactive" },
  { id: 10, userName: "AmyTurner", email: "amy@example.com", role: "dine-in", status: "Active" },
  { id: 11, userName: "BrianHill", email: "brian@example.com", role: "takeaway", status: "Inactive" },
  { id: 12, userName: "NancyClark", email: "nancy@example.com", role: "chef", status: "Active" },
  { id: 13, userName: "KevinYoung", email: "kevin@example.com", role: "cashier", status: "Active" },
  { id: 14, userName: "OliviaAdams", email: "olivia@example.com", role: "maintenance", status: "Inactive" },
  { id: 15, userName: "EthanScott", email: "ethan@example.com", role: "manager", status: "Inactive" },
  { id: 16, userName: "ZoeBennett", email: "zoe@example.com", role: "waiter", status: "Active" },
  { id: 17, userName: "DanielCarter", email: "daniel@example.com", role: "dine-in", status: "Active" },
  { id: 18, userName: "GraceMorgan", email: "grace@example.com", role: "takeaway", status: "Active" },
  { id: 19, userName: "LoganBailey", email: "logan@example.com", role: "chef", status: "Inactive" },
  { id: 20, userName: "MiaPerry", email: "mia@example.com", role: "cashier", status: "Active" },
];


const UserViewForOwner = () => {
  const [users] = useState<User[]>(MOCK_USERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    role: "",
    status: "",
    search: "",
    month: ""
  });

  // Filter users based on current filters
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesRole = !filters.role || user.role.toLowerCase() === filters.role.toLowerCase();
      const matchesStatus = !filters.status || user.status.toLowerCase() === filters.status.toLowerCase();
      const matchesSearch = !filters.search ||
        user.userName.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.role.toLowerCase().includes(filters.search.toLowerCase());

      return matchesRole && matchesStatus && matchesSearch;
    });
  }, [users, filters]);

  // Get current users for the page
  const ITEMS_PER_PAGE = 10;
  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  // Handlers
  const handleRoleChange = useCallback((role: string) => {
    setFilters(prev => ({ ...prev, role }));
    setCurrentPage(1); // Reset to first page when filter changes
  }, []);

  const handleStatusChange = useCallback((status: string) => {
    setFilters(prev => ({ ...prev, status }));
    setCurrentPage(1); // Reset to first page when filter changes
  }, []);

  const handleSearch = useCallback((search: string) => {
    setFilters(prev => ({ ...prev, search }));
    setCurrentPage(1); // Reset to first page when search changes
  }, []);

  const handleMonthChange = useCallback((month: string) => {
    setFilters(prev => ({ ...prev, month }));
    setCurrentPage(1); // Reset to first page when month changes
  }, []);

  const handlePageChange = useCallback((_items: unknown[]) => {
    // No need to do anything here since we're managing the current page state directly
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

      <UserTable
        users={currentUsers}
        onEdit={handleEdit}
      />

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
