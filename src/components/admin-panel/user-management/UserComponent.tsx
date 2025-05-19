import React, { useState } from "react";
import type { User, UserStatus } from "./user";
import UserTabNavigation from "./UserTabNavigation";
import UserList from "./UserList";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockUsers: User[] = [
  {
    id: "INV001",
    vendor: "Esther Howard",
    role: "Manager",
    time: "10:30 AM",
    name: "John Doe",
    mail: "esther.howard@example.com",
    status: "Inactive",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "INV002",
    vendor: "Wade Warren",
    role: "Waiter",
    time: "11:45 AM",
    name: "Jane Smith",
    mail: "wade.warren@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: "INV003",
    vendor: "Cameron Williamson",
    role: "Manager",
    time: "12:15 PM",
    name: "Jenny Wilson",
    mail: "esther.howard@example.com",
    status: "Takeaway",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: "INV004",
    vendor: "Wade Warren",
    role: "Dine In",
    time: "1:30 PM",
    name: "Wade Warren",
    mail: "wade.warren@example.com",
    status: "Inactive",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "INV005",
    vendor: "John Doe",
    role: "Manager",
    time: "10:30 AM",
    name: "John Doe",
    mail: "john@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "INV006",
    vendor: "John Doe",
    role: "Manager",
    time: "10:30 AM",
    name: "John Doe",
    mail: "jesther.howard@example.com",
    status: "Inactive",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "INV007",
    vendor: "Jane Smith",
    role: "Staff",
    time: "11:45 AM",
    name: "Jane Smith",
    mail: "jane@example.com",
    status: "Inactive",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: "INV008",
    vendor: "Alice Johnson",
    role: "Staff",
    time: "12:15 PM",
    name: "Alice Johnson",
    mail: "alice@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: "INV009",
    vendor: "Bob Williams",
    role: "Owner",
    time: "1:30 PM",
    name: "Bob Williams",
    mail: "bob@example.com",
    status: "Inactive",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "INV0010",
    vendor: "Emily Davis",
    role: "Staff",
    time: "2:45 PM",
    name: "Emily Davis",
    mail: "emily@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: "INV0011",
    vendor: "John Doe",
    role: "Owner",
    time: "10:30 AM",
    name: "John Doe",
    mail: "john@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "INV0012",
    vendor: "Jane Smith",
    role: "Staff",
    time: "11:45 AM",
    name: "Jane Smith",
    mail: "jane@example.com",
    status: "Takeaway",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: "INV0013",
    vendor: "Alice Johnson",
    role: "Staff",
    time: "12:15 PM",
    name: "Alice Johnson",
    mail: "alice@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: "INV0014",
    vendor: "Bob Williams",
    role: "Owner",
    time: "1:30 PM",
    name: "Bob Williams",
    mail: "bob@example.com",
    status: "Inactive",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "INV0015",
    vendor: "Emily Davis",
    role: "Staff",
    time: "2:45 PM",
    name: "Emily Davis",
    mail: "emily@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
];

const UserComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"All" | UserStatus>("All");
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleTabChange = (tab: "All" | UserStatus) => {
    setActiveTab(tab);
  };

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

  return (
    <div className="">
      <div className="py-6">
        <h2 className="md:text-2xl text-xl text-[#333333] dark:text-[#FFFFFF]">
          User Management
        </h2>
      </div>

      <div className="pb-6">
        <UserTabNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div className="">
        <UserList
          users={users}
          filter={activeTab}
          onUserClick={handleUserClick}
          onEditClick={handleEditClick}
        />
      </div>

      {/* View User Dialog */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[24px] font-normal leading-normal font-[Rubik] bg-gradient-to-b from-[#56DAAB] via-[#31B8A0] to-[#0F9996] bg-clip-text text-transparent">
              User Details
            </DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src={selectedUser.image}
                    alt={selectedUser.name}
                  />
                  <AvatarFallback>
                    {selectedUser.name?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl text-[24px] font-normal leading-normal font-[Rubik] bg-gradient-to-b from-[#56DAAB] via-[#31B8A0] to-[#0F9996] bg-clip-text text-transparent">
                  {selectedUser.name}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{selectedUser.mail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p>{selectedUser.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p>{selectedUser.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vendor</p>
                  <p>{selectedUser.vendor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p>{selectedUser.time}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[24px] font-normal leading-normal font-[Rubik] bg-gradient-to-b from-[#56DAAB] via-[#31B8A0] to-[#0F9996] bg-clip-text text-transparent">
              Edit User
            </DialogTitle>
          </DialogHeader>
          {editUser && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveUser(editUser);
              }}
              className="grid gap-4 py-4"
            >
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={editUser.image} alt={editUser.name} />
                  <AvatarFallback>
                    {editUser.name?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={editUser.name}
                    onChange={(e) =>
                      setEditUser({ ...editUser, name: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="mail" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="mail"
                    name="mail"
                    value={editUser.mail}
                    onChange={(e) =>
                      setEditUser({ ...editUser, mail: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Select
                    value={editUser.role}
                    onValueChange={(value) =>
                      setEditUser({ ...editUser, role: value as User["role"] })
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Owner">Owner</SelectItem>
                      <SelectItem value="Staff">Staff</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                      <SelectItem value="Waiter">Waiter</SelectItem>
                      <SelectItem value="Dine In">Dine In </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right font-rubik">
                    Status
                  </Label>
                  <Select
                    value={editUser.status}
                    onValueChange={(value) =>
                      setEditUser({
                        ...editUser,
                        status: value as User["status"],
                      })
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Takeaway">Takeaway</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditOpen(false)}
                  className="h-[38px] rounded-[6px]"
                >
                  Cancel
                </Button>
                <Button
                  className="h-[38.44px] rounded-[6.989px] text-white bg-[linear-gradient(176deg,_#56DAAB_-18.78%,_#0F9996_111.3%)]"
                  type="submit"
                >
                  Save changes
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserComponent;
