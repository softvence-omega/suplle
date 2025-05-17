import React from 'react';
import type { OrderStatus } from './order';


type Tab = 'All' | OrderStatus;

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs: Tab[] = ['All', 'Pending', 'Processing', 'Completed', 'Cancelled'];

  return (
    <div className="border-b border-[#DDDDDD]">
      <nav className="-mb-px flex space-x-4 overflow-x-auto sm:space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              whitespace-nowrap pb-4 px-1 text-sm font-light border-b-2  transition-colors duration-200
              ${
                activeTab === tab
                  ? 'border-[#333333] text-black font-normal '
                  : 'border-transparent text-gray-500   hover:text-gray-700 hover:border-gray-300 '
              }
            `}
            aria-current={activeTab === tab ? 'page' : undefined}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;