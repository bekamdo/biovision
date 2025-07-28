import type React from "react";

interface RecentUploadCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundColor?: string;
  buttonColor?: string;
}

const RecentUploadCard: React.FC<RecentUploadCardProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundColor = "bg-[rgba(46,125,50,0.1)]",
  buttonColor = "bg-[#2E7D32]",
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-start gap-2 p-[30px_50px] w-full lg:w-[506px] min-h-[136px] rounded-[10px] border border-[#2C2A29]/10 ${backgroundColor}`}
    >
      <h3 className="text-[#2C2A29] font-helvetica text-[20px] font-medium leading-[28px]">
        {title}
      </h3>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
        <p className="text-[#2C2A29] font-helvetica text-sm leading-normal">
          {subtitle}
        </p>

        <div
          className={`flex items-center justify-center h-[38px] px-4 py-2 rounded-[20px] text-white text-sm font-medium text-center font-helvetica whitespace-nowrap ${buttonColor}`}
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default RecentUploadCard;
