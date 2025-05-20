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
import { useState } from "react";
import { userStatus } from "../user-type";

const CreateUserModal = ({ ButtonText }: { ButtonText: string }) => {
  const [open, setOpen] = useState(false);
  const validData = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    role: z.enum([
      "manager",
      "dine-in",
      "waiter",
      "takeaway",
      "chef",
      "cashier",
      "maintenance",
    ]),
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Form data:", data);
    setOpen(false);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>{ButtonText}</Button>}
      title="Add New Staff Member"
      description="Fill in the details below to create a new staff member account"
    >
      <SuppleForm
        resolver={zodResolver(validData)}
        onSubmit={onSubmit}
        className="grid gap-2"
      >
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
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
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
          <SuppleSelect name="role" label="Role">
            {userRoles.map((role) => (
              <SelectItem key={role.value} value={role.value}>
                {role.label}
              </SelectItem>
            ))}
          </SuppleSelect>
        </div>
        <div className="">
          <SuppleInput
            name="work"
            label="Work Days"
            placeholder="Work Days"
            type="tel"
          />
        </div>
        <div className="">
          <SuppleInput
            name="worktime"
            label="Work Time"
            placeholder="Work Time"
            type="tel"
          />
        </div>

        <div className="">
          <SuppleSelect name="status" label="Status">
            {userStatus.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SuppleSelect>
        </div>
        <div className="">
          <SuppleInput
            name="photo"
            label="Upload Profile Image"
            placeholder="profile-01.png"
            type="file"
          />
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <Button
            onClick={closeModal}
            type="button"
            variant={"outline"}
            className="mt-4 bg-[#E7F6F6] dark:bg-[#E7F6F6] dark:text-[#161616] dark:hober-[#E7F6F6]"
          >
            Cancel
          </Button>
          <Button type="submit" className="mt-4 pl-8 pr-8">
            Add
          </Button>
        </div>
      </SuppleForm>
    </Modal>
  );
};

export default CreateUserModal;
