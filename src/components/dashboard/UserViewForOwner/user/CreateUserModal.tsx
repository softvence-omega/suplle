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
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const CreateUserModal = ({ ButtonText }: { ButtonText: string }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const validData = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    role: z.enum(["manager", "dine in", "waiter", "takeaway", "chef", "cashier", "maintenance"]),
  });

  const onSubmit = async (data: FieldValues) => {
    const token = Cookies.get("accessToken");
    if (!token) {
      console.error("No token found in cookies");
      alert("Authentication token missing.");
      return;
    }

    const payload = {
      ...data,
      providerId: null,
      provider: null,
      image: "https://example.com/avatar.jpg",
      otp: "123456",
      otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
      isTourCompleted: false,
      isDeleted: false,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/owner-create-sub-user`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      toast("New user account has been created successfully.");

      setOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Server responded with error:", error.response?.data);
        alert(error.response?.data?.message || "Something went wrong");
      } else {
        console.error("Unknown error:", error);
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>{ButtonText}</Button>}
      title="Create New Sub User Account"
      description="Fill in the details below to create a new sub user account"
    >
      <SuppleForm
        resolver={zodResolver(validData)}
        onSubmit={onSubmit}
        className="grid gap-2"
      >
        <SuppleInput name="name" label="Name" placeholder="Name" type="text" />
        <SuppleInput name="phone" label="Phone" placeholder="Phone" type="tel" />
        <SuppleInput name="email" label="Email" placeholder="Email" type="email" />
        <SuppleInput name="password" label="Password" placeholder="Password" type="password" />
        <SuppleSelect name="role" label="Role">
          {userRoles.map((role) => (
            <SelectItem key={role.value} value={role.value}>
              {role.label}
            </SelectItem>
          ))}
        </SuppleSelect>

        <div className="flex items-center space-x-2 justify-end">
          <Button onClick={() => setOpen(false)} type="button" variant="outline" className="mt-4">
            Cancel
          </Button>
          <Button type="submit" className="mt-4" disabled={loading}>
            {loading ? "Creating..." : "Create User"}
          </Button>
        </div>
      </SuppleForm>
    </Modal>
  );
};

export default CreateUserModal;
