/* eslint-disable @typescript-eslint/no-unused-vars */
import SectionHeader from "@/components/ui/sectionHeader";
import { useState, useCallback, useMemo } from "react";
import Pagination from "@/utils/Pagination";
import CreateUserModal from "@/components/dashboard/StaffViewForOwner/staff/CreateUserModal";
import SearchAndFilterBar from "@/components/dashboard/StaffViewForOwner/staff/SearchAndFilterBar";
import MonthFilter from "@/components/dashboard/StaffViewForOwner/staff/MonthFilter";
import UserTable from "@/components/dashboard/StaffViewForOwner/staff/UserTable";

export type User = {
  id: number;
  address?: string;
  workSchedule?: string; // Add this
  number?: string; // Add this
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

const MOCK_USERS: User[] = [
  {
    id: 1,
    userName: "JohnDoe",
    email: "john@example.com",
    role: "manager",
    status: "Active",
    number: "1234567890",
    address: "123 Main St, City, Country",
    workSchedule: "Monday to Friday, 9 AM to 5 PM",
  },
  {
    id: 2,
    userName: "JaneSmith",
    email: "jane@example.com",
    role: "dine-in",
    status: "Inactive",
    number: "0987654321",
    address: "456 Elm St, City, Country",
    workSchedule: "Tuesday to Saturday, 10 AM to 6 PM",
  },
  {
    id: 3,
    userName: "AlexBrown",
    email: "alex@example.com",
    role: "waiter",
    status: "Active",
    number: "1122334455",
    address: "789 Oak St, City, Country",
    workSchedule: "Wednesday to Sunday, 11 AM to 7 PM",
  },
  {
    id: 4,
    userName: "EmilyWhite",
    email: "emily@example.com",
    role: "takeaway",
    status: "Inactive",
    number: "2233445566",
    address: "321 Pine St, City, Country",
    workSchedule: "Monday to Friday, 8 AM to 4 PM",
  },
  {
    id: 5,
    userName: "MichaelGreen",
    email: "michael@example.com",
    role: "chef",
    status: "Inactive",
    number: "3344556677",
    address: "654 Maple St, City, Country",
    workSchedule: "Thursday to Monday, 12 PM to 8 PM",
  },
  {
    id: 6,
    userName: "SophiaBlack",
    email: "sophia@example.com",
    role: "cashier",
    status: "Active",
    number: "4455667788",
    address: "987 Cedar St, City, Country",
    workSchedule: "Friday to Tuesday, 9 AM to 5 PM",
  },
  {
    id: 7,
    userName: "DavidLee",
    email: "david@example.com",
    role: "maintenance",
    status: "Active",
    number: "5566778899",
    address: "159 Birch St, City, Country",
    workSchedule: "Saturday to Wednesday, 10 AM to 6 PM",
  },
  {
    id: 8,
    userName: "LauraKing",
    email: "laura@example.com",
    role: "manager",
    status: "Active",
    number: "6677889900",
    address: "753 Spruce St, City, Country",
    workSchedule: "Sunday to Thursday, 9 AM to 5 PM",
  },
  {
    id: 9,
    userName: "ChrisWalker",
    email: "chris@example.com",
    role: "waiter",
    status: "Inactive",
    number: "7788990011",
    address: "852 Fir St, City, Country",
    workSchedule: "Monday to Friday, 11 AM to 7 PM",
  },
  {
    id: 10,
    userName: "AmyTurner",
    email: "amy@example.com",
    role: "dine-in",
    status: "Active",
    number: "8899001122",
    address: "963 Willow St, City, Country",
    workSchedule: "Tuesday to Saturday, 10 AM to 6 PM",
  },
  {
    id: 11,
    userName: "BrianHill",
    email: "brian@example.com",
    role: "takeaway",
    status: "Inactive",
    number: "9900112233",
    address: "147 Chestnut St, City, Country",
    workSchedule: "Wednesday to Sunday, 8 AM to 4 PM",
  },
  {
    id: 12,
    userName: "NancyClark",
    email: "nancy@example.com",
    role: "chef",
    status: "Active",
    number: "1011121314",
    address: "258 Poplar St, City, Country",
    workSchedule: "Thursday to Monday, 12 PM to 8 PM",
  },
  {
    id: 13,
    userName: "KevinYoung",
    email: "kevin@example.com",
    role: "cashier",
    status: "Active",
    number: "1314151617",
    address: "369 Ash St, City, Country",
    workSchedule: "Friday to Tuesday, 9 AM to 5 PM",
  },
  {
    id: 14,
    userName: "OliviaAdams",
    email: "olivia@example.com",
    role: "maintenance",
    status: "Inactive",
    number: "1718192021",
    address: "741 Elm St, City, Country",
    workSchedule: "Saturday to Wednesday, 10 AM to 6 PM",
  },
  {
    id: 15,
    userName: "EthanScott",
    email: "ethan@example.com",
    role: "manager",
    status: "Inactive",
    number: "2122232425",
    address: "852 Oak St, City, Country",
    workSchedule: "Sunday to Thursday, 9 AM to 5 PM",
  },
  {
    id: 16,
    userName: "ZoeBennett",
    email: "zoe@example.com",
    role: "waiter",
    status: "Active",
    number: "2627282930",
    address: "963 Pine St, City, Country",
    workSchedule: "Monday to Friday, 11 AM to 7 PM",
  },
  {
    id: 17,
    userName: "DanielCarter",
    email: "daniel@example.com",
    role: "dine-in",
    status: "Active",
    number: "3031323334",
    address: "147 Cedar St, City, Country",
    workSchedule: "Tuesday to Saturday, 10 AM to 6 PM",
  },
  {
    id: 18,
    userName: "GraceMorgan",
    email: "grace@example.com",
    role: "takeaway",
    status: "Active",
    number: "3435363738",
    address: "258 Birch St, City, Country",
    workSchedule: "Wednesday to Sunday, 8 AM to 4 PM",
  },
  {
    id: 19,
    userName: "LoganBailey",
    email: "logan@example.com",
    role: "chef",
    status: "Inactive",
    number: "3940414243",
    address: "369 Spruce St, City, Country",
    workSchedule: "Thursday to Monday, 12 PM to 8 PM",
  },
  {
    id: 20,
    userName: "MiaPerry",
    email: "mia@example.com",
    role: "cashier",
    status: "Active",
    number: "4445464748",
    address: "741 Fir St, City, Country",
    workSchedule: "Friday to Tuesday, 9 AM to 5 PM",
  },
];

const StaffViewForOwner = () => {
  const [users] = useState<User[]>(MOCK_USERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    role: "",
    status: "",
    search: "",
    month: "",
  });

  // Filter users based on current filters
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

  // Get current users for the page
  const ITEMS_PER_PAGE = 10;
  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  // Handlers
  const handleRoleChange = useCallback((role: string) => {
    setFilters((prev) => ({ ...prev, role }));
    setCurrentPage(1); // Reset to first page when filter changes
  }, []);

  const handleStatusChange = useCallback((status: string) => {
    setFilters((prev) => ({ ...prev, status }));
    setCurrentPage(1); // Reset to first page when filter changes
  }, []);

  const handleSearch = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1); // Reset to first page when search changes
  }, []);

  const handleMonthChange = useCallback((month: string) => {
    setFilters((prev) => ({ ...prev, month }));
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
        title="Orders"
        rightContent={<CreateUserModal ButtonText="Add New Staff" />}
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

export default StaffViewForOwner;
