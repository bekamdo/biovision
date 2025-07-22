import React from "react";
import {
 
  Search,
  Filter,
 
} from "lucide-react";
import StatsCardSection from "@/components/admin/shared/StatsCardSection";
import { UploadItem } from "@/components/admin/uploads/UploadItem";
import ChartAndStoriesSection from "@/components/admin/shared/ChartAndStoriesSection";
import { PendingItem } from "@/components/admin/uploads/PendingItem";
import { ActivityCard } from "@/components/admin/cards/ActivityCard";
import TabSwitcherClient from "@/components/admin/shared/TabSwitcherClient";
import ResourceTable from "@/components/admin/table/ResourceTable";


export default function Index() {
  return (
    <div className="flex w-full flex-col items-start gap-5 p-4 md:p-6 lg:p-5 bg-[#F5F5F5] font-sans max-w-[1338px] mx-auto">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#2c2a29] mb-2">Welcome Back, Admin</h1>
          <p className="text-[#666666]">Here's a snapshot of how the platform is performing.</p>
        </section>

      {/* Stats Cards */}
      <div className="flex flex-col items-end gap-5 self-stretch">
         <StatsCardSection/>
        

        {/* Analytics Section */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center sm:px-6 lg:px-8 w-full">
        <div className="flex w-full items-center">
           <div className="text-dashboard-text text-lg sm:text-xl md:text-2xl font-bold leading-snug sm:leading-9">
              Analytics
           </div>
        </div>
      </div>

        <ChartAndStoriesSection/>

        {/* Resource Management */}
        <div className="flex items-end self-stretch">
          <div className="flex w-full items-center">
            <div className="text-dashboard-text text-xl md:text-2xl font-bold leading-9">
              Resource Management
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-start self-stretch gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full xl:w-[729px]">
            {/* Recently Uploaded */}
            <div className="w-full h-[439px] flex-shrink-0 relative">
              <div className="w-full h-[439px] flex-shrink-0 rounded-xl border border-gray-300 bg-white absolute left-0 top-0"></div>
              <div className="absolute left-4 md:left-6 top-4 text-dashboard-text text-lg md:text-xl font-bold leading-7">
                Recently Uploaded
              </div>
              <div className="absolute left-4 md:left-6 top-16 flex flex-col gap-2 right-4 md:right-6">
                <UploadItem
                  title="Outing schedule for every departement"
                  timeAgo="5 Minutes ago"
                />
                <UploadItem
                  title="Meeting HR Department"
                  timeAgo="Yesterday, 12:30 PM"
                />
                <UploadItem
                  title="IT Department need two more talents for UX/UI Designer position"
                  timeAgo="Yesterday, 09:15 AM"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-10 border bg-white border-t border-gray-300 rounded-b-xl flex items-center justify-center">
                <div className="text-dashboard-success text-center text-sm font-medium leading-5">
                  View All
                </div>
              </div>
            </div>

            {/* Pending Approval */}
            <div className="w-full h-[439px] flex-shrink-0 relative">
              <div className="w-full h-[439px] flex-shrink-0 rounded-xl border border-gray-300 bg-white absolute left-0 top-0"></div>
              <div className="absolute left-4 md:left-6 top-5 text-dashboard-text text-lg md:text-xl font-bold leading-7">
                Pending Approval
              </div>
              <div className="absolute left-4 md:left-5 top-16 text-dashboard-text text-xs font-normal leading-7">
                Priority
              </div>
              <div className="absolute left-4 md:left-6 top-24 flex flex-col gap-1 right-4 md:right-6">
                <PendingItem
                  title="Review candidate applications"
                  timeAgo="Today - 11.30 AM"
                  category="Priority"
                />
              </div>
              <div className="absolute left-4 md:left-5 top-44 text-dashboard-text text-xs font-normal leading-7">
                Other
              </div>
              <div className="absolute left-4 md:left-6 top-52 flex flex-col gap-1 right-4 md:right-6">
                <PendingItem
                  title="Interview with candidates"
                  timeAgo="Today - 10.30 AM"
                  category="Other"
                />
                <PendingItem
                  title="Short meeting with product designer from IT Department"
                  timeAgo="Today - 09.15 AM"
                  category="Other"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-10 bg-white border-t  border border-gray-300 rounded-b-xl flex items-center justify-center">
                <div className="text-dashboard-success text-center text-sm font-medium leading-5">
                  View All
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full xl:w-[506px] flex-col gap-5">
            <ActivityCard
              title="This Post is trending on Facebook"
              description="Kindly check the requirements and terms of work and make sure everything is right."
              footer="There have been 12 uploads today"
            />
            <ActivityCard
              title="This Post is trending on Facebook"
              description="Kindly check the requirements and terms of work and make sure everything is right."
              footer="There have been 12 uploads today"
            />
          </div>
        </div>

        {/* All Resources */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end self-stretch gap-4">
          <div className="flex items-center">
            <div className="text-dashboard-text text-xl md:text-2xl font-medium leading-9">
              All Resources
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <div className="flex w-full sm:w-[300px] md:w-[355px] h-12 px-2.5 py-5 items-center gap-2.5 rounded-lg border border-gray-300 bg-white">
              <Search className="w-6 h-6 flex-shrink-0 text-gray-400" />
              <div className="text-gray-400 text-sm font-normal leading-normal">
                Search...
              </div>
            </div>
            <div className="flex w-12 h-12 px-3 py-3 justify-center items-center rounded-[50px] bg-dashboard-green flex-shrink-0">
              <Filter className="w-5 h-5 flex-shrink-0 text-white" />
            </div>
          </div>
        </div>

       

        {/* Tab Switcher */}
         <TabSwitcherClient/>


     <div className="min-h-screen container mx-auto bg-white py-8">
      
        <ResourceTable />
     
    </div>
      </div>
    </div>
  );
}
