import React from "react";

interface RecentActivityCardProps {
  time: string;
  user: string;
  message: string;
  summary: string;
  uploadsToday: number;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  time,
  user,
  message,
  summary,
  uploadsToday,
}) => {
  return (
    <div className="flex w-full lg:w-[506px] min-h-[317px] p-6 md:p-8 flex-col justify-center items-start gap-2.5 rounded-[10px] border border-gray-200 bg-[#2E7D32]/10">
      <div className="flex w-full max-w-[395px] flex-col items-start gap-5">
        <div className="h-7 self-stretch text-dashboard-text text-xl md:text-2xl font-bold leading-7">
          Recently Activity
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-1.5 self-stretch">
            <div className="self-stretch text-dashboard-text text-xs font-medium leading-normal opacity-60">
              {time}
            </div>
            <div className="self-stretch text-dashboard-text text-base md:text-lg font-medium leading-7">
              {user} {message}
            </div>
            <div className="self-stretch text-dashboard-text text-sm font-normal leading-5 opacity-80">
              {summary}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row h-auto sm:h-12 justify-between items-start sm:items-center self-stretch gap-3 sm:gap-0">
            <div className="text-dashboard-text text-sm font-normal leading-normal">
              There have been {uploadsToday} uploads today
            </div>
            <div className="flex h-9 px-4 py-2.5 justify-center items-center gap-2.5 rounded-[20px] bg-dashboard-green whitespace-nowrap">
              <div className="text-white text-center text-sm font-medium leading-normal">
                See All Activity
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;
