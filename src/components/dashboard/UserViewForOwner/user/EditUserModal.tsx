import { Button } from "@/components/ui/button";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleForm from "@/components/Forms/SuplleForm";
import type { FieldValues } from "react-hook-form";
import { Modal } from "@/components/ui/modal";
import React, { useState } from "react";
import type { User } from "@/pages/Dashboard/user/UserViewForOwner";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

interface EditUserModalProps {
  ButtonText: React.ReactNode;
  selectedUser: User;
  onEdit: (data: User) => void;
}

const UserFormFields = () => (
  <>
    <SuppleInput
      name="name"
      label="Name"
      placeholder="Name"
      type="text"
      required
    />
  </>
);

const EditUserModal = ({ ButtonText, selectedUser, onEdit }: EditUserModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    name: selectedUser.userName || "",
  };

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    const token = Cookies.get("accessToken");

    if (!token) {
      toast.error("Authorization token is missing");
      setLoading(false);
      return;
    }

    try {
      const payload = { name: data.name };

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/update-user/${selectedUser.id}`,
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("User updated successfully");

      // Update local user object with backend response
      onEdit({
        ...selectedUser,
        userName: response.data.data.name,
      });

      setOpen(false);
    } catch (error: any) {
      console.error("Update error:", error);

      if (error.response) {
        toast.error(`Failed to update: ${error.response.data.message}`);
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error("Request setup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<Button variant="outline">{ButtonText}</Button>}
      title="Update User Name"
      description="Change the name of the user below"
    >
      <SuppleForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        className="grid gap-2"
      >
        <UserFormFields />
        <div className="flex items-center justify-end gap-2 mt-4">
          <Button onClick={closeModal} type="button" variant="outline" disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update User"}
          </Button>
        </div>
      </SuppleForm>
    </Modal>
  );
};

export default EditUserModal;
