import React from "react";

interface TabSwitcherProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
   
       <div className="flex flex-wrap justify-center px-4 py-3 gap-3 rounded-[10px] border border-gray-200 bg-white shadow-sm">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`cursor-pointer flex px-3 md:px-4 py-2 md:py-3 items-center gap-2.5 rounded ${
            activeTab === tab
              ? "bg-dashboard-green shadow-inner text-white"
              : "bg-dashboard-activity-bg text-dashboard-text"
          } text-sm md:text-base font-medium leading-[135%]`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};
    


export default TabSwitcher;
