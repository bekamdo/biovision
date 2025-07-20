import { Star, Eye } from "lucide-react";
import { StarIcon } from "../shared/StarIcon";

interface Product {
  id: string;
  name: string;
  category: string;
  seller: string;
  rating: number;
  reviews: number;
  currentPrice: number;
  originalPrice: number;
  image: string;
}


const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col p-1 bg-white rounded-[20px] w-full max-w-[248px] mx-auto">
    <div className="w-full aspect-[246/170] p-[5px] flex flex-col items-start gap-[10px]">
      <img src={product.image} alt={product.name} className="w-full h-full rounded-[20px] object-cover" />
    </div>
    <div className="flex flex-col justify-center items-start gap-[10px] w-full min-h-[149px] px-[18px] py-[10px] bg-[#FDFBF6] rounded-[12px]">
      <div className="flex flex-col items-start gap-[5px] w-full">
        <div className="text-[#2C2A29]/60 font-helvetica text-[12px]">{product.category}</div>
        <div className="text-[#2C2A29] font-helvetica text-[24px] font-bold">{product.name}</div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[10px] w-full">
        <div className="text-[#2C2A29] font-helvetica text-[16px]">By {product.seller}</div>
        <div className="flex items-center gap-[4px]">
          <div className="flex h-[20px] items-center gap-[2px]">
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < product.rating} />)}
          </div>
          <div className="text-[#2C2A29] font-helvetica text-[12px] font-medium">({product.reviews})</div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[10px] w-full">
        <div className="flex items-center gap-[5px]">
          <div className="text-[#2E7D32] font-helvetica text-[24px] font-bold">${product.currentPrice}</div>
          <div className="text-[#2C2A29]/60 font-helvetica text-[12px] line-through">${product.originalPrice}</div>
        </div>
        <div className="flex hover:cursor-pointer w-full sm:w-[125px] h-[41px] p-[2px] justify-center items-center gap-[10px] rounded-[30px] bg-[#2E7D32]/10">
          <Eye className="w-5 h-5 text-[#2E7D32]" />
          <div className="text-[#2E7D32] font-helvetica text-[14px] hover:text- font-medium">View</div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
