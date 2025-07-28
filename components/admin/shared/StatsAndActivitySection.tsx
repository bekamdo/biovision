"use client"
import { Plus, Search } from "lucide-react"
import { useState } from "react" // Removed useEffect and useRef as modal handles its own state

import { StatCard } from "../cards/StatCard"
import RecentUploadCard from "../cards/RecentUploadCard"
import AddProductModal from "../modal/AddProductModal "
import CreateSurveyModal from "../modal/CreateSurveyModal"
import NewsletterModal from "../modal/NewsletterModal"
import AddOutletModal from "../modal/AddOutletModal"
import {ShowEventModal} from "../modal/ShowEventModal"



export interface StatCardData {
  title: string
  value: string
  change: string
  bgColor: string
}

export interface RecentUploadCardData {
  title: string
  subtitle: string
  buttonText: string
  backgroundColor?: string
  buttonColor?: string
}

interface StatsAndActivitySectionProps {
  title: string
  statCardsData: StatCardData[]
  recentUploadCardData: RecentUploadCardData
   onAddClick?: () => void 
}

export const StatsAndActivitySection = ({
  title,
  statCardsData,
  recentUploadCardData,
}: StatsAndActivitySectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>(["Low fat"])
  const [titleModal, setTitleModal] = useState("")
  const [description, setDescription] = useState("")
  

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <>
      {/* Modal is now self-contained and handles its own overlay */}
      {/* <AddOutletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        titleModal={titleModal}
        description={description}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        setTitleModal={setTitleModal}
        setDescription={setDescription}
      /> */}
      <NewsletterModal  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      {/* <ShowEventModal isOpen ={isModalOpen} onClose={() => setIsModalOpen(false)}/> */}

      

    

      {/* Stats and Activity Section */}
      <div className="flex flex-col justify-center items-start gap-[20px] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[20px]">
          {/* Stats Cards */}
          <div className="flex flex-1 flex-col items-start gap-[10px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] w-full">
              {statCardsData.map((card, index) => (
                <StatCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  change={card.change}
                  bgColor={card.bgColor}
                />
              ))}
            </div>
          </div>
          {/* Activity Card */}
          <RecentUploadCard
            title={recentUploadCardData.title}
            subtitle={recentUploadCardData.subtitle}
            buttonText={recentUploadCardData.buttonText}
            backgroundColor={recentUploadCardData.backgroundColor}
            buttonColor={recentUploadCardData.buttonColor}
          />
        </div>
        {/* All Products Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-[15px]">
          <div className="text-[#2C2A29] font-helvetica text-[24px] font-medium leading-[36px] flex items-center">
            {title}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[15px] w-full sm:w-auto">
            {/* Search Bar */}
            <div className="flex w-full lg:w-[355px] h-[48px] p-[20px_10px] items-center gap-[10px] rounded-[8px] border border-gray-300 bg-white">
              <Search className="w-[19px]  h-[19px] text-gray-400" />
              <div className="text-gray-400 font-helvetica text-[14px] font-normal leading-normal">Search...</div>
            </div>
            {/* Add Button */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex hover:cursor-pointer w-[48px] h-[48px] p-[11px_13px] justify-center items-center rounded-[50px] bg-[#2E7D32] flex-shrink-0"
            >
              <Plus className="w-[12px] h-[12px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatsAndActivitySection
