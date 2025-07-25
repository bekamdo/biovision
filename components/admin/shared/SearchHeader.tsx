import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface SearchHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  timeFilter: string;
  onTimeFilterChange: (value: string) => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchValue,
  onSearchChange,
  timeFilter,
  onTimeFilterChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const timeOptions = [
    'This Week',
    'This Month',
    'Last Week',
    'Last Month',
    'All Time'
  ];

  return (
    <header className="flex justify-end items-center gap-5 w-full mb-8 lg:mb-[40px] xl:mb-[50px] md:flex-row max-md:flex-col max-md:gap-[15px] max-sm:gap-2.5">
      <div className="flex w-[266px] h-[46px] items-center gap-2.5 border bg-[rgba(253,253,253,0.00)] px-2.5 py-2 rounded-[15px] border-solid border-[#E3E3E3] max-md:w-full max-sm:h-10 max-sm:px-2 max-sm:py-1.5">
        <Search className="w-6 h-6 text-[#E3E3E3] flex-shrink-0" />
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="text-[#E3E3E3] text-sm font-normal bg-transparent border-none outline-none flex-1 placeholder:text-[#E3E3E3]"
        />
      </div>
      <div className="flex justify-end items-center gap-[50px]">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-[18px] border relative pt-[13px] pb-3 px-[15px] rounded-[15px] border-solid border-[#E7E7E7] max-sm:px-3 max-sm:py-2.5 bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-[#84818A] text-xs font-medium">{timeFilter}</span>
            <ChevronDown className="w-[19px] h-[19px] text-[#84818A]" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#E7E7E7] rounded-[8px] shadow-lg z-20">
              {timeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onTimeFilterChange(option);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-[#84818A] hover:bg-gray-50 first:rounded-t-[8px] last:rounded-b-[8px] transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
