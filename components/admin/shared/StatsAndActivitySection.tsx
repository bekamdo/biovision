
"use client"

import { Plus, Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { StatCard } from '../cards/StatCard';
import { ActivityCard } from '../cards/ActivityCard';
import RecentUploadCard from '../cards/RecentUploadCard';
import Modal from '../modal/Modal';


export const StatsAndActivitySection = ({title}:{title:string}) => {
   
    const modalRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
   const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const [selectedTags, setSelectedTags] = useState<string[]>(["Low fat"]);
  const [titleModal, setTitleModal] = useState("");
  const [description, setDescription] = useState("");
    // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);
    return (
        <>
            {/* Modal Overlay */}
         {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                  {/* Background overlay */}
 <div className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out"></div>
        
       {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        titleModal={titleModal}
        description={description}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        setTitleModal={setTitleModal}
        setDescription={setDescription}
      />
        
        
                </div>
              )}
         {/* Stats and Activity Section */}
      <div className="flex flex-col justify-center items-start gap-[20px] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[20px]">
          {/* Stats Cards */}
          <div className="flex flex-1 flex-col items-start gap-[20px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full">
              {/* Listed Products */}
              <StatCard
                 title="Listed Products"
                 value="78,093"
                 change="+1,292 past week"
                 bgColor="bg-[#FFFDF7]"
               />

              {/* New Products */}
                 <StatCard
                 title="New Products"
                 value="1,292"
                 change="+10% from last week"
                 bgColor="bg-[#F8FFEF]"
               />
              

              {/* Outlets */}
             <StatCard
                 title="Outlets"
                 value=" 4,592"
                 change="+0 this week"
                 bgColor="bg-[#DFF1FF]"
               />
              
            </div>
          </div>

          {/* Activity Card */}
          <RecentUploadCard title='BioVision uploaded a new product' subtitle='There have been 12 uploads today' buttonText='See All Activity'/>

        </div>

        {/* All Products Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-[15px]">
          <div className="text-[#2C2A29] font-helvetica text-[24px] font-medium leading-[36px] flex items-center">
            {title}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[15px] w-full sm:w-auto">
            {/* Search Bar */}
            <div className="flex w-full sm:w-[280px] lg:w-[355px] h-[48px] p-[20px_10px] items-center gap-[10px] rounded-[8px] border border-gray-300 bg-white">
              <Search className="w-[19px] h-[19px] text-gray-400" />
              <div className="text-gray-400 font-helvetica text-[14px] font-normal leading-normal">
                Search...
              </div>
            </div>
            {/* Add Button */}
            <div  onClick={() => setIsModalOpen(true)} className="flex hover:cursor-pointer  w-[48px] h-[48px] p-[11px_13px] justify-center items-center rounded-[50px] bg-[#2E7D32] flex-shrink-0">
              <Plus className="w-[12px] h-[12px] text-white" />
            </div>
          </div>
        </div>
        </div>

        
        </>
    )
}


export default StatsAndActivitySection;


     