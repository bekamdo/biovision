"use client"

const sampleArticles = [
  {
    id: '1998498',
    author: {
      name: 'Kianna Kenter',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/e5cc5340fdde9bfe98fac3c9f22e6f29bdbe6ec7?placeholderIfAbsent=true'
    },
    title: 'Noida Bank Employee Booked For Illicitly Transferring..',
    publishedOn: '03-Jan-2023 | 08:53am',
    updatedOn: '03-Jan-2023 | 08:53am',
    approvedBy: 'Kianna Kenter',
    status: 'Published' as const
  },
  {
    id: '1998499',
    author: {
      name: 'Phillip Ekstrom',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/584ac73e60b35fea67523021f6a16440a6858bec?placeholderIfAbsent=true'
    },
    title: 'Dunki Release LIVE Updates: SRK Fans Call Film...',
    publishedOn: '06-Jan-2023 | 09:55am',
    updatedOn: '06-Jan-2023 | 10:25am',
    approvedBy: 'Phillip Ekstrom',
    status: 'Unpublished' as const
  },
  {
    id: '19984100',
    author: {
      name: 'Corey Bator',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a30ad71b27a527e91e425a3af3e8475ce023cadb?placeholderIfAbsent=true'
    },
    title: 'There\'s A Message in The Suspension Spree...',
    publishedOn: '06-Jan-2023 | 09:46am',
    updatedOn: '06-Jan-2023 | 10:27am',
    approvedBy: 'Corey Bator',
    status: 'Published' as const
  },
  {
    id: '19984101',
    author: {
      name: 'Omar Donin',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/ce469a0889df2f4b637681732991ef03b80b76cf?placeholderIfAbsent=true'
    },
    title: 'How 150 Meetings by Amit Shah and 3,200 Suggestions...',
    publishedOn: '07-Jan-2023 | 08:53am',
    updatedOn: '07-Jan-2023 | 08:53am',
    approvedBy: 'Omar Donin',
    status: 'Unpublished' as const
  },
  {
    id: '19984102',
    author: {
      name: 'Jocelyn Rosser',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/181b181b191184d8d91860cb94df48f2a2d38e60?placeholderIfAbsent=true'
    },
    title: 'US Has Deepened Partnership with India\': Blinken at Year...',
    publishedOn: '07-Jan-2023 | 08:53am',
    updatedOn: '07-Jan-2023 | 08:53am',
    approvedBy: 'Jocelyn Rosser',
    status: 'Published' as const
  },
  {
    id: '19984103',
    author: {
      name: 'Madelyn Gouse',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/aad5bf98efb6752462c4e196b87d6ea353692a20?placeholderIfAbsent=true'
    },
    title: 'Covid-19 LIVE: 2,669 Active Cases in India; 21 People...',
    publishedOn: '08-Jan-2023 | 08:53am',
    updatedOn: '08-Jan-2023 | 08:53am',
    approvedBy: 'Madelyn Gouse',
    status: 'Published' as const
  },
  {
    id: '19984104',
    author: {
      name: 'Jaxson Carder',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/4729e1a763636638f627625b7d90508717766a42?placeholderIfAbsent=true'
    },
    title: 'No Paneer at Indian Wedding? Angry Guests Throw Chairs...',
    publishedOn: '08-Jan-2023 | 08:53am',
    updatedOn: '08-Jan-2023 | 08:53am',
    approvedBy: 'Jaxson Carder',
    status: 'Unpublished' as const
  },
  {
    id: '19984105',
    author: {
      name: 'Giana Stanton',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/71dc0fcadd094407fa56495f1f110d8f64fd5392?placeholderIfAbsent=true'
    },
    title: 'Delhi CM Arvind Kejriwal Responds to ED, Calls Summons...',
    publishedOn: '08-Jan-2023 | 08:53am',
    updatedOn: '08-Jan-2023 | 08:53am',
    approvedBy: 'Giana Stanton',
    status: 'Unpublished' as const
  },
  {
    id: '19984106',
    author: {
      name: 'Kaylynn Bator',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a9e840af551bb61477f6df602265e09a2c4ca601?placeholderIfAbsent=true'
    },
    title: 'Disproportionate Assets Case: TN Minister Ponmudy, Wife...',
    publishedOn: '09-Jan-2023 | 08:53am',
    updatedOn: '09-Jan-2023 | 08:53am',
    approvedBy: 'Kaylynn Bator',
    status: 'Published' as const
  },
  {
    id: '19984107',
    author: {
      name: 'Jocelyn Philips',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/71dc0fcadd094407fa56495f1f110d8f64fd5392?placeholderIfAbsent=true'
    },
    title: 'Why Is Kerala at the Forefront Whenever There\'s A Surge...',
    publishedOn: '09-Jan-2023 | 08:53am',
    updatedOn: '09-Jan-2023 | 08:53am',
    approvedBy: 'Jocelyn Philips',
    status: 'Published' as const
  },
  {
    id: '19984108',
    author: {
      name: 'Ruben Curtis',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/d25cb2a7092e7fcc29a81ad403d2176e3365ac64?placeholderIfAbsent=true'
    },
    title: 'Tata Harrier and Safari Secure 5-Star Safety Rating...',
    publishedOn: '10-Jan-2023 | 08:53am',
    updatedOn: '11-Jan-2023 | 08:53am',
    approvedBy: 'Ruben Curtis',
    status: 'Published' as const
  }
];

import { SearchHeader } from '@/components/admin/shared/SearchHeader';
import StatsCardSection from '@/components/admin/shared/StatsCardSection';
import { StatusColumn } from '@/components/admin/shared/StatusColumn';
import TabSwitcherClient from '@/components/admin/shared/TabSwitcherClient';
import ResponsiveArticleTable from '@/components/admin/table/ResponsiveArticleTable';
import React, { useState, useMemo } from 'react';





interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
  status: 'approved' | 'pending' | 'rejected';
}

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const [timeFilter, setTimeFilter] = useState('This Week');

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


}



export default function ContentPage() {
  return (
    <div className="flex w-full flex-col items-start gap-5 p-4 md:p-6 lg:p-5 bg-[#F5F5F5] font-sans max-w-[1338px] mx-auto">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#2c2a29] mb-2">Welcome Back, Admin</h1>
          <p className="text-[#666666]">Here's a snapshot of how the platform is performing.</p>
        </section>

      {/* Stats Cards */}
      <div className="flex flex-col items-end gap-5 self-stretch">
         <StatsCardSection/>
        

        {/* Tab Switcher */}
         <TabSwitcherClient/>
          <ResponsiveArticleTable articles={sampleArticles} />
      </div>
    </div>
  );
}
