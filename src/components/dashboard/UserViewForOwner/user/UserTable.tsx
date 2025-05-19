import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import type { User } from "@/pages/Dashboard/user/UserViewForOwner";

import { useState } from "react";
// import type { FieldValues } from "react-hook-form";
// import EditUserModal from "./EditUserModal";
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "@/components/ui/button";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleForm from "@/components/Forms/SuplleForm";
import SuppleSelect from "@/components/Forms/SuppleDropdown";
import { userRoles } from "@/constants/roles";
import { SelectItem } from "@/components/ui/select";
import { z } from "zod";
import type { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";

type EditUserModalProps = {
  trigger: React.ReactNode;
  onEdit: (data: FieldValues) => void;
  selectedUser: any;
  open: boolean;
  setOpen: (open: boolean) => void;
};
interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

export default function UserTable({ users, onEdit }: UserTableProps) {
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
 

  const handleView = (user: User) => {
    setSelectedUser(user);
    setViewModalOpen(true);
  };
  const handleClose = () => {
    setViewModalOpen(false);
    setSelectedUser(null);
  };

  const handleEditSubmit = (data: FieldValues) => {
    onEdit(data);
  };

  console.log(editModalOpen);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
            <tr key={user.id} className="bg-white border-b">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{user.userName}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleView(user)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditModalOpen(true);
                    }}
                  >

                    <EditUserModal
                      open={editModalOpen}
                      setOpen={setEditModalOpen}
                      selectedUser={user}
                      onEdit={handleEditSubmit}
                      trigger={<Pencil className="h-4 w-4" />}
                    />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {selectedUser &&  (
        <div className="space-y-4 fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <p className="mt-1">{selectedUser.userName}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <p className="mt-1">{selectedUser.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Role</label>
                <p className="mt-1">{selectedUser.role}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <p className="mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${selectedUser.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                    {selectedUser.status}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="cursor-pointer" onClick={handleClose} type="button">Close</Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


const EditUserModal = ({ trigger, onEdit, selectedUser , open, setOpen }: EditUserModalProps) => {
  
  const validData = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    role: z.enum(["manager", "dine-in", "waiter", "takeaway", "chef", "cashier", "maintenance"]),
  });

  const defaultValues = {
    name: selectedUser?.name || "",
    phone: selectedUser?.phone || "",
    email: selectedUser?.email || "",
    password: selectedUser?.password || "",
    role: selectedUser?.role || "manager",
  };

  const onSubmit = (data: FieldValues) => {
    console.log("Form data:", data);
    onEdit(data);
    setOpen(false);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={trigger}
      title="Create New Sub User Account"
      description="Fill in the details below to create a new sub user account"
    >
      <SuppleForm defaultValues={defaultValues} resolver={zodResolver(validData)} onSubmit={onSubmit} className="grid gap-2">
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
          <Button  type="button" onClick={closeModal} variant={"outline"} className="mt-4">Cancel</Button>
          <Button type="submit" className="mt-4">Create User</Button>
        </div>
      </SuppleForm>
    </Modal>
  )
}