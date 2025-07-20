import React from "react";
import { ArrowRight, ChevronDown, MessageCircle, MoreVertical, Pencil, Star } from "lucide-react";

const ChartAndStoriesSection: React.FC = () => {
  return (
    <div className="p-3 sm:p-5 font-helvetica w-full">
      <div className="flex flex-col lg:flex-row  gap-5 ">
        {/* Left Section */}
        <div className="flex flex-col gap-5 flex-1">
          {/* Site Visits Widget */}
          <div className="bg-white rounded-2xl p-4 sm:p-[24px_30px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.10)]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 mb-2 gap-2 sm:gap-0">
              <h2 className="text-[#2C2A29] text-xl font-medium leading-tight tracking-[-0.2px]">
                Site Visits
              </h2>
              <div className="flex items-center gap-1">
                <span className="text-[#2C2A29] text-sm font-normal leading-tight tracking-[-0.3px]">
                  Monthly
                </span>
                <ChevronDown className="w-[14px] h-[14px] text-[#2C2A29]" />
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="flex flex-col justify-between h-[137px] py-2 text-xs sm:text-sm">
                {["100k", "50k", "20k", "10k", "0"].map((label) => (
                  <span key={label} className="text-[#2C2A29] text-[10px] font-medium tracking-[-0.3px]">
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex-1 relative">
                <div className="w-full h-32 relative bg-gradient-to-b from-[rgba(46,125,50,0.4)] to-[rgba(46,125,50,0)] rounded-sm">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 612 123"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M171.512 46.8887L84.6236 92.3887L-1.50977 102.889V123.389L612.757 123.889V1.38867L523.601 26.3887L435.201 79.897L346.801 99.397L259.157 26.3887L171.512 46.8887Z"
                      fill="url(#paint0_linear)"
                      stroke="#2E7D32"
                      strokeDasharray="2 2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="305.624"
                        y1="1.38867"
                        x2="305.624"
                        y2="123.389"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2E7D32" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#2E7D32" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between mt-4 px-2">
                  {["May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"].map((month) => (
                    <span key={month} className="text-[#2C2A29] text-[10px] font-medium tracking-[-0.3px]">
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              {
                title: "Top Performing Month",
                value: "November",
                description: "4,598 Submissions",
              },
              {
                title: "Top Performing Product",
                value: "Maize",
                description: "96K Tons sold so far",
              },
              {
                title: "Top buyer",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/2ef093778b334a699650034b13a3bcdd23dd013e?width=48",
                name: "Maggie Johnson",
                company: "Oasis Organic Inc.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 flex-1 flex flex-col justify-center gap-4 min-h-[120px]"
              >
                <h3 className="text-[#2C2A29] text-sm sm:text-base font-medium tracking-[-0.4px]">
                  {item.title}
                </h3>
                {item.image ? (
                  <div className="flex flex-col gap-2 flex-1 justify-end">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="text-[#2C2A29] text-xs font-medium tracking-[-0.3px]">
                        {item.name}
                      </div>
                      <div className="text-[#2C2A29] text-[10px] font-normal tracking-[-0.3px]">
                        {item.company}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-[10px]">
                    <div className="text-[#2E7D32] text-2xl font-medium tracking-[-0.2px]">
                      {item.value}
                    </div>
                    <div className="text-[#2C2A29] text-base font-medium tracking-[-0.2px]">
                      {item.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Stories */}
        <div className="w-full lg:w-[508px] bg-white rounded-2xl p-4 sm:p-[24px_30px] flex flex-col gap-4 shadow-[-3px_4px_30px_0px_rgba(0,0,0,0.10)]">
          <h2 className="text-[#2C2A29] text-xl font-medium tracking-[-0.2px]">
            Top Performing Stories
          </h2>
          <hr className="border-[rgba(44,42,41,0.10)]" />
          <div className="flex flex-col">
            {[
              {
                title: "I Doubled My Income with No Chemicals",
                author: "Mary Njoroge",
                date: "18 June 2025",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/8b4f7a310a62ce5d6597f715830b36315405c7bf?width=64",
              },
              {
                title: "Youth Rooftop Farming in Nairobi",
                author: "Young & Green",
                date: "13 July 2025",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/214d47223612b7926643a904d494338b7cdf11fa?width=64",
              },
              {
                title: "Agroecology Changed My Life",
                author: "Fatuma's Journey",
                date: "4 July 2025",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/83907970c77fe85391c23e8b58e062b677b31138?width=64",
              },
              {
                title: "Beginner's Guide to Agroecology",
                author: "Biovision Trust Africa",
                date: "13 July 2025",
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/06cb29430b4b781cdc324832a8c5aa422ae7a871?width=64",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg"
              >
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-1 flex flex-col gap-[2px] min-w-0">
                  <h4 className="text-[#2C2A29] text-sm font-medium tracking-[-0.3px] truncate">
                    {story.title}
                  </h4>
                  <div className="flex items-start gap-[10px] flex-wrap">
                    <span className="text-[#2E7D32] text-xs font-normal tracking-[-0.3px]">
                      {story.author}
                    </span>
                    <span className="text-[#2C2A29] text-xs italic font-normal tracking-[-0.3px]">
                      {story.date}
                    </span>
                  </div>
                </div>
                {index === 1 && (
                  <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-[#2E7D32]" strokeWidth={1.25} />
                      <Star className="w-4 h-4 text-[#2E7D32]" strokeWidth={1.25} />
                      <Pencil className="w-4 h-4 text-[#2E7D32]" strokeWidth={1.25} />
                    </div>
                    <div className="w-px h-6 bg-[#2E7D32] opacity-20" />
                    <MoreVertical className="w-4 h-4 text-[#2C2A29]" strokeWidth={1.25} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <hr className="border-[rgba(44,42,41,0.10)]" />
          <div className="flex justify-start px-6">
            <div className="flex items-center gap-1">
              <span className="text-[#2E7D32] text-sm font-normal tracking-[-0.3px]">
                All Stories
              </span>
              <ArrowRight className="w-[14px] h-[14px] text-[#2E7D32]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartAndStoriesSection;
