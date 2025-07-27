import React from 'react';

interface ViewToggleProps {
  currentView: 'list' | 'map';
  onViewChange: (view: 'list' | 'map') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="flex w-full max-w-[285px] gap-2.5">
      <button
        onClick={() => onViewChange('list')}
        className={`items-center rounded border flex min-h-[34px] gap-[3px] text-xs font-medium pl-2.5 pr-3 py-[7px] border-solid border-[rgba(0,0,0,0.06)] ${
          currentView === 'list' 
            ? 'bg-[#2E7D32] text-white' 
            : 'bg-[#F5F5F2] text-black'
        }`}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/2d95e31ce7a16f0559100013f9fe644593d218de?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="List view icon"
        />
        <span className="self-stretch my-auto">
          List View
        </span>
      </button>
      <button
        onClick={() => onViewChange('map')}
        className={`items-center rounded border flex min-h-[34px] gap-[3px] text-xs font-medium pl-2.5 pr-3 py-[7px] border-solid border-[rgba(0,0,0,0.06)] ${
          currentView === 'map' 
            ? 'bg-[#2E7D32] text-white' 
            : 'bg-[#F5F5F2] text-black'
        }`}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/ccf168143f4882c04fb50ed68ac168da02f54312?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Map view icon"
        />
        <span className="self-stretch my-auto">
          Map View
        </span>
      </button>
    </div>
  );
};
