"use client";

import React, { useState } from "react";
import TabSwitcher from "./Tabswitcher";


const TabSwitcherClient = () => {
  const [activeTab, setActiveTab] = useState("Learning");

  return (
    <div className="flex w-full justify-center items-center">
    <TabSwitcher
      tabs={["News", "Stories", "Learning", "Directory"]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
    </div>
   
  );
};

export default TabSwitcherClient;