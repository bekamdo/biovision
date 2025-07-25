import Link from "next/link"

// Using Lucide React icons for better consistency and styling with Tailwind
import { Twitter, Facebook, Instagram, PinIcon as Pinterest, LinkIcon, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (   
        <footer className="bg-[#242320] px-4 sm:px-6 lg:px-[70px] py-6 lg:py-[38px] mt-8 lg:mt-[353px]">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0 mb-8 lg:mb-[70px]">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/6974c972f2e6fef51dfc76cba69b96e226fec58f?placeholderIfAbsent=true"
                alt="BioVision Logo" 
                className="w-20 sm:w-24 lg:w-[115px] h-auto"
              />
            </div>
            
            <nav className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-[10px] text-[#fdfbf6] text-sm lg:text-[16px] font-medium lg:leading-[30px]">
              {[
                { name: "Home", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/c314df1a435f731b18f454c9c004dc4a9b3db4ef?placeholderIfAbsent=true" },
                { name: "Our Mission", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/1ad367e7d10d33adb32b7a5fe09baf606eff08c0?placeholderIfAbsent=true" },
                { name: "Shop", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/3958355dab68a6e656a2dc2191089fc798472f05?placeholderIfAbsent=true" },
                { name: "Resources", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/69961448b901131b7681adc47108c29a63e4e60a?placeholderIfAbsent=true" },
                { name: "Outlets", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/ee424b43acc6b63d247f91ecf0eaf3d40dae02b4?placeholderIfAbsent=true" },
                { name: "Surveys", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/d12c6773f916fed2520c4673f20e83de44fe7bc7?placeholderIfAbsent=true" },
                { name: "Events", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/04e2789c79957317506e6356a743f1ae3ae986f2?placeholderIfAbsent=true" },
                { name: "Contact Us", icon: "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/668830dc027715859e73939bd335b86c81fd2127?placeholderIfAbsent=true" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 lg:gap-[10px] whitespace-nowrap">
                  <img src={item.icon} alt="" className="w-2.5 h-2.5 lg:w-[11px] lg:h-auto" />
                  <span className="text-xs sm:text-sm lg:text-[16px]">{item.name}</span>
                </div>
              ))}
            </nav>
          </div>
          
          <div className="bg-[#2c2a29] min-h-16 lg:min-h-[70px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 px-4 sm:px-6 lg:px-[33px] py-4 lg:py-[20px] -mx-4 sm:-mx-6 lg:-mx-[70px]">
            <div className="text-xs sm:text-sm lg:text-[14px] font-bold text-[#d4a017] lg:leading-[30px]">
              © 2025 BioVision Africa Trust. All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-[7px] text-xs sm:text-sm lg:text-[14px] font-normal text-[#d4a017] lg:leading-[1] text-left sm:text-right">
              <div className="lg:pl-[33px]">Terms of Use</div>
              <div className="border-l border-[#d4a017] pl-2 lg:pl-[12px]">Privacy Policy</div>
              <div className="border-l border-[#d4a017] pl-2 lg:pl-[12px]">Cookie Policy</div>
            </div>
          </div>
        </footer>
   
  )
}
