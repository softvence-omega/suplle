// import { useSidebarStore } from "@/store/useSidebarStore";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { IoHome } from "react-icons/io5";
// import { IoBarChartSharp } from "react-icons/io5";
// import { IoMdSettings } from "react-icons/io";
// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { TbLayoutDashboardFilled } from "react-icons/tb";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// const Sidebar = () => {
//   const isOpen = useSidebarStore((state) => state.isOpen);
//   const toggle = useSidebarStore((state) => state.toggle);

//   const sidebarVariants = {
//     open: { width: "16rem" },
//     closed: { width: "4rem" },
//   };

//   const menuItems = [
//     {
//       to: "/dashboard",
//       icon: <IoHome className="w-5 h-5" />,
//       text: "Dashboard",
//     },
//     {
//       to: "/analytics",
//       icon: <IoBarChartSharp className="w-5 h-5" />,
//       text: "Analytics",
//     },
//     {
//       to: "/settings",
//       icon: <IoMdSettings className="w-5 h-5" />,
//       text: "Settings",
//     },
//     { to: "/about", icon: <IoMdSettings className="w-5 h-5" />, text: "About" },
//   ];

//   return (
//     <motion.aside
//       initial={isOpen ? "open" : "closed"}
//       animate={isOpen ? "open" : "closed"}
//       variants={sidebarVariants}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       className={`bg-primary text-white dark:bg-primary-dark border-r min-h-screen p-4 overflow-hidden flex flex-col ${
//         !isOpen ? "px-10 items-center" : ""
//       }`}
//     >
//       <div className="flex justify-between items-center">
//         <h2 className="font-bold text-lg">
//           {isOpen ? (
//             "Dashboard"
//           ) : (
//             <TbLayoutDashboardFilled className="w-7 h-7" />
//           )}
//         </h2>
//         <Button className="ms-1" variant="ghost" size="sm" onClick={toggle}>
//           {isOpen ? <FaLongArrowAltLeft /> : <FaLongArrowAltRight />}
//         </Button>
//       </div>

//       <nav className="flex-1 mt-12">
//         <TooltipProvider delayDuration={100}>
//           <ul className="space-y-4">
//             {menuItems.map((item) => (
//               <motion.li
//                 key={item.to}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {!isOpen ? (
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Link
//                         to={item.to}
//                         className="w-10 h-10 flex items-center justify-center p-2 rounded-lg hover:bg-white hover:text-black dark:hover:bg-primary transition-colors"
//                       >
//                         {item.icon}
//                       </Link>
//                     </TooltipTrigger>
//                     <TooltipContent side="right" className="ml-2">
//                       {item.text}
//                     </TooltipContent>
//                   </Tooltip>
//                 ) : (
//                   <Link
//                     to={item.to}
//                     className="flex items-center justify-start p-2 rounded-lg hover:bg-white hover:text-black dark:hover:bg-primary transition-colors"
//                   >
//                     {item.icon}
//                     <span className="ml-2 font-medium">{item.text}</span>
//                   </Link>
//                 )}
//               </motion.li>
//             ))}
//           </ul>
//         </TooltipProvider>
//       </nav>
//     </motion.aside>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import { ownerSeiderBarData } from "./data";
import sidebarlogo from "@/assets/siderbarlogo.png";
import { useEffect, useState } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleDarkMode: (mode: "dark" | "light") => void;
  darkMode: boolean;
  toggleSidebar: () => void;
}

const OwnerSiderBar = ({
  sidebarOpen,
  toggleDarkMode,
  darkMode,
  toggleSidebar,
}: SidebarProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`w-60 ${
        sidebarOpen && !isMobile ? "translate-x-0" : "-translate-x-48"
      } fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-primary dark:bg-primary-dark`}
    >
      {/* Open sidebar button */}
      <div
        id="sidebarLogo"
        className={`max-toolbar ${
          sidebarOpen && !isMobile ? "translate-x-0" : "translate-x-24 scale-x-0"
        } w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white bg-primary dark:bg-primary-dark absolute top-2 rounded-full h-12`}
      >
        <div className="flex pl-4 items-center space-x-2">
          <div>
            <div
              onClick={() => toggleDarkMode("dark")}
              className={`moon text-white hover:text-green-700 cursor-pointer ${
                darkMode ? "hidden" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </div>
            <div
              onClick={() => toggleDarkMode("light")}
              className={`sun text-white hover:text-green-700 cursor-pointer  ${
                darkMode ? "" : "hidden"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 group pr-2 py-1 rounded-full text-white">
          <div className="transform ease-in-out duration-300 mr-12">
            <img src={sidebarlogo} width={70} height={30} alt="Logo" />
          </div>
        </div>
      </div>

      {/* Toggle sidebar button */}
      {/* Mobile: Replace grid icon with dark mode toggle */}
{isMobile && (
  <div className="-right-6 absolute top-2 p-3 rounded-full border-4 border-white bg-green-300 dark:bg-primary-dark flex items-center gap-2">
    {darkMode ? (
      <div onClick={() => toggleDarkMode("light")} className="cursor-pointer text-white hover:text-yellow-400">
        {/* Sun Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </div>
    ) : (
      <div onClick={() => toggleDarkMode("dark")} className="cursor-pointer text-white">
        {/* Moon Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    )}
  </div>
)}


      {/* For desktop - show full sidebar when open */}
      {!isMobile && (
        <div
          className={`max ${
            sidebarOpen ? "flex" : "hidden"
          } text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]`}
        >
          {ownerSeiderBarData.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.url}
                className={({ isActive }) =>
                  `w-full text-white px-2 py-3 pl-8 flex items-center space-x-3 ${
                    isActive
                      ? "bg-green-700 dark:bg-[#363232]"
                      : "hover:bg-green-300 dark:hover:bg-[#242424]"
                  }`
                }
              >
                <Icon size={22} color="white" />
                <p className="text-base text-white">{item.label}</p>
              </NavLink>
            );
          })}
        </div>
      )}

      {/* For mobile - always show icons only */}
      <div
        className={`mini ${
          isMobile || !sidebarOpen ? "flex" : "hidden"
        } mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]`}
      >
        {ownerSeiderBarData.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.url}
              className={({ isActive }) =>
                `justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full p-3 flex ${
                  isActive
                    ? "bg-green-700 dark:bg-[#363232]"
                    : "hover:bg-green-300 dark:hover:bg-[#242424]"
                }`
              }
            >
              <Icon size={22} color="white" />
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default OwnerSiderBar;
