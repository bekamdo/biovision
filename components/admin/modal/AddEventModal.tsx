"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddEventModal({ isOpen, onClose }: AddEventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    region: '',
    eventType: 'webinar',
    format: 'online',
    description: '',
    registrationLink: ''
  });

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event data:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out"></div>

      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Modal content */}
        <div
          ref={modalRef}
          className="relative w-full max-w-3xl transform rounded-[50px] bg-white/90 backdrop-blur-[10px] p-6 sm:p-8 lg:p-12 transition-all duration-300 ease-in-out"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(1)' : 'scale(0.95)'
          }}
        >
          {/* Back Button */}
          <div className="flex items-start gap-12 mb-5">
            <button 
              onClick={onClose}
              className="flex w-12 h-12 items-center justify-center rounded-full border border-[#2C2A29]/40 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#2C2A29]/60" />
            </button>
          </div>

          {/* Header */}
          <div className="flex flex-col items-center gap-2.5 mb-8">
            <h1 className="text-[#2C2A29] text-2xl sm:text-3xl font-bold leading-normal tracking-[-0.96px] text-center">
              Add New Event
            </h1>
            <p className="text-[#2C2A29] text-lg sm:text-xl font-normal leading-[150%] text-center">
              Add new events, update agendas, and monitor registrations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div className="w-full">
              <input
                type="text"
                name="title"
                placeholder="Title goes here"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full text-[#2C2A29]/60 text-2xl sm:text-3xl font-bold leading-normal tracking-[-1.2px] p-5 text-center border border-[#2C2A29]/40 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
              />
            </div>

            {/* Date Input */}
            <div>
              <input
                type="text"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full text-[#2C2A29]/60 text-xl font-normal leading-[150%] p-5 border border-[#2C2A29]/40 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
              />
            </div>

            {/* Region Input */}
            <div>
              <input
                type="text"
                name="region"
                placeholder="Region"
                value={formData.region}
                onChange={handleInputChange}
                className="w-full text-[#2C2A29]/60 text-xl font-normal leading-[150%] p-5 border border-[#2C2A29]/40 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
              />
            </div>

            {/* Event Type */}
            <div>
              <h2 className="text-[#2C2A29] text-xl font-bold leading-normal tracking-[-0.6px] mb-4">
                Event Type
              </h2>
              <div className="flex flex-wrap gap-2.5 min-h-[50px] items-start content-start">
                {[
                  { value: 'webinar', label: 'Webinar' },
                  { value: 'workshop', label: 'Workshop' },
                  { value: 'site-tour', label: 'Site Tour' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleRadioChange('eventType', option.value)}
                    className={`text-sm font-normal leading-[150%] px-4 py-2 rounded-[30px] cursor-pointer transition-colors ${
                      formData.eventType === option.value
                        ? "bg-[#2E7D32] text-[#FDFBF6]"
                        : "bg-[#2E7D32]/10 text-[#2C2A29] hover:bg-[#2E7D32]/20"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Format */}
            <div>
              <h2 className="text-[#2C2A29] text-xl font-bold leading-normal tracking-[-0.6px] mb-4">
                Format
              </h2>
              <div className="flex flex-wrap gap-2.5 min-h-[50px] items-start content-start">
                {[
                  { value: 'online', label: 'Online' },
                  { value: 'in-person', label: 'In Person' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleRadioChange('format', option.value)}
                    className={`text-sm font-normal leading-[150%] px-4 py-2 rounded-[30px] cursor-pointer transition-colors ${
                      formData.format === option.value
                        ? "bg-[#2E7D32] text-[#FDFBF6]"
                        : "bg-[#2E7D32]/10 text-[#2C2A29] hover:bg-[#2E7D32]/20"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-[#2C2A29] text-xl font-bold leading-normal tracking-[-0.6px] mb-4">
                Write a brief description
              </h2>
              <textarea
                name="description"
                placeholder="Write a brief description..."
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full text-[#2C2A29]/60 text-xl font-normal leading-[150%] p-5 border border-[#2C2A29]/40 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60 resize-none"
              />
            </div>

            {/* Registration */}
            <div>
              <h2 className="text-[#2C2A29] text-xl font-bold leading-normal tracking-[-0.6px] mb-4">
                Registration
              </h2>
              <input
                type="text"
                name="registrationLink"
                placeholder="Add a Registration Link"
                value={formData.registrationLink}
                onChange={handleInputChange}
                className="w-full text-[#2C2A29]/60 text-xl font-normal leading-[150%] p-5 border border-[#2C2A29]/40 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button 
                type="submit"
                className="bg-[#2E7D32] text-[#FDFBF6] text-sm font-bold leading-normal px-[60px] py-5 rounded-full hover:bg-[#2E7D32]/90 transition-colors"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
