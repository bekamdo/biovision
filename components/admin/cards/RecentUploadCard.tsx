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
      className={`flex w-full lg:w-[506px] min-h-[136px] p-[20px] sm:p-[30px_50px] flex-col justify-center items-start gap-[10px] rounded-[10px] border border-[#2C2A29]/10 ${backgroundColor}`}
    >
      <div className="flex flex-col items-start w-full gap-[10px]">
        <div className=" text-[#2C2A29] font-helvetica text-[18px] sm:text-[20px] font-medium leading-[28px]">
          {title}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-[10px]">
          <div className="text-[#2C2A29] font-helvetica text-[14px] font-normal leading-normal">
            {subtitle}
          </div>
          <div
            className={`text-white text-center font-helvetica text-[14px] font-medium leading-normal flex h-[38px] px-4 py-[10px] justify-center items-center gap-[10px] rounded-[20px] ${buttonColor} whitespace-nowrap`}
          >
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUploadCard;
