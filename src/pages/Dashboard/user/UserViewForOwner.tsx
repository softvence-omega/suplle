/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/sectionHeader";
import SearchAndFilterBar from "@/components/user/SearchAndFilterBar";
import MonthFilter from "@/components/user/MonthFilter";
import UserTable from "@/components/user/UserTable";
import { useState, useCallback, useMemo } from "react";
import Pagination from "@/utils/Pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleSelect from "@/components/Forms/SuppleDropdown";
import { userRoles } from "@/constants/roles";
import { SelectItem } from "@/components/ui/select";
import { z } from "zod";
import type { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";

export type User = {
  id: number;
  userName: string;
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

  const handleDelete = useCallback((user: User) => {
    console.log("Delete user:", user);
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
        onDelete={handleDelete}
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



const CreateUserModal = ({ ButtonText }: { ButtonText: string }) => {
  const [open, setOpen] = useState(false);
  const validData = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    role: z.enum(["manager", "dine-in", "waiter", "takeaway", "chef", "cashier", "maintenance"]),
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Form data:", data);
    setOpen(false);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>{ButtonText}</Button>}
      title="Create New Sub User Account"
      description="Fill in the details below to create a new sub user account"
    >
      <SuppleForm resolver={zodResolver(validData)} onSubmit={onSubmit} className="grid gap-2">
        <div className="">
          <SuppleInput
            name="name"
            label="Name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="">
          <SuppleInput
            name="phone"
            label="Phone"
            placeholder="Phone"
            type="tel"
          />
        </div>
        <div className="">
          <SuppleInput
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="">
          <SuppleInput
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="">
          <SuppleSelect name="role" label="Role">
            {
              userRoles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))
            }
          </SuppleSelect>
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <Button onClick={closeModal} type="button" variant={"outline"} className="mt-4">Cancel</Button>
          <Button type="submit" className="mt-4">Create User</Button>
        </div>
      </SuppleForm>
    </Modal>
  )
}

export default UserViewForOwner;
