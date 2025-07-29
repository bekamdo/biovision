"use client"

import Header from "@/components/admin/shared/Header";
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { AddEventModal } from "@/components/admin/modal/AddEventModal";
import ResponsiveArticleTable from "@/components/admin/table/ResponsiveArticleTable";
import { sampleArticles } from "@/app/data/sampledata";
import Pagination from "@/components/admin/shared/Pagination";

const SurveyPage = () => {
  
    
  const statCardsData = [
    {
      title: "Surveys",
      value: "4,958",
      change: "+2 past week",
      bgColor: "bg-[#FFFDF7]",
    },
    {
      title: "Survey Performance",
      value: "36",
      change: "+10% from last week",
      bgColor: "bg-[#F8FFEF]",
    },
    {
      title: "Outlets",
      value: "4,592",
      change: "+ 0 this week",
      bgColor: "bg-[#DFF1FF]",
    },
  ]


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const recentUploadCardData = {
    title: "There is an upcoming outlet visit",
    subtitle: "Why not check it out?",
    buttonText: "See All Events",
  }
  return (
    <>
    <AddEventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
     <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F8F9FA] min-h-screen w-full max-w-[1277px] mx-auto">
          <Header title="Survey Management" description="Design and publish user surveys to collect community feedback." />
         <StatsAndActivitySection
        title="All Surveys"
        statCardsData={statCardsData}
        recentUploadCardData={recentUploadCardData}
        defaultModalType="createSurvey"
        
      />
       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <ResponsiveArticleTable articles={sampleArticles} />
      </div>
      <Pagination/>
    </div>
    
    </>
  )
}

export default SurveyPage;