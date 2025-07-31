"use client"

import { useState } from "react"
import Header from "@/components/admin/shared/Header"
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection"
import { Plus, Search } from "lucide-react"
import { AddEventModal } from "@/components/admin/modal/AddEventModal"
import { ShowEventModal } from "@/components/admin/modal/ShowEventModal"
import Pagination from "@/components/admin/shared/Pagination"
import EventCard from "@/components/admin/cards/EventCard" // ✅ your reusable component
import ResponsiveArticleTable from "@/components/admin/table/ResponsiveArticleTable"
import { sampleArticles } from "@/app/data/sampledata"

const EventsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isShowModalOpen, setShowIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

    const handleViewEvent = (eventData: any) => {
    setSelectedEvent(eventData)
    setShowIsModalOpen(true)
   
  }

  const statCardsData = [
    { title: "Events", value: "489", change: "+2 past week", bgColor: "bg-[#FFFDF7]" },
    { title: "Upcoming", value: "36", change: "this week", bgColor: "bg-[#F8FFEF]" },
    { title: "Pending", value: "13", change: "0 published this week", bgColor: "bg-[#DFF1FF]" },
  ]


  const allEvents = [
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/36e3eb66e2344ce9e696bc5c987e253e61492d0d?placeholderIfAbsent=true",
      imageAlt: "Getting Started with Organic Farming",
      title: "Getting Started with Organic Farming",
      description: "Discover the basics of AE/EOA, ask live questions, and connect with certified producers.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Online via Zoom",
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/8e459c14f2205b03d6d115109135a19fb104d8ac?placeholderIfAbsent=true",
      imageAlt: "Organic Soil Health & Composting Workshop",
      title: "Organic Soil Health & Composting Workshop",
      description: "Learn how to build healthy, living soil through composting, mulching, and crop rotation.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi",
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/0c7e2189f3e741a72cdd2a790179c79112c47d85?placeholderIfAbsent=true",
      imageAlt: "AE/EOA in Practice: For Consumers & Advocates",
      title: "AE/EOA in Practice: For Consumers & Advocates",
      description: "How can consumers make impact-driven choices? Join us for a dynamic online session...",
      dateLocation: "August 1, 2025 | 10:00 AM EAT | Online via Zoom",
    },
  ]

  const pendingEvents = [
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/36e3eb66e2344ce9e696bc5c987e253e61492d0d?placeholderIfAbsent=true",
      imageAlt: "Getting Started with Organic Farming",
      title: "Getting Started with Organic Farming",
      description: "Discover the basics of AE/EOA, ask live questions, and connect with certified producers.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Online via Zoom",
      showPublishButton: true
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/8e459c14f2205b03d6d115109135a19fb104d8ac?placeholderIfAbsent=true",
      imageAlt: "Organic Soil Health & Composting Workshop",
      title: "Organic Soil Health & Composting Workshop",
      description: "Learn how to build healthy, living soil through composting, mulching, and crop rotation.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi",
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/0c7e2189f3e741a72cdd2a790179c79112c47d85?placeholderIfAbsent=true",
      imageAlt: "AE/EOA in Practice: For Consumers & Advocates",
      title: "AE/EOA in Practice: For Consumers & Advocates",
      description: "How can consumers make impact-driven choices? Join us for a dynamic online session...",
      dateLocation: "August 1, 2025 | 10:00 AM EAT | Online via Zoom",
    },
  ]


  const recentUploadCardData = {
    title: "There is an upcoming outlet visit",
    subtitle: "Why not check it out?",
    buttonText: "See All Events",
  }

  return (
    <>
      <AddEventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ShowEventModal isOpen={isShowModalOpen} onClose={() => setShowIsModalOpen(false)} event={selectedEvent}  />

      <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F8F9FA] min-h-screen w-full max-w-[1277px] mx-auto">
        <Header title="Events Management" description="Create and manage all events" />

        <StatsAndActivitySection
          title="All Events"
          statCardsData={statCardsData}
          recentUploadCardData={recentUploadCardData}
          defaultModalType="addEvent"
        />

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                 <ResponsiveArticleTable articles={sampleArticles} />
              </div>

        {/* All Events */}
        {/* <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
              {allEvents.map((event, index) => (
                <EventCard
                  key={index}
                  {...event}
                  showPublishButton={false}
                  onViewClick={() => handleViewEvent(event)}
                />
              ))}
            </div>
          </div> */}

          {/* Pending Approval Section */}
          {/* <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
              <h2 className="text-2xl font-medium text-events-text">Pending Approval</h2>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="bg-white border border-white rounded-lg px-2.5 py-3 flex items-center gap-2 flex-1 sm:flex-none sm:w-[355px]">
                  <Search className="w-6 h-6 text-events-text flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-sm text-events-text flex-1"
                  />
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  
                  className="bg-events-primary rounded-full p-3 hover:bg-events-primary-hover transition-colors flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
              {pendingEvents.map((event, index) => (
                <EventCard
                  key={`pending-${index}`}
                  {...event}
                  onViewClick={() => handleViewEvent(event)}
                />
              ))}
            </div>
          </div>
        </div> */}

        {/* Pagination */}
        <div className="mt-10 w-full flex justify-center">
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default EventsPage
