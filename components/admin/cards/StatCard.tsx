import type React from "react"

interface StatCardProps {
  title: string
  value: string
  change: string
  bgColor: string
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, bgColor }) => (
  <div
    className={`flex w-full min-w-[200px] h-[136px] p-[12px_12px_20px] flex-col justify-center items-start gap-[16px] rounded-[10px] border border-[#2C2A29]/10 ${bgColor} shadow-[1px_6px_10px_0px_rgba(0,0,0,0.04)]`}
  >
    <div className="text-[#2C2A29] font-helvetica text-[18px] font-medium leading-[28px]">{title}</div>
    <div className="text-[#2C2A29] font-helvetica text-[36px] font-medium leading-[28px]">{value}</div>
    <div className="text-[#6BBF6F] font-helvetica text-[16px] font-normal leading-[24px]">{change}</div>
  </div>
)
