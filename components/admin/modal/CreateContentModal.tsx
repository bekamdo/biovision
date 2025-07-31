"use client";

import React, { useState, useRef, useEffect } from 'react';
import { StoryEditor } from '../contentModalComp/StoryEditor';
import { RichTextEditor } from '../contentModalComp/RichTextEditor';
import { FileUpload } from '../contentModalComp/FileUpload';


interface Tag {
  id: string;
  name: string;
  selected: boolean;
}

interface PostData {
  title: string;
  selectedTags: string[];
  story: string;
  richContent: string;
  uploadedFiles: File[];
}

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateContentModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose }) => {
  const [postData, setPostData] = useState<PostData>({
    title: '',
    selectedTags: ['stories'],
    story: '',
    richContent: '',
    uploadedFiles: []
  });

  const [tags, setTags] = useState<Tag[]>([
    { id: 'news', name: 'News', selected: false },
    { id: 'stories', name: 'Stories', selected: true },
    { id: 'directory', name: 'Directory', selected: false },
    { id: 'resources', name: 'Resources', selected: false }
  ]);

  const [isPublishing, setIsPublishing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleTitleChange = (title: string) => {
    setPostData(prev => ({ ...prev, title }));
  };

  const handleTagToggle = (tagId: string) => {
    setTags(prev => 
      prev.map(tag => 
        tag.id === tagId 
          ? { ...tag, selected: !tag.selected }
          : tag
      )
    );
    
    setPostData(prev => ({
      ...prev,
      selectedTags: tags
        .map(tag => tag.id === tagId ? { ...tag, selected: !tag.selected } : tag)
        .filter(tag => tag.selected)
        .map(tag => tag.id)
    }));
  };

  const handleStoryChange = (story: string) => {
    setPostData(prev => ({ ...prev, story }));
  };

  const handleRichContentChange = (richContent: string) => {
    setPostData(prev => ({ ...prev, richContent }));
  };

  const handleFileUpload = (files: File[]) => {
    setPostData(prev => ({ 
      ...prev, 
      uploadedFiles: [...prev.uploadedFiles, ...files] 
    }));
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Publishing post:', postData);
      alert('Post published successfully!');
      onClose();
    } catch (error) {
      console.error('Error publishing post:', error);
      alert('Error publishing post. Please try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Saving draft:', postData);
      alert('Draft saved successfully!');
      onClose();
    } catch (error) {
      console.error('Error saving draft:', error);
      alert('Error saving draft. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-hidden">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out"></div>

      {/* Modal container */}
      <div className="flex inset-0 fixed min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Modal content */}
        <div
          ref={modalRef}
          className="relative w-full max-w-7xl transform rounded-[50px] bg-white/90 backdrop-blur-[10px] p-6 sm:p-8 lg:p-12 transition-all duration-300 ease-in-out"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(0.38)' : 'scale(0.34)'
          }}
        >
          {/* Back Button */}
          <div className="flex items-start gap-12 mb-5">
            <button 
              onClick={onClose}
              className="flex w-12 h-12 items-center justify-center rounded-full border border-[#2C2A29]/40 hover:bg-gray-50 transition-colors"
            >
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

          {/* Header */}
          <div className="flex flex-col items-start gap-2.5 mb-5">
            <h1 className="text-[#2C2A29] text-2xl sm:text-3xl font-bold leading-normal tracking-[-0.96px] text-center">
              Create Post
            </h1>
            <p className="text-[#2C2A29] text-lg sm:text-xl font-normal leading-[150%] text-center">
              Add, edit, schedule, and manage content.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Title Input */}
            <div className="w-full mb-5">
              <input
                type="text"
                value={postData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Title goes here"
                className="w-full text-[#2C2A29]/60 text-3xl sm:text-4xl font-bold leading-normal tracking-[-1.2px] p-5 text-center border border-[#2C2A29]/40 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent placeholder:text-[#2C2A29]/60"
              />
            </div>

            {/* Choose a Tag */}
            <div className="mb-5">
              <h2 className="text-[#2C2A29] text-xl font-bold leading-normal tracking-[-0.6px] mb-2.5">
                Choose a Tag
              </h2>
              <div className="flex flex-wrap gap-2.5 min-h-[76px] items-start content-start">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => handleTagToggle(tag.id)}
                    className={`text-sm font-normal leading-[150%] px-4 py-1.5 rounded-[30px] cursor-pointer transition-colors ${
                      tag.selected
                        ? "bg-[#2E7D32] text-[#FDFBF6]"
                        : "bg-[#2E7D32]/10 text-[#2C2A29] hover:bg-[#2E7D32]/20"
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Story Editor */}
            <div className="mb-5">
              <h2 className="text-[#2C2A29] text-xl font-bold leading-normal tracking-[-0.6px] mb-2.5">
                Your Story
              </h2>
              <StoryEditor
                value={postData.story}
                onChange={handleStoryChange}
                placeholder="Tell your story... |"
              />
            </div>

            {/* Rich Text Editor */}
            <div className="mb-5">
              <h2 className="text-[#2C2A29] text-xl font-bold leading-normal tracking-[-0.6px] mb-2.5">
                Rich Content
              </h2>
              <RichTextEditor
                content={postData.richContent}
                onChange={handleRichContentChange}
              />
            </div>

            {/* File Upload */}
            <div className="mb-12 rounded-[25px] p-0">
             
              <FileUpload
                onFileUpload={handleFileUpload}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button 
                type="button"
                onClick={handleSaveDraft}
                disabled={isSaving}
                className="bg-[#2C2A29]/10 text-[#2C2A29] text-sm font-bold leading-normal px-[60px] py-5 rounded-full hover:bg-[#2C2A29]/20 transition-colors disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Draft'}
              </button>
              <button 
                type="button"
                onClick={handlePublish}
                disabled={isPublishing}
                className="bg-[#2E7D32] text-[#FDFBF6] text-sm font-bold leading-normal px-[60px] py-5 rounded-full hover:bg-[#2E7D32]/90 transition-colors disabled:opacity-50"
              >
                {isPublishing ? 'Publishing...' : 'Publish Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};