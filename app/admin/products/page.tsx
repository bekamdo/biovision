import Header from "@/components/admin/shared/Header"
import Layout from "../layout"
import StatsAndActivitySection from "@/components/admin/shared/StatsAndActivitySection"
import { mockProducts } from "@/app/data/sampledata"
import ProductCard from "@/components/admin/cards/ProductCard"
import Pagination from "@/components/admin/shared/Pagination"




export const ProductPage = () => {

  return (
    <>

    <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F8F9FA] min-h-screen w-full max-w-[1277px] mx-auto">
   
    
    <Header title="Product Management" description="Manage product listings on the directory"/>

    <StatsAndActivitySection title="All Products"/>

        {/* Products Grid */}
        <div className="flex w-full flex-col items-start gap-[25px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] w-full">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

          <Pagination/>
    </div>
    
    </>
  )
}

export default ProductPage