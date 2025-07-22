import type React from "react"

export const MiniChart: React.FC<{ title: string; value: string; change: string }> = ({ title, value, change }) => (
  <div className="flex items-center gap-6 md:gap-10 p-4 md:p-5 rounded-[10px] border border-gray-200 bg-white shadow-sm w-full min-w-[280px]">
    <div className="flex flex-col gap-6 md:gap-8 flex-1">
      <div className="flex flex-col gap-4 md:gap-[22px]">
        <h3 className="text-dashboard-text text-base md:text-lg font-medium leading-7">{title}</h3>
        <div className="text-dashboard-text text-3xl md:text-5xl font-medium leading-7">{value}</div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center h-[100px] md:h-[121px]">
      <svg
        className="w-20 md:w-[117px] h-12 md:h-[70px]"
        viewBox="0 0 117 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 42.9998C1 42.9998 16.2821 24.7085 30 21.9998C40.431 19.9402 46.4876 27.0923 57 25.4998C73.2778 23.034 76.3958 5.4208 92.5 1.99988C101.477 0.0929484 115.5 1.99983 115.5 1.99983"
          stroke="#2E7D32"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
        <path
          d="M30.5 21.8475C16.7821 24.5562 1.5 42.8475 1.5 42.8475V70H116V1.84749C116 1.84749 101.977 -0.0593953 93 1.84754C76.8958 5.26846 73.7778 22.8817 57.5 25.3475C46.9875 26.9399 40.931 19.7878 30.5 21.8475Z"
          fill="url(#paint0_linear)"
        ></path>
        <defs>
          <linearGradient id="paint0_linear" x1="59" y1="-24" x2="81" y2="35.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2E7D32"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      {title === "Survery Participation" && (
        <div className="flex px-2 md:px-2.5 justify-center items-center gap-1 md:gap-2.5 rounded bg-green-100 mt-2">
          <div className="text-dashboard-text text-xs font-normal leading-6">{change}</div>
        </div>
      )}
    </div>
  </div>
)
