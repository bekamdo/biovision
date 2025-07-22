import { Bell, MoreHorizontal } from "lucide-react";

export const PendingItem: React.FC<{
  title: string;
  timeAgo: string;
  category: string;
}> = ({ title, timeAgo, category }) => (
  <div className="flex w-full  p-3.5 items-center gap-7 rounded-md border border-gray-300 bg-gray-50">
    <div className="flex flex-col items-start gap-1.5 flex-1">
      <div className="text-dashboard-text text-base font-normal leading-6">
        {title}
      </div>
      <div className="self-stretch text-dashboard-text text-xs font-normal leading-[14px]">
        {timeAgo}
      </div>
    </div>
    <div className="flex h-6 justify-end items-start gap-1.5">
      <Bell className="w-6 h-6 text-yellow-500" />
      <MoreHorizontal className="w-6 h-6 text-gray-300" />
    </div>
  </div>
);
