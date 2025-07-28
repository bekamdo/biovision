import React from 'react';

interface ActionButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  onClick, 
  ariaLabel = "Add new item",
  className = ""
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-[rgba(46,125,50,1)] self-stretch flex min-h-12 items-center justify-center w-12 h-12 my-auto px-[13px] rounded-[50px] hover:bg-[rgba(46,125,50,0.9)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(46,125,50,1)] focus:ring-offset-2 ${className}`}
    >
      <img
        src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/2f6979a99f890810f86bfe4dda8e34c60e5eb2a5?placeholderIfAbsent=true"
        alt=""
        className="aspect-[1] object-contain w-5 self-stretch my-auto"
      />
    </button>
  );
};
