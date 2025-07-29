"use client"

import Header from "@/components/admin/shared/Header";
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection";
import { mockProducts } from "@/app/data/sampledata";
import ProductCard from "@/components/admin/cards/ProductCard";
import Pagination from "@/components/admin/shared/Pagination";
import { useState } from "react";
import AddProductModal from "@/components/admin/modal/AddProductModal ";

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
const handleOpenModal = () => setIsModalOpen(true);
const handleCloseModal = () => setIsModalOpen(false);
  
  const statCardsData = [
    {
      title: "Listed Products",
      value: "78,093",
      change: "+1292 past week",
      bgColor: "bg-[#FFFDF7]",
    },
    {
      title: "New Products",
      value: "1,292",
      change: "+10% from last week",
      bgColor: "bg-[#F8FFEF]",
    },
    {
      title: "Outlets",
      value: "4,592",
      change: "+ 0 this week",
      bgColor: "bg-[#DFF1FF]",
    },
  ]

  const recentUploadCardData = {
    title: "BioVision uploaded a new product",
    subtitle: "They have been 12 uploads today",
    buttonText: "See All Activity",
  }
  return (
    <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F8F9FA] min-h-screen w-full max-w-[1277px] mx-auto">
     
      <Header title="Product Management" description="Manage product listings on the directory" />
       <StatsAndActivitySection
        title="All Products"
        statCardsData={statCardsData}
        recentUploadCardData={recentUploadCardData}
        defaultModalType="addProduct"
      />

      {/* Products Grid */}
      <div className="flex w-full flex-col items-start gap-[25px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] w-full">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Pagination />
      
    </div>
  );
}
