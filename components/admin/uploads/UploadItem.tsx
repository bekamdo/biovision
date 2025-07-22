import { MoreHorizontal, Pin } from "lucide-react";

export const UploadItem: React.FC<{
  title: string;
  timeAgo: string;
}> = ({ title, timeAgo }) => (
  <div className="flex w-full p-3 items-center gap-5 rounded-md border border-gray-300 bg-gray-50">
    <div className="flex flex-col items-start gap-1.5 flex-1">
      <div className="self-stretch text-dashboard-text text-base font-normal leading-6">
        {title}
      </div>
      <div className="self-stretch text-dashboard-text text-xs font-normal leading-[14px]">
        {timeAgo}
      </div>
    </div>
    <div className="flex h-6 justify-end items-start gap-1.5">
      <Pin className="w-6 h-6 text-gray-300" />
      <MoreHorizontal className="w-6 h-6 text-gray-300" />
    </div>
  </div>
);