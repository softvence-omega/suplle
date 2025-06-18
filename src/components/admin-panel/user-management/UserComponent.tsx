import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import type { User, UserRole, UserActivity } from "./user";
import UserTabNavigation from "./UserTabNavigation";
import UserList from "./UserList";
import { ViewUserDialog } from "./ViewUserDialog";
import { EditUserDialog } from "./EditUserDialog";
import { Loader2 } from "lucide-react"; // using lucide-react spinner icon

type UserRoleTab = "All" | UserRole;

const UserComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserRoleTab>("All");
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false); // ✅ loader state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true); // ✅ start loading
        const token = Cookies.get("accessToken");
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/users/all-users`,
          {
            headers: { Authorization: token },
          }
        );

        const normalizeRole = (role: string): UserRole => {
          const lowerRole = role.toLowerCase();
          switch (lowerRole) {
            case "owner": return "Owner";
            case "staff": return "Staff";
            case "manager": return "Manager";
            case "waiter": return "Waiter";
            case "dine in": return "Dine In";
            default: return "Staff";
          }
        };

        const fetchedUsers = res.data.data.result.map((user: any) => ({
          id: user._id,
          name: user.name,
          mail: user.email,
          role: normalizeRole(user.role),
          status: user.restaurant?.status as UserActivity || "",
          vendor: user.restaurant?.restaurantName || "",
          image: user.restaurant?.logo || "",
          time: new Date(user.createdAt).toLocaleString(),
        }));

        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false); // ✅ stop loading
      }
    };

    fetchUsers();
  }, []);

  const handleTabChange = (tab: UserRoleTab) => {
    setActiveTab(tab);
  };

  const filteredUsers = activeTab === "All"
    ? users
    : users.filter((user) => user.role === activeTab);

  const handleUserClick = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setSelectedUser(user);
      setIsViewOpen(true);
    }
  };

  const handleEditClick = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setEditUser({ ...user });
      setIsEditOpen(true);
    }
  };

  const handleSaveUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsEditOpen(false);
  };

  const handleDeleteUser = async (userId: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      setLoading(true);
      const token = Cookies.get("accessToken");
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/delete-user/${userId}`,
        {
          headers: { Authorization: token },
        }
      );
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      setIsViewOpen(false);
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-6">
        <h2 className="md:text-2xl text-xl text-[#333333] dark:text-[#FFFFFF]">
          User Management
        </h2>
      </div>

      <div className="pb-6">
        <UserTabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin h-8 w-8 text-gray-500" />
        </div>
      ) : (
        <UserList
          users={filteredUsers}
          filter={activeTab}
          onUserClick={handleUserClick}
          onEditClick={handleEditClick}
        />
      )}

      {/* View User Dialog */}
      <ViewUserDialog 
        open={isViewOpen} 
        onOpenChange={setIsViewOpen} 
        selectedUser={selectedUser} 
        setUsers={setUsers}
      />

      {/* Edit User Dialog */}
      <EditUserDialog
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        editUser={editUser}
        onSave={handleSaveUser}
        onCancel={() => setIsEditOpen(false)}
        setEditUser={setEditUser}
      />
    </div>
  );
};

export default UserComponent;
