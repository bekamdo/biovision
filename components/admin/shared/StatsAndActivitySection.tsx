"use client"
import { Plus, Search } from "lucide-react"
import { useMemo, useState } from "react"

import { StatCard } from "../cards/StatCard"
import RecentUploadCard from "../cards/RecentUploadCard"

import CreateSurveyModal from "../modal/CreateSurveyModal"
import NewsletterModal from "../modal/NewsletterModal"
import AddOutletModal from "../modal/AddOutletModal"
import { ShowEventModal } from "../modal/ShowEventModal"
import AddProductModal from "../modal/AddProductModal "
import { AddEventModal } from "../modal/AddEventModal"

export interface StatCardData {
  title: string
  value: string
  change: string
  bgColor: string
}

interface ShowEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event?: {
    title: string;
    image: string;
    category: string;
    date: string;
    summary: string;
    learn: string[];
  } | null;
}

export interface RecentUploadCardData {
  title: string
  subtitle: string
  buttonText: string
  backgroundColor?: string
  buttonColor?: string
}

type ModalType = "newsletter" | "addOutlet" | "showEvent" | "addProduct"| "addEvent"| "createSurvey" | null

interface StatsAndActivitySectionProps {
  title: string
  statCardsData: StatCardData[]
  recentUploadCardData: RecentUploadCardData
  onSearch?: (value: string) => void
  defaultModalType?: ModalType
}

export const StatsAndActivitySection = ({
  title,
  statCardsData,
  recentUploadCardData,
  onSearch,
  defaultModalType
}: StatsAndActivitySectionProps) => {
  const [modalType, setModalType] = useState<ModalType>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>(["Low fat"])
  const [titleModal, setTitleModal] = useState("")
  const [description, setDescription] = useState("")
  const [selectedEvent, setSelectedEvent] = useState<ShowEventModalProps["event"]>(null);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const statCards = useMemo(
    () =>
      statCardsData.map((card, index) => (
        <StatCard
          key={index}
          title={card.title}
          value={card.value}
          change={card.change}
          bgColor={card.bgColor}
        />
      )),
    [statCardsData]
  )

  const modalMap: Record<Exclude<ModalType, null>, React.ReactNode> = {
    newsletter: (
      <NewsletterModal isOpen onClose={() => setModalType(null)} />
    ),
    createSurvey:(
      <CreateSurveyModal isOpen onClose={() => setModalType(null)} />
    ),
    addProduct:(
      <AddProductModal
          isOpen
        onClose={() => setModalType(null)}
        titleModal={titleModal}
        description={description}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        setTitleModal={setTitleModal}
        setDescription={setDescription}
      
      
      />
    ),
    addOutlet: (
      <AddOutletModal
        isOpen
        onClose={() => setModalType(null)}
        titleModal={titleModal}
        description={description}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        setTitleModal={setTitleModal}
        setDescription={setDescription}
      />
    ),
    showEvent: (
   <ShowEventModal
    isOpen
    onClose={() => setModalType(null)}
    event={selectedEvent}
     />
    ),
    addEvent:(
      <AddEventModal isOpen onClose={() => setModalType(null)}/>
    )
  }

  return (
    <>
      {/* Modal rendering */}
      {modalType && modalMap[modalType]}

      <div className="flex flex-col justify-center items-start gap-[20px] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[20px]">
          {/* Stats Cards */}
          <div className="flex flex-1 flex-col items-start gap-[10px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full min-w-0">
              {statCards}
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

        {/* Header Row with Search and Add */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-[15px]">
          <div className="text-[#2C2A29] font-helvetica text-[24px] font-medium leading-[36px] flex items-center">
            {title}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[15px] w-full sm:w-auto">
            {/* Search Input */}
            <div className="flex w-full sm:w-[280px] lg:w-[355px] h-[48px] px-[10px] items-center gap-[10px] rounded-[8px] border border-gray-300 bg-white">
              <Search className="w-[19px] h-[19px] text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-gray-400 font-helvetica text-[14px] font-normal bg-transparent"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>

            {/* Add Button */}
            <button
              onClick={() => setModalType(defaultModalType || null)}
              className="flex hover:cursor-pointer w-[48px] h-[48px] p-[11px_13px] justify-center items-center rounded-full bg-[#2E7D32] flex-shrink-0"
              aria-label="Add New"
            >
              <Plus className="w-[12px] h-[12px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatsAndActivitySection
