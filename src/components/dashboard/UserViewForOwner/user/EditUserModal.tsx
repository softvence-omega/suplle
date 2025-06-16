import { Button } from "@/components/ui/button";
import SuppleInput from "@/components/Forms/SuppleInput";
import SuppleForm from "@/components/Forms/SuplleForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import type { User } from "@/pages/Dashboard/user/UserViewForOwner";

interface EditUserModalProps {
  ButtonText: React.ReactNode;
  selectedUser: User;
  onEdit: (updatedUser: User) => void;
}

const EditUserModal = ({ ButtonText, selectedUser, onEdit }: EditUserModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Zod validation schema for userName
  const validData = z.object({
    userName: z.string().min(1, { message: "Name is required" }),
  });

  const onSubmit = async (data: { userName: string }) => {
    setLoading(true);
    const token = Cookies.get("accessToken");

    if (!token) {
      toast.error("Authorization token is missing");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          name: data.userName, // Backend expects 'name'
        })
      );

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/update-user/${selectedUser.id}`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        onEdit({
          ...selectedUser,
          userName: data.userName, // Frontend uses 'userName'
        });
        setOpen(false);
      } else {
        toast.error(response.data.message || "Failed to update user");
      }
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(
        error.response?.data?.message || error.message || "Failed to update user"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={<Button variant="outline">{ButtonText}</Button>}
      title="Update User Name"
      description="Edit the user's name below"
    >
      <SuppleForm
        defaultValues={{ userName: selectedUser.userName || "" }}
        resolver={zodResolver(validData)}
        onSubmit={onSubmit}
        className="grid gap-2"
      >
        <SuppleInput
          name="userName"
          label="Name"
          placeholder="Enter new name"
          type="text"
        />

        <div className="flex items-center justify-end gap-2 mt-4">
          <Button
            onClick={() => setOpen(false)}
            type="button"
            variant="outline"
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Name"}
          </Button>
        </div>
      </SuppleForm>
    </Modal>
  );
};

export default EditUserModal;
