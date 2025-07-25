import React from 'react';

interface StatusIndicatorProps {
  status: 'approved' | 'pending' | 'rejected';
  count: number;
}

const statusConfig = {
  approved: {
    color: '#2E7D32',
    label: 'Approved'
  },
  pending: {
    color: '#D4A017',
    label: 'Pending Approval'
  },
  rejected: {
    color: '#ED0006',
    label: 'Rejected'
  }
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, count }) => {
  const config = statusConfig[status];

  return (
    <div className="flex flex-col items-start gap-2.5">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2.5">
          <div>
            <svg width="9" height="9" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.5" cy="5" r="4.5" fill={config.color} />
            </svg>
          </div>
          <div className="text-[#2C2A29] text-base font-medium">
            {config.label}
          </div>
        </div>
        <div className="flex w-6 h-6 flex-col justify-center items-center gap-2.5 bg-[rgba(44,42,41,0.10)] px-[7px] py-0.5 rounded-[100px]">
          <div className="text-[#1B2026] text-[13px] font-medium">{count}</div>
        </div>
      </div>
      <div>
        <svg width="282.075" height="3" viewBox="0 0 283 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H282.075" stroke={config.color} strokeWidth="3.19055" />
        </svg>
      </div>
    </div>
  );
};
