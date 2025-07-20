import { Star } from "lucide-react";

export const StarIcon = ({ filled }: { filled: boolean }) => (
  <Star
    className={`w-4 h-4 ${
      filled ? "fill-[#FFD60A] text-[#FFD60A]" : "fill-[#2C2A29] text-[#2C2A29]"
    }`}
  />
);
