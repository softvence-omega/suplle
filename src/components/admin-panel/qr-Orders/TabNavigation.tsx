import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';
import type { OrderStatus } from './order';

type Tab = 'All' | OrderStatus;

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const allTabs: Tab[] = ['All', 'Pending', 'Processing', 'Completed', 'Cancelled'];

  const visibleTabs = allTabs.slice(0, 3); // for mobile
  const hiddenTabs = allTabs.slice(3);     // for mobile dropdown

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="border-b border-[#DDDDDD] dark:border-gray-800">
      {/* ✅ Mobile view with More button */}
      <div className="flex justify-between items-center sm:hidden">
        {/* Left: First 3 Tabs */}
        <nav className="flex space-x-4" aria-label="Tabs">
          {visibleTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`
                pb-2 px-1 text-sm font-light border-b-2 
                ${
                  activeTab === tab
                    ? 'border-[#333333] text-black font-normal dark:border-[#FFFFFF] dark:text-[#FFFFFF]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Right: More Dropdown */}
        {hiddenTabs.length > 0 && (
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="pb-2 px-1 text-sm font-light border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 flex items-center"
            >
           
              <ChevronsRight className="w-4 h-4 ml-1 bark:" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
                <div className="py-1">
                  {hiddenTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        onTabChange(tab);
                        setDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        activeTab === tab
                          ? 'bg-gray-100 text-black dark:bg-gray-700 dark:text-white'
                          : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ✅ Desktop view: Show all tabs normally */}
      <nav className="hidden sm:flex space-x-6 mt-1" aria-label="Tabs">
        {allTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              pb-2 px-1 text-sm font-light border-b-2 transition-colors duration-200
              ${
                activeTab === tab
                  ? 'border-[#333333] text-black font-normal dark:border-[#FFFFFF] dark:text-[#FFFFFF]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
