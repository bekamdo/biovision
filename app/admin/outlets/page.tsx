"use client"

import Header from "@/components/admin/shared/Header";
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection";

import Pagination from "@/components/admin/shared/Pagination";
import { useState } from "react";
import { ResultsList } from "@/components/outletComp/ResultsList";
import { SearchFilters } from "@/components/outletComp/SearchFilters";
import { ResultsHeader } from "@/components/outletComp/ResultsHeader";
import { MapDisplay } from "@/components/outletComp/MapDisplay";
import { ViewToggle } from "@/components/outletComp/ViewToggle";


export default function OutletPage() {
const [isModalOpen, setIsModalOpen] = useState(false);
const handleOpenModal = () => setIsModalOpen(true);
const handleCloseModal = () => setIsModalOpen(false);

interface Restaurant {
  id: string;
  name: string;
  address: string;
  tags: string[];
  imageUrl: string;
}

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Kampala Sunrise Café',
    address: '32 Acacia Avenue, Kololo, Kampala',
    tags: ['Chinese', 'Takeaway'],
    imageUrl: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/00b8a1b9b86d9a812fc95d4ce8fd4c0489e12a5a?placeholderIfAbsent=true'
  },
  {
    id: '2',
    name: 'Kampala Sunrise Café',
    address: '32 Acacia Avenue, Kololo, Kampala',
    tags: ['Chinese', 'Takeaway'],
    imageUrl: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/00b8a1b9b86d9a812fc95d4ce8fd4c0489e12a5a?placeholderIfAbsent=true'
  },
  {
    id: '3',
    name: 'Kampala Sunrise Café',
    address: '32 Acacia Avenue, Kololo, Kampala',
    tags: ['Chinese', 'Takeaway'],
    imageUrl: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/9b27cb5b33dc9f89263018218319acc063c59d03?placeholderIfAbsent=true'
  }
];


  const statCardsData = [
    {
      title: "Outlets",
      value: "4958",
      change: "+1292 past week",
      bgColor: "bg-[#FFFDF7]",
    },
    {
      title: "New Products",
      value: "1292",
      change: "+10% from last week",
      bgColor: "bg-[#F8FFEF]",
    },
    {
      title: "Outlets",
      value: "4592",
      change: "+ 0 this week",
      bgColor: "bg-[#DFF1FF]",
    },
  ]

  const recentUploadCardData = {
    title: "BioVision uploaded a new product",
    subtitle: "They have been 12 uploads today",
    buttonText: "See All Activity",
  }
   const [currentView, setCurrentView] = useState<'list' | 'map'>('map');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [restaurants] = useState<Restaurant[]>(mockRestaurants);
  
  const handleViewChange = (view: 'list' | 'map') => {
    setCurrentView(view);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  const handleEditRestaurant = (id: string) => {
    console.log('Edit restaurant:', id);
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F8F9FA] min-h-screen w-full max-w-[1277px] mx-auto">
     
      <Header title="Outlet Management" description="There is an upcoming outlet visit" />
       <StatsAndActivitySection
        title="All Outlets"
        statCardsData={statCardsData}
        recentUploadCardData={recentUploadCardData}
        defaultModalType="addOutlet"
      />
       <main className="min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-7">
        <section className="flex-1 lg:max-w-[766px] overflow-hidden text-xs font-medium">
          <div className="rounded flex w-full max-w-full overflow-hidden px-4 py-2.5">
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>
          <MapDisplay />
        </section>

        <aside className="flex-1 lg:max-w-[483px] lg:min-w-[400px]">
          <div className="w-full">
            <ResultsHeader resultCount={filteredRestaurants.length} currentSort={sortBy} />
            
            <SearchFilters
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />

            <ResultsList
              restaurants={filteredRestaurants}
              onEditRestaurant={handleEditRestaurant}
            />
          </div>
        </aside>
      </div>
    </main>


      <Pagination />
      
    </div>
  );
}



