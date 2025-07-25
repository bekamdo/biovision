"use client"

import Header from "@/components/admin/shared/Header";
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection";

import Pagination from "@/components/admin/shared/Pagination";
import { useState } from "react";


export default function OutletPage() {
const [isModalOpen, setIsModalOpen] = useState(false);
const handleOpenModal = () => setIsModalOpen(true);
const handleCloseModal = () => setIsModalOpen(false);
  
  const statCardsData = [
    {
      title: "Outlets",
      value: "4958",
      change: "+1292 past week",
      bgColor: "bg-[#FFFDF7]",
    },
    {
      title: "New Products",
      value: "1292",
      change: "+10% from last week",
      bgColor: "bg-[#F8FFEF]",
    },
    {
      title: "Outlets",
      value: "4592",
      change: "+ 0 this week",
      bgColor: "bg-[#DFF1FF]",
    },
  ]

  const recentUploadCardData = {
    title: "BioVision uploaded a new product",
    subtitle: "They have been 12 uploads today",
    buttonText: "See All Activity",
  }
  return (
    <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F8F9FA] min-h-screen w-full max-w-[1277px] mx-auto">
     
      <Header title="Outlet Management" description="There is an upcoming outlet visit" />
       <StatsAndActivitySection
        title="All Outlets"
        statCardsData={statCardsData}
        recentUploadCardData={recentUploadCardData}
        onAddClick={handleOpenModal}
      />


      <Pagination />
      
    </div>
  );
}
