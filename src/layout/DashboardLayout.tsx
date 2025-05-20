import { useThemeStore } from "@/store/useThemeStore";
import { Outlet } from "react-router-dom";
import sidebarlogo from "@/assets/siderbarlogo.png";
import personImg from "@/assets/person.jpg";
import NotificationIcon from "@/components/icons/NotificationIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import { useState } from "react";
import OwnerSiderBar from "@/features/Sidebar/DashboardSideBar";
import TourGuide from "@/components/tour/TourGuide";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div className="bg-white min-h-screen">
        {/* Top Navigation */}
        <header className="fixed w-full transform ease-in-out duration-500 z-30 flex bg-green-100 dark:bg-primary-dark p-2 items-center justify-between h-16 px-10">
          <div
            className={`logo ${
              !sidebarOpen ? "ml-12" : ""
            } dark:text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center`}
          >
            <img src={sidebarlogo} width={100} height={40} alt="Logo" />
          </div>
          {/* Spacer */}
          <div className="grow h-full flex items-center justify-center max-w-[200px]"></div>

          {/* input field */}
          <div className="hidden md:flex w-full max-w-[438px] h-[40px] px-[14px] py-[8px] items-center gap-[16px] rounded-[8px] bg-[#F6F8FB] relative border dark:border-white dark:bg-primary-dark">
            <input
              type="text"
              placeholder="Search results..."
              className="w-full bg-transparent border-none outline-none text-gray-700 dark:text-white"
            />
            <svg
              className="absolute right-4 text-gray-500 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 21l-6-6m-5 2a7 7 0 1 0-7-7 7 7 0 0 0 7 7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* icon for message and notification */}
          <div className="flex justify-center items-center gap-4">
            <div className="bg-green-200 dark:bg-green-100 size-8 flex justify-center items-center rounded-xl">
              <MessageIcon size={20} color="#202020" />
            </div>
            <div className="bg-green-200 dark:bg-green-100 size-8 flex justify-center items-center rounded-xl">
              <NotificationIcon size={20} color="#202020" />
            </div>
          </div>

          {/* User Profile */}
          <div className="flex-none h-full text-center flex items-center justify-center">
            <div className="flex space-x-3 items-center px-3">
              <div className="hidden md:flex md:flex-col md:items-end">
                <p className="text-base">Mr. Jons Smith</p>
                <p className="text-sm">Admin</p>
              </div>
              <div className="w-8 h-8 flex">
                <img
                  src={personImg}
                  alt="profile"
                  width={40}
                  height={40}
                  className="shadow rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <OwnerSiderBar
          sidebarOpen={sidebarOpen}
          toggleDarkMode={toggleTheme}
          darkMode={theme === "dark"}
          toggleSidebar={toggleSidebar}
        />

        {/* Main Content */}
        <main
          className={`pt-16 min-h-screen transition-all duration-300 ${
            sidebarOpen ? "ml-60" : "ml-12"
          }`}
        >
          <div className="p-8">
            <Outlet />
          </div>
        </main>

        {/* Tour Guide */}
        <TourGuide isAdmin={false} />
      </div>
    </div>
  );
};

export default DashboardLayout;
