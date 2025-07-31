"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ShowEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event ?: {
    title: string;
    image: string;
    category: string;
    date: string;
    summary: string;
    learn: string[];
  } | null;
}


export const ShowEventModal: React.FC<ShowEventModalProps> = ({ isOpen, onClose,event }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 transition-opacity duration-300" />

      {/* Modal container */}
      <div className="flex   inset-0 fixed items-center justify-center p-6 sm:p-6 lg:p-8">
        <div
          ref={modalRef}
          className="relative w-full max-w-[709px] transform rounded-[50px] bg-white/90 backdrop-blur-[10px] p-8 transition-all duration-300 ease-in-out"
           style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(0.50)' : 'scale(0.45)'
          }}
        >
        <div className="max-w-[523px] h-[1375px] flex flex-col container mx-auto">

      
          {/* Back Button */}
          <div className="flex items-start gap-12 mb-5">
            <button
              onClick={onClose}
              className="flex w-12 h-12 items-center justify-center rounded-full border border-[#2C2A29]/40 hover:bg-gray-50 transition-colors"
            >
              {/* SVG Arrow */}
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29289 0.292893C6.68342 -0.0976311 7.31643 -0.0976311 7.70696 0.292893C8.09748 0.683417 8.09748 1.31643 7.70696 1.70696L3.41399 5.99992H14.9999C15.5522 5.99992 15.9999 6.44764 15.9999 6.99992C15.9999 7.55221 15.5522 7.99992 14.9999 7.99992H3.41399L7.70696 12.2929L7.77532 12.3691C8.09567 12.7618 8.07307 13.3408 7.70696 13.707C7.34084 14.0731 6.76184 14.0957 6.36907 13.7753L6.29289 13.707L0.292893 7.70696C-0.0976311 7.31643 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z"
                  fill="#2C2A29"
                  fillOpacity="0.4"
                />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
             
              {/* Organic Soil Health & Composting Workshop – Karen, Nairobi */}
              {event?.title}
              
            </h2>
             <div className="h-[318px] w-full max-w-[523px] relative rounded-2xl mx-auto overflow-hidden">
                 <Image
                    fill
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop"
                    alt="Hands holding soil"
                    className="object-cover"
                    />
              </div>

            <div className="space-y-1 text-xl bold text-[#2C2A29]">
              <div><strong>Category:</strong> Training Workshop</div>
              <div><strong>Date:</strong> 16 July 2025</div>
            </div>

            <div>
              <h3 className="space-y-1 text-xl bold text-[#2C2A29] mb-3">Event Summary</h3>
              <p>
                BioVision Africa Trust invites farmers, agricultural educators, and curious consumers
                to a hands-on workshop focused on improving soil health through natural composting...
              </p>
            </div>

            <div>
              <h3 className="space-y-1 text-xl bold text-[#2C2A29] mb-3">What You'll Learn</h3>
              <ul className="list-disc list-inside text-[#2C2A29] space-y-1">
                <li>How to make and manage compost</li>
                <li>Tips on natural fertilizers & nutrient cycling</li>
                <li>Soil structure testing</li>
                <li>Benefits of organic matter</li>
                <li>AFECOA certification info</li>
              </ul>
            </div>
              <div>
              <h3 className="space-y-1 text-xl bold text-[#2C2A29] mb-3">Who Should Attend</h3>
              <ul className="list-disc list-inside text-[#2C2A29] space-y-1">
                <li>Smallholder farmers and gardeners</li>
                <li>AE/EOA practitioners  and advocates</li>
                <li>Community group leaders</li>
                <li>Agricultural extension workers</li>
                <li>Students in enviromental/agricultural fields</li>
              </ul>
            </div>
                <div>
              <h3 className="space-y-1 text-xl bold text-[#2C2A29] mb-3">Why it Matters</h3>
              <p className="list-disc list-inside text-[#2C2A29] space-y-1">
               Healthy soil is the foundation of agroecology. This workshop helps euip farmers with simple, cost-effective methods to regenerate degraded soils and reduce dependency on synthetic inputs.
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button className="bg-[#2E7D32] cursor-pointer hover:bg-green-700 text-[#FDFBF6] px-20 py-8 rounded-full">
                Publish
              </Button>
              <Button variant="destructive" className="bg-[#DC3F27] cursor-pointer hover:bg-red-600 text-[#FDFBF6] px-20 py-8 rounded-full">
                Delete
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
