import { Trash2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

interface DeleteUserButtonProps {
  userId: string;
  onDeleteSuccess?: () => void;
}

const DeleteUserButton = ({ userId, onDeleteSuccess }: DeleteUserButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    const token = Cookies.get("accessToken"); // Read token from cookie

    if (!token) {
      alert("User is not authenticated.");
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
        alert("User deleted successfully");
        onDeleteSuccess?.();
      } else {
        alert("Failed to delete user");
      }
    } catch (error: any) {
      console.error("Delete error:", error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-800 disabled:opacity-50"
      title="Delete User"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
};

export default DeleteUserButton;
