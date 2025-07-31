"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { RichTextEditor } from "../contentModalComp/RichTextEditor";


interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface PostData {
  richContent: string;

}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
    const [postData, setPostData] = useState<PostData>({
    
richContent: '',
      
    });


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    isAnonymous: false
  });

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;

  const parsedValue =
    type === "radio" && name === "isAnonymous" ? value === "true" : value;

  setFormData((prev) => ({
    ...prev,
    [name]: parsedValue,
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter data:", formData);
    onClose();
  };

  const handleRichContentChange = (richContent: string) => {
    setPostData(prev => ({ ...prev, richContent }));
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out"></div>

      <div className="flex fixed inset-0 max-w-[1108px] mx-auto items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          ref={modalRef}
          className="relative  max-w-[1008px]  transform rounded-[50px] bg-white/90 backdrop-blur-[10px] p-8 sm:p-8 lg:p-12 transition-all duration-300 ease-in-out"
           style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(0.55)' : 'scale(0.495)'
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
              Create Newsletter
            </h1>
            <p className="text-[#2C2A29] text-lg sm:text-xl font-normal leading-[150%] text-center">
              Send updates and manage subscriptions for your audience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <input
              name="title"
              type="text"
              placeholder="Title goes here"
              value={formData.title}
              onChange={handleChange}
              className="w-full text-[#2C2A29]/60 text-2xl sm:text-3xl font-bold leading-normal tracking-[-1.2px] p-5 text-center border border-[#2C2A29]/40 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] placeholder:text-[#2C2A29]/60"
            />

            {/* Description Textarea */}
            <div>
              <h2 className="text-[#2C2A29] text-xl font-bold tracking-[-0.6px] mb-4">
                Write a brief description
              </h2>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a brief description..."
                rows={4}
                className="w-full text-[#2C2A29]/60 text-xl font-normal leading-[150%] p-5 border border-[#2C2A29]/40 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] placeholder:text-[#2C2A29]/60 resize-none"
              />
            </div>

            {/* Rich Text Editor Placeholder */}
             
                     <RichTextEditor
                       content={postData.richContent}
                       onChange={handleRichContentChange}
                     />
                      {/* Upload Images */}
          <div className="mb-12 border border-[#A3A2A2] bg-white rounded-[25px] p-8 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-7">
                <div className="relative w-[94px] h-[94px] flex-shrink-0">
                  <svg
                    width="94"
                    height="94"
                    viewBox="0 0 94 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0"
                  >
                    <circle
                      cx="47"
                      cy="47"
                      r="46"
                      fill="white"
                      stroke="#D9D9D9"
                      strokeWidth="2"
                    />
                  </svg>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[24px] top-[24px]"
                  >
                    <path
                      d="M14.2991 37.0685H10.619C4.984 36.666 2.4541 32.3343 2.4541 28.4818C2.4541 24.6293 4.98403 20.2785 10.5232 19.8951C11.309 19.8185 11.999 20.4318 12.0565 21.2368C12.114 22.0226 11.5199 22.7126 10.7149 22.7701C6.9966 23.0385 5.3291 25.8368 5.3291 28.501C5.3291 31.1651 6.9966 33.9635 10.7149 34.2318H14.2991C15.0849 34.2318 15.7366 34.8835 15.7366 35.6693C15.7366 36.4551 15.0849 37.0685 14.2991 37.0685Z"
                      fill="#2E7D32"
                    />
                    <path
                      d="M31.9502 37.0687C31.9119 37.0687 31.8927 37.0687 31.8544 37.0687C31.0686 37.0687 30.3403 36.4171 30.3403 35.6312C30.3403 34.8071 30.9536 34.1937 31.7586 34.1937C34.1161 34.1937 36.2244 33.3696 37.8728 31.8937C40.8628 29.2871 41.0544 25.5304 40.2494 22.8854C39.4444 20.2596 37.2019 17.2504 33.2919 16.7712C32.6594 16.6946 32.161 16.2154 32.046 15.5829C31.2794 10.9829 28.8069 7.80125 25.0503 6.65125C21.1786 5.44375 16.6552 6.63208 13.8377 9.58374C11.0969 12.4396 10.4644 16.4454 12.0552 20.8538C12.3236 21.6013 11.9403 22.4254 11.1928 22.6937C10.4453 22.9621 9.6211 22.5787 9.35277 21.8312C7.41694 16.4262 8.29862 11.2512 11.7678 7.60958C15.3136 3.89125 21.0061 2.4154 25.8936 3.9104C30.3786 5.2904 33.541 8.98957 34.691 14.1262C38.601 15.0079 41.7444 17.9788 42.9902 22.0804C44.3511 26.5463 43.1244 31.1463 39.7703 34.0596C37.6428 35.9762 34.8636 37.0687 31.9502 37.0687Z"
                      fill="#2E7D32"
                    />
                    <path
                      d="M23.0003 42.7038C19.1478 42.7038 15.5445 40.6529 13.5704 37.3371C13.3595 37.0113 13.1487 36.6279 12.9762 36.2063C12.3245 34.8454 11.9795 33.2929 11.9795 31.6829C11.9795 25.6071 16.9245 20.6621 23.0003 20.6621C29.0762 20.6621 34.0212 25.6071 34.0212 31.6829C34.0212 33.3121 33.6762 34.8454 32.9862 36.2638C32.8329 36.6279 32.622 37.0113 32.392 37.3754C30.4562 40.6529 26.8528 42.7038 23.0003 42.7038ZM23.0003 23.5371C18.5153 23.5371 14.8545 27.1979 14.8545 31.6829C14.8545 32.8713 15.1037 33.9829 15.5828 34.9988C15.7362 35.3246 15.8703 35.5929 16.0236 35.8421C17.4803 38.3146 20.1445 39.8288 22.9811 39.8288C25.8178 39.8288 28.482 38.3146 29.9195 35.8804C30.092 35.5929 30.2454 35.3246 30.3604 35.0563C30.8779 34.0021 31.127 32.8904 31.127 31.7021C31.1461 27.1979 27.4853 23.5371 23.0003 23.5371Z"
                      fill="#2E7D32"
                    />
                    <path
                      d="M21.9074 35.0183C21.5432 35.0183 21.1791 34.8841 20.8916 34.5966L18.994 32.6991C18.4382 32.1433 18.4382 31.2233 18.994 30.6674C19.5499 30.1116 20.4699 30.1116 21.0257 30.6674L21.9458 31.5874L25.0124 28.7508C25.6066 28.2141 26.5074 28.2524 27.044 28.8274C27.5807 29.4024 27.5424 30.3224 26.9674 30.8591L22.8849 34.6349C22.5974 34.8841 22.2524 35.0183 21.9074 35.0183Z"
                      fill="#2E7D32"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[#2C2A29] text-2xl font-medium leading-normal">
                    Upload images
                  </h3>
                  <p className="text-[#2C2A29]/60 text-base font-medium leading-normal">
                    Select and upload the images of your choice
                  </p>
                </div>
              </div>
              <button className="flex w-12 h-12 items-center justify-center rounded-full border border-[#2C2A29]/40 flex-shrink-0 hover:bg-gray-50 transition-colors">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2929 0.292893C12.6834 -0.0976311 13.3164 -0.0976311 13.707 0.292893C14.0975 0.683417 14.0975 1.31643 13.707 1.70696L7.70696 7.70696C7.31643 8.09748 6.68342 8.09748 6.29289 7.70696L0.292893 1.70696C-0.0976311 1.31643 -0.0976311 0.683417 0.292893 0.292893C0.683417 -0.0976311 1.31643 -0.0976311 1.70696 0.292893L6.99992 5.58586L12.2929 0.292893Z"
                    fill="#2C2A29"
                    fillOpacity="0.4"
                  />
                </svg>
              </button>
            </div>
          </div>

            {/* Anonymous Checkbox */}
         <div className="flex items-center gap-2">
  <input
    type="radio"
    name="isAnonymous"
    id="isAnonymous"
    value="true"
    checked={formData.isAnonymous}
    onChange={handleChange}
    className="w-5 h-5 border border-[#2C2A29]/40 rounded-[50%] focus:ring-2 focus:ring-[#2E7D32]"
  />
  <label
    htmlFor="isAnonymous"
    className="text-[#2C2A29] text-sm cursor-pointer"
  >
    Make Anonymous
  </label>
</div>
    
            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-[#2E7D32] text-[#FDFBF6] text-sm font-bold px-[60px] py-5 rounded-full hover:bg-[#2E7D32]/90 transition-colors"
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
