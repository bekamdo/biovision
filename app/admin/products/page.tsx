import Header from "@/components/admin/shared/Header";
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection";
import { mockProducts } from "@/app/data/sampledata";
import ProductCard from "@/components/admin/cards/ProductCard";
import Pagination from "@/components/admin/shared/Pagination";

export default function ProductPage() {
  
  const statCardsData = [
    {
      title: "Events",
      value: "489",
      change: "+2 past week",
      bgColor: "bg-[#FFFDF7]",
    },
    {
      title: "Upcoming",
      value: "36",
      change: "this week",
      bgColor: "bg-[#F8FFEF]",
    },
    {
      title: "Pending",
      value: "13",
      change: "0 published this week",
      bgColor: "bg-[#DFF1FF]",
    },
  ]

  const recentUploadCardData = {
    title: "There is an upcoming outlet visit",
    subtitle: "Why not check it out?",
    buttonText: "See All Events",
  }
  return (
    <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F8F9FA] min-h-screen w-full max-w-[1277px] mx-auto">
      <Header title="Product Management" description="Manage product listings on the directory" />
       <StatsAndActivitySection
        title="All Products"
        statCardsData={statCardsData}
        recentUploadCardData={recentUploadCardData}
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
