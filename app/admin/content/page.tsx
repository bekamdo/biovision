"use client"

import { sampleArticles } from '@/app/data/sampledata';
import Pagination from '@/components/admin/shared/Pagination';
import { SearchHeader } from '@/components/admin/shared/SearchHeader';
import StatsCardSection from '@/components/admin/shared/StatsCardSection';
import { StatusColumn } from '@/components/admin/shared/StatusColumn';
import TabSwitcherClient from '@/components/admin/shared/TabSwitcherClient';
import ResponsiveArticleTable from '@/components/admin/table/ResponsiveArticleTable';
import { CreateContentModal} from '@/components/admin/modal/CreateContentModal';
import { Filter, PlusIcon, Search } from 'lucide-react';
import React, { useState, useMemo } from 'react';

interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
  status: 'approved' | 'pending' | 'rejected';
}


export default function ContentPage() {
    const [searchValue, setSearchValue] = useState('');
  const [timeFilter, setTimeFilter] = useState('This Week');
   const [isCreateContentModalOpen, setIsCreateContentModalOpen] = useState(false);
  // Sample data - in a real app this would come from an API
  const [stories] = useState<Story[]>([
    {
      id: '1',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'approved'
    },
    {
      id: '2',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'approved'
    },
    {
      id: '3',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'approved'
    },
    {
      id: '4',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'approved'
    },
    {
      id: '5',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'pending'
    },
    {
      id: '6',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'pending'
    },
    {
      id: '7',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'pending'
    },
    {
      id: '8',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'pending'
    },
    {
      id: '9',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'rejected'
    },
    {
      id: '10',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'rejected'
    },
    {
      id: '11',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'rejected'
    },
    {
      id: '12',
      title: 'Story Title',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      author: 'Jake Doe',
      status: 'rejected'
    }
  ]);
   // Filter stories based on search
  const filteredStories = useMemo(() => {
    if (!searchValue.trim()) return stories;
    
    return stories.filter(story => 
      story.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      story.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      story.author.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [stories, searchValue]);

  // Group stories by status
  const groupedStories = useMemo(() => {
    return {
      approved: filteredStories.filter(story => story.status === 'approved'),
      pending: filteredStories.filter(story => story.status === 'pending'),
      rejected: filteredStories.filter(story => story.status === 'rejected')
    };
  }, [filteredStories]);

  const handleStoryAction = (storyId: string, action: string) => {
    console.log(`Action "${action}" performed on story ${storyId}`);
    // In a real app, this would update the story status or perform the action
    // For now, we'll just log it
  };

  return (
    <div className="flex w-full flex-col items-start gap-5 p-4 md:p-6 lg:p-5 bg-[#F5F5F5] font-sans max-w-[1338px] mx-auto">
       <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#2c2a29] mb-2">Content Management </h1>
          <p className="text-[#666666]">Add,edit,schedule, and manage content </p>
        </section>
        <StatsCardSection/>
             {/* Tab Switcher */}
         <TabSwitcherClient/>
      

      <SearchHeader
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        timeFilter={timeFilter}
        onTimeFilterChange={setTimeFilter}
      /> 
    
      <div className="flex justify-between items-start w-full gap-6 lg:gap-8 xl:gap-[30px] md:flex-row max-md:flex-col max-md:gap-[25px]">
        <StatusColumn
          status="approved"
          stories={groupedStories.approved}
          onStoryAction={handleStoryAction}
        />
        
        <StatusColumn
          status="pending"
          stories={groupedStories.pending}
          onStoryAction={handleStoryAction}
        />
        
        <StatusColumn
          status="rejected"
          stories={groupedStories.rejected}
          onStoryAction={handleStoryAction}
        />
      </div>
    
              {/* All Resources */}
        <div className="flex flex-col md:flex-row  justify-between items-start md:items-end self-stretch gap-4">
          <div className="flex items-center">
            <div className="text-dashboard-text text-xl md:text-2xl font-medium leading-9">
              All Resources
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <div className="flex w-full sm:w-[300px] md:w-[355px] h-12 px-2.5 py-5 items-center gap-2.5 rounded-lg border border-gray-300 bg-white">
              <Search className="w-6 h-6 flex-shrink-0 text-gray-400" />
              <div className="text-gray-400 text-sm font-normal leading-normal">
                Search...
              </div>
            </div>
            <div onClick={() => setIsCreateContentModalOpen(true)} className="flex w-12 h-12 px-3 py-3 justify-center items-center rounded-[50px] bg-dashboard-green flex-shrink-0">
              <PlusIcon className="w-5 h-5 flex-shrink-0 text-white cursor-pointer" />
            </div>
          </div>
        </div>
           <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
               <ResponsiveArticleTable articles={sampleArticles} />
            </div>

        <Pagination/>
        <CreateContentModal 
  isOpen={isCreateContentModalOpen}
  onClose={() => setIsCreateContentModalOpen(false)}
/>
    
       
    </div>
  );
}
