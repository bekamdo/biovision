"use client"

import Header from "@/components/admin/shared/Header";
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { AddEventModal } from "@/components/admin/modal/AddEventModal";
import Pagination from "@/components/admin/shared/Pagination";
import { ShowEventModal } from "@/components/admin/modal/ShowEventModal";

const EventsPage = () => {
  
    
  const statCardsData = [
    {
      title: "Events",
      value: "489",
      change: "+2 past week",
      bgColor: "bg-[#FFFDF7]",
    },
    {
      title: "Upcoming",
      value: "36",
      change: "this week",
      bgColor: "bg-[#F8FFEF]",
    },
    {
      title: "Pending",
      value: "13",
      change: "0 published this week",
      bgColor: "bg-[#DFF1FF]",
    },
  ]
  const allEvents = [
    {
      imageSrc: "/placeholder.svg?height=447&width=400",
      imageAlt: "Getting Started with Organic Farming",
      title: "Getting Started with Organic Farming",
      description: "Discover the basics of AE/EOA, ask live questions, and connect with certified producers.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Online via Zoom",
    },
    {
      imageSrc: "/placeholder.svg?height=447&width=400",
      imageAlt: "Organic Soil Health & Composting Workshop",
      title: "Organic Soil Health & Composting Workshop",
      description: "Learn how to build healthy, living soil through composting, mulching, and crop rotation.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi",
    },
    {
      imageSrc: "/placeholder.svg?height=447&width=400",
      imageAlt: "AE/EOA in Practice: For Consumers & Advocates",
      title: "AE/EOA in Practice: For Consumers & Advocates",
      description:
        "How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and tools for conscious consumption.",
      dateLocation: "August 1, 2025 | 10:00 AM EAT | Online via Zoom",
    },
  ]

  const pendingEvents = [
    {
      imageSrc: "/placeholder.svg?height=447&width=400",
      imageAlt: "Getting Started with Organic Farming",
      title: "Getting Started with Organic Farming",
      description: "Discover the basics of AE/EOA, ask live questions, and connect with certified producers.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Online via Zoom",
    },
    {
      imageSrc: "/placeholder.svg?height=447&width=400",
      imageAlt: "Organic Soil Health & Composting Workshop",
      title: "Organic Soil Health & Composting Workshop",
      description: "Learn how to build healthy, living soil through composting, mulching, and crop rotation.",
      dateLocation: "July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi",
    },
    {
      imageSrc: "/placeholder.svg?height=447&width=400",
      imageAlt: "AE/EOA in Practice: For Consumers & Advocates",
      title: "AE/EOA in Practice: For Consumers & Advocates",
      description:
        "How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and tools for conscious consumption.",
      dateLocation: "August 1, 2025 | 10:00 AM EAT | Online via Zoom",
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShowModalOpen, setShowIsModalOpen] = useState(false);


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
          <Header title="Events Management" description="Create and manage all events" />
         <StatsAndActivitySection
        title="All Events"
        statCardsData={statCardsData}
        recentUploadCardData={recentUploadCardData}
        
      />
       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  

   
        {/* All Events Section */}
        <div className="mb-5">
          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Event Card 1 */}
            <div className="rounded-[20px] overflow-hidden relative group">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/36e3eb66e2344ce9e696bc5c987e253e61492d0d?placeholderIfAbsent=true"
                  alt="Getting Started with Organic Farming"
                  className="w-full aspect-[0.894] object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-black/5 rounded-[20px] flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <div className="text-white w-full overflow-hidden">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      Getting Started with Organic Farming
                    </h3>
                    <p className="text-sm sm:text-base mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words line-clamp-3">
                      Discover the basics of AE/EOA, ask live questions, and connect with certified producers.
                    </p>
                    <p className="text-xs mb-4 lg:mb-5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      July 18, 2025 | 10:00 AM EAT | Online via Zoom
                    </p>
                       <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button
                       onClick={() => setShowIsModalOpen(true)}
                       className="bg-white text-[#2e7d32] font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                        View
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="rounded-[20px] overflow-hidden relative group">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/8e459c14f2205b03d6d115109135a19fb104d8ac?placeholderIfAbsent=true"
                  alt="Organic Soil Health & Composting Workshop"
                  className="w-full aspect-[0.894] object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-black/5 rounded-[20px] flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <div className="text-white w-full overflow-hidden">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      Organic Soil Health & Composting Workshop
                    </h3>
                    <p className="text-sm sm:text-base mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words line-clamp-3">
                      Learn how to build healthy, living soil through composting, mulching, and crop rotation.
                    </p>
                    <p className="text-xs mb-4 lg:mb-5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi
                    </p>
                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button className="bg-white text-[#2e7d32] font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                        View
                      </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="rounded-[20px] overflow-hidden relative group">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/0c7e2189f3e741a72cdd2a790179c79112c47d85?placeholderIfAbsent=true"
                  alt="AE/EOA in Practice: For Consumers & Advocates"
                  className="w-full aspect-[0.894] object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-black/5 rounded-[20px] flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <div className="text-white w-full overflow-hidden">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      AE/EOA in Practice: For Consumers & Advocates
                    </h3>
                    <p className="text-sm sm:text-base mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words line-clamp-3">
                      How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and tools for conscious consumption.
                    </p>
                    <p className="text-xs mb-4 lg:mb-5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      August 1, 2025 | 10:00 AM EAT | Online via Zoom
                    </p>
                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button className="bg-white text-[#2e7d32] font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                        View
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Approval Section */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <h2 className="text-2xl font-medium text-events-text">Pending Approval</h2>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="bg-white border border-white rounded-lg px-2.5 py-3 flex items-center gap-2 flex-1 sm:flex-none sm:w-[355px]">
                <Search className="w-6 h-6 text-events-text flex-shrink-0" />
                <span className="text-sm text-events-text">Search...</span>
              </div>
              <button className="bg-events-primary rounded-full p-3 hover:bg-events-primary-hover transition-colors flex-shrink-0">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Pending Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Pending Event Card 1 */}
            <div className="rounded-[20px] overflow-hidden relative group">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/36e3eb66e2344ce9e696bc5c987e253e61492d0d?placeholderIfAbsent=true"
                  alt="Getting Started with Organic Farming"
                  className="w-full aspect-[0.894] object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-black/5 rounded-[20px] flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <div className="text-white w-full overflow-hidden">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      Getting Started with Organic Farming
                    </h3>
                    <p className="text-sm sm:text-base mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words line-clamp-3">
                      Discover the basics of AE/EOA, ask live questions, and connect with certified producers.
                    </p>
                    <p className="text-xs mb-4 lg:mb-5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      July 18, 2025 | 10:00 AM EAT | Online via Zoom
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button className="bg-white text-[#2e7d32] font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                        View
                      </button>
                      <button className="bg-white text-[#2e7d32] font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                        Publish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Event Card 2 */}
            <div className="rounded-[20px] overflow-hidden relative group">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/8e459c14f2205b03d6d115109135a19fb104d8ac?placeholderIfAbsent=true"
                  alt="Organic Soil Health & Composting Workshop"
                  className="w-full aspect-[0.894] object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-black/5 rounded-[20px] flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <div className="text-white w-full overflow-hidden">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      Organic Soil Health & Composting Workshop
                    </h3>
                    <p className="text-sm sm:text-base mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words line-clamp-3">
                      Learn how to build healthy, living soil through composting, mulching, and crop rotation.
                    </p>
                    <p className="text-xs mb-4 lg:mb-5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi
                    </p>
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button className="bg-white text-[#2e7d32]   font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                        View
                      </button>
        
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Event Card 3 */}
            <div className="rounded-[20px] overflow-hidden relative group">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/0c7e2189f3e741a72cdd2a790179c79112c47d85?placeholderIfAbsent=true"
                  alt="AE/EOA in Practice: For Consumers & Advocates"
                  className="w-full aspect-[0.894] object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-black/5 rounded-[20px] flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <div className="text-white w-full overflow-hidden">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      AE/EOA in Practice: For Consumers & Advocates
                    </h3>
                    <p className="text-sm sm:text-base mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words line-clamp-3">
                      How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and tools for conscious consumption.
                    </p>
                    <p className="text-xs mb-4 lg:mb-5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
                      August 1, 2025 | 10:00 AM EAT | Online via Zoom
                    </p>
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button className="bg-white text-[#2e7d32]  font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                        View
                      </button>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
          <Pagination/>
    </div>
      <ShowEventModal isOpen={isShowModalOpen} onClose={() => setShowIsModalOpen(false)} />
    
    </>
  )
}

export default EventsPage;


