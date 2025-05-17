import React, { useState } from "react";
import type { UserStatus, User } from "./user";
import UserList from "./UserList";
import UserTabNavigation from "./UserTabNavigation";

const mockUsers: User[] = [
  {
    id: "INV001",
    vendor: "John Doe",
    role: "Owner",
    time: "10:30 AM",
    name: "John Doe",
    mail: "john@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "INV002",
    vendor: "Jane Smith",
    role: "Staff",
    time: "11:45 AM",
    name: "Jane Smith",
    mail: "jane@example.com",
    status: "Pending",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: "INV003",
    vendor: "Alice Johnson",
    role: "Staff",
    time: "12:15 PM",
    name: "Alice Johnson",
    mail: "alice@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: "INV004",
    vendor: "Bob Williams",
    role: "Owner",
    time: "1:30 PM",
    name: "Bob Williams",
    mail: "bob@example.com",
    status: "Pending",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "INV005",
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

  const handleTabChange = (tab: "All" | UserStatus) => {
    setActiveTab(tab);
  };

  const handleUserClick = (userId: string) => {
    console.log(`User ${userId} clicked`);
    // Implement user details view here
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
          users={mockUsers}
          filter={activeTab}
          onUserClick={handleUserClick}
        />
      </div>
    </div>
  );
};

export default UserComponent;
