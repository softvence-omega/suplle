/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
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

export default EditUserModal;