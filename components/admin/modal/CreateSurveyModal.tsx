"use client"

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, AlignLeft, CheckSquare, ChevronDown  } from "lucide-react";

interface CreateSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateSurveyModal({ isOpen, onClose }: CreateSurveyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const tags = [
    "Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins",
    "Bread", "Meat", "Snacks", "Tiffin", "Launch", "Dinner", "Breakfast", "Fruit"
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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

    return () =>{
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = '';
    } 
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-hidden">
      <div className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out" />
      <div className="fixed flex inset-0  items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          ref={modalRef}
          className="relative w-full max-w-[1108px] transform rounded-[50px] bg-white/90 backdrop-blur-[10px] p-6 sm:p-8 lg:p-12 transition-all duration-300 ease-in-out"
            style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(0.6)' : 'scale(0.54)'
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
          <div className="text-center mb-8">
            <h2 className="text-[#2C2A29] text-2xl sm:text-3xl font-bold tracking-tight mb-2">Create New Survey</h2>
            <p className="text-[#2C2A29]/70 text-lg">Design and publish user surveys to collect feedback.</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Title */}
            <input
              type="text"
              placeholder="Title goes here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-[#2C2A29]/60 text-2xl sm:text-3xl font-bold p-5 text-center border border-[#2C2A29]/40 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] placeholder:text-[#2C2A29]/40"
            />

            {/* Description */}
            <div>
              <h3 className="text-[#2C2A29] text-xl font-bold mb-4">Write a brief description</h3>
              <textarea
                placeholder="Write a brief description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full text-[#2C2A29]/60 text-lg p-5 border border-[#2C2A29]/40 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] placeholder:text-[#2C2A29]/40 resize-none"
              />
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-[#2C2A29] text-xl font-bold mb-4">Choose Tags</h3>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    type="button"
                    className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-[#2E7D32] text-white border-[#2E7D32]"
                        : "bg-[#2E7D32]/10 text-[#2C2A29] border-[#2C2A29]/20 hover:bg-[#2E7D32]/20"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>    
            <div>
      <h3 className="text-[#2C2A29] text-xl font-bold mb-4">Questionnaire</h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-3 border-b pb-2 text-[#2C2A29]/70">
          <input
            type="text"
            defaultValue="Untitled Question"
            className="border-none outline-none bg-transparent text-[#2C2A29]/70 w-[90%] mr-4"
          />
            <button
            type="button"
            className="text-sm rounded-full flex items-center gap-1 bg-white px-5 py-3 whitespace-nowrap text-[#2C2A29]/70 hover:text-[#2C2A29] focus:outline-none"
          >
            Short Answer
            <ChevronDown size={18} />
          </button>
        </div>
        <div className="flex items-center justify-between border-b pb-2 text-[#2C2A29]/70">
               <input
                   type="text"
                   defaultValue="Untitled Question"
                   className="border-none outline-none bg-transparent text-[#2C2A29]/70 w-[90%] mr-4"
                />
                 <button
                    type="button"
                     className="text-sm rounded-full flex items-center gap-1 bg-white px-5 py-3 whitespace-nowrap text-[#2C2A29]/70 hover:text-[#2C2A29] focus:outline-none"
                >
                  Checked boxes
                  <ChevronDown size={18} />
                </button>
          
                </div>
             </div>
             </div>
             <div className="mb-6">
              <label className="flex mb-8  items-center space-x-2 text-sm">
          <input
            type="radio"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
            className="w-4 h-4 text-green-600"
          />
          <span className="text-[#2C2A29] text-md font-light">Option 1</span>
        </label>
        <h3 className="text-md font-semibold mb-2">Settings</h3>
        <label className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
            className="w-4 h-4 text-green-600"
          />
          <span className="text-[#2C2A29] text-md font-light">Make Anonymous</span>
        </label>
      </div>

            {/* Publish Button */}
            <div className="flex justify-center pt-6">
              <button className="bg-[#2E7D32] text-[#FDFBF6] text-sm font-bold px-[60px] py-5 rounded-full hover:bg-[#2E7D32]/90 transition-colors">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
