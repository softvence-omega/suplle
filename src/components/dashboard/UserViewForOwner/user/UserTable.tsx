import { Button } from "@/components/ui/button";
import type { User } from "@/pages/Dashboard/user/UserViewForOwner";
import { useState } from "react";

import EditUserModal from "./EditUserModal";
import EditIcon from "@/components/ui/EditIcon";
import DeleteUserButton from "./DeleteUserButton";

// Types
interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  serialStart?: number; // optional, default to 1
}

interface UserTableRowProps {
  user: User;
  index: number;
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  serialNumber: number; // new prop to show correct serial
}

// Custom hook for managing user state
const useUserTable = (onEdit: (user: User) => void) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleView = (user: User) => {
    setSelectedUser(user);
  };

  const handleEdit = (user: User) => {
    onEdit(user);
  };

  return {
    selectedUser,
    handleView,
    handleEdit,
  };
};

// Table Row Component
const UserTableRow = ({ user, index, onView, onEdit, serialNumber }: UserTableRowProps) => {
  return (
    <tr className="bg-white border-b dark:bg-primary-dark dark:text-white">
      <td className="px-6 py-4">{serialNumber}</td> {/* Use serialNumber here */}
      <td className="px-6 py-4">{user.userName}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            user.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => onView(user)}>
            <DeleteUserButton userId={user.id} />
          </Button>
          
          <Button variant="ghost" size="icon">
            <EditUserModal
              onEdit={onEdit}
              selectedUser={user}
              ButtonText={<EditIcon className="h-4 w-4" />}
            />
          </Button>
        </div>
      </td>
    </tr>
  );
};

// Main Table Component
export default function UserTable({ users, onEdit, serialStart = 1 }: UserTableProps) {
  const { handleView, handleEdit } = useUserTable(onEdit);

  return (
    <div className="relative overflow-x-auto my-4 ">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-white dark:bg-primary-dark">
          <tr>
            <th scope="col" className="px-6 py-3">Sl.</th>
            <th scope="col" className="px-6 py-3">User Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserTableRow
              key={user.id}
              user={user}
              index={index}
              onView={handleView}
              onEdit={handleEdit}
              serialNumber={serialStart + index} // Pass serial number here
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
