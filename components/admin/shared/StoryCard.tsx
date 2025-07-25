import React from 'react';

import { User } from 'lucide-react';
import { ActionDropdown } from './ActionDropdown';

interface StoryCardProps {
  title: string;
  description: string;
  author: string;
  status: 'approved' | 'pending' | 'rejected';
  onAction: (action: string) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  author,
  status,
  onAction
}) => {
  return (
    <article className="flex flex-col items-start gap-2.5 w-full border shadow-[4px_6px_30px_0_rgba(44,42,41,0.10)] bg-white p-5 rounded-[15px] border-solid border-[rgba(44,42,41,0.10)] max-sm:p-[15px]">
      <div className="flex items-start gap-[19px] w-full">
        <div className="flex flex-col items-start gap-2.5 flex-1">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <h3 className="text-[#2C2A29] text-[19px] font-bold max-sm:text-[17px]">
              {title}
            </h3>
            <p className="text-[rgba(44,42,41,0.60)] text-[13px] font-normal max-sm:text-xs">
              {description}
            </p>
          </div>
          <div className="w-[157px] h-6 relative">
            <div className="inline-flex items-center gap-2.5 w-[157px] h-6">
              <div className="w-6 h-6 rounded-full border border-white bg-gray-200 flex items-center justify-center">
                <User className="w-3 h-3 text-gray-500" />
              </div>
              <span className="text-[rgba(44,42,41,0.60)] text-[13px] font-medium max-sm:text-xs">
                Written by {author}
              </span>
            </div>
          </div>
        </div>
        <ActionDropdown status={status} onAction={onAction} />
      </div>
    </article>
  );
};
