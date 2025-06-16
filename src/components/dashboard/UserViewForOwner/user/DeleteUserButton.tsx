import { Trash2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

interface DeleteUserButtonProps {
  userId: string;
  onDeleteSuccess?: () => void;
}

const DeleteUserButton = ({ userId, onDeleteSuccess }: DeleteUserButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const token = Cookies.get("accessToken");

    if (!token) {
      toast.error("User is not authenticated.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/delete-user/${userId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("User deleted successfully");
        onDeleteSuccess?.();
        setOpen(false);
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error: any) {
      console.error("Delete error:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="text-red-600 hover:text-red-800 disabled:opacity-50"
          title="Delete User"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserButton;
