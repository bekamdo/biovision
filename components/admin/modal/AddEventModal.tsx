"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './../ui/radio-group';
import { Label } from './../ui/label';

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
      document.body.style.overflow = '';
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
      <div className="flex inset-0 fixed  min-h-full items-center justify-center p-4">
        {/* Modal content - Fixed dimensions */}
        <div
          ref={modalRef}
          className="relative transform rounded-[40px] bg-white/90 backdrop-blur-[10px] transition-all duration-300 ease-in-out overflow-y-auto"
          style={{
            width: '832px',
            height: '1057px',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(0.65)' : 'scale(0.59)'
          }}
        >
          <div className="p-8  w-[720px] height-[880px] mx-auto flex flex-col">
            {/* Back Button */}
            <div className="flex items-start gap-8 mb-4">
              <button 
                onClick={onClose}
                className="flex w-10 h-10 items-center justify-center rounded-full border border-[#2C2A29]/40 hover:bg-gray-50 transition-colors flex-shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-[#2C2A29]/60" />
              </button>
            </div>

            {/* Header */}
            <div className="flex flex-col items-start gap-2 mb-6">
              <h1 className="text-[#2C2A29] text-2xl font-bold leading-normal tracking-[-0.96px] text-left">
                Add New Event
              </h1>
              <p className="text-[#2C2A29] text-lg font-normal leading-[140%] text-left">
                Add new events, update agendas, and monitor registrations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-5">
              {/* Title Input */}
              <div className="w-full">
                <input
                  type="text"
                  name="title"
                  placeholder="Title goes here"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full text-[#2C2A29]/60 text-2xl font-bold leading-normal tracking-[-1.2px] p-4 text-center border border-[#2C2A29]/40 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
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
                  className="w-full text-[#2C2A29]/60 text-lg font-normal leading-[140%] p-4 border border-[#2C2A29]/40 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
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
                  className="w-full text-[#2C2A29]/60 text-lg font-normal leading-[140%] p-4 border border-[#2C2A29]/40 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
                />
              </div>

              {/* Event Type */}
              <div>
                <h2 className="text-[#2C2A29] text-lg font-bold leading-normal tracking-[-0.6px] mb-3">
                  Event Type
                </h2>
                <RadioGroup 
                  value={formData.eventType} 
                  onValueChange={(value) => handleRadioChange('eventType', value)}
                  className="flex flex-wrap gap-4"
                >
                  {[
                    { value: 'webinar', label: 'Webinar' },
                    { value: 'workshop', label: 'Workshop' },
                    { value: 'site-tour', label: 'Site Tour' }
                  ].map((option) => (
                    <div key={option.value} className="flex  items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`eventType-${option.value}`} className="cursor-pointer" />
                      <Label htmlFor={`eventType-${option.value}`} className="text-[#2C2A29] text-sm font-normal leading-[140%] cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Format */}
              <div>
                <h2 className="text-[#2C2A29] text-lg font-bold leading-normal tracking-[-0.6px] mb-3">
                  Format
                </h2>
                <RadioGroup 
                  value={formData.format} 
                  onValueChange={(value) => handleRadioChange('format', value)}
                  className="flex flex-wrap gap-4"
                >
                  {[
                    { value: 'online', label: 'Online' },
                    { value: 'in-person', label: 'In Person' }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`format-${option.value}`} className="cursor-pointer" />
                      <Label htmlFor={`format-${option.value}`} className="text-[#2C2A29] text-sm font-normal leading-[140%] cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-[#2C2A29] text-lg font-bold leading-normal tracking-[-0.6px] mb-3">
                  Write a brief description
                </h2>
                <textarea
                  name="description"
                  placeholder="Write a brief description..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full text-[#2C2A29]/60 text-lg font-normal leading-[140%] p-4 border border-[#2C2A29]/40 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60 resize-none"
                />
              </div>

              {/* Registration */}
              <div>
                <h2 className="text-[#2C2A29] text-lg font-bold leading-normal tracking-[-0.6px] mb-3">
                  Registration
                </h2>
                <input
                  type="text"
                  name="registrationLink"
                  placeholder="Add a Registration Link"
                  value={formData.registrationLink}
                  onChange={handleInputChange}
                  className="w-full text-[#2C2A29]/60 text-lg font-normal leading-[140%] p-4 border border-[#2C2A29]/40 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button 
                  type="submit"
                  className="bg-[#2E7D32] text-[#FDFBF6] text-sm font-bold leading-normal px-12 py-4 rounded-full hover:bg-[#2E7D32]/90 transition-colors"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}