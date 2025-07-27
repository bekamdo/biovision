import React, { useState } from 'react';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    { value: 'price-asc', label: 'Price Asc' },
    { value: 'price-desc', label: 'Price Desc' },
    { value: 'rating', label: 'Rating' },
    { value: 'distance', label: 'Distance' }
  ];

  return (
    <div className="flex w-full max-w-[436px] items-center gap-4 sm:gap-[21px] justify-between mt-4 flex-wrap sm:flex-nowrap">
      <div className="bg-[rgba(253,253,253,0)] border self-stretch flex min-h-10 items-center gap-2.5 text-sm text-[rgba(202,208,217,1)] font-normal w-full max-w-[209px] min-w-[180px] my-auto px-2.5 py-2 rounded-[15px] border-[rgba(44,42,41,0.4)] border-solid">
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/53b8d9cfa026ce01cf13e77d189560c54916c302?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt="Search icon"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
          className="self-stretch my-auto bg-transparent border-none outline-none text-black placeholder-[rgba(202,208,217,1)] flex-1"
        />
      </div>
      
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="items-center border self-stretch flex gap-2.5 overflow-hidden w-[140px] my-auto px-4 py-2.5 rounded-[15px] border-solid border-[#CAD0D9]"
        >
          <span className="text-[#4E5562] text-sm font-normal leading-none self-stretch flex-1 shrink basis-[0%] my-auto">
            Sort By
          </span>
          <div className="self-stretch flex min-h-5 items-center justify-center w-4 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/384d73abce5862b71c590278a718cfbd9274000c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3.5 self-stretch my-auto"
              alt="Dropdown arrow"
            />
          </div>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#CAD0D9] rounded-[15px] shadow-lg z-10">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value);
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-[#4E5562] hover:bg-gray-50 first:rounded-t-[15px] last:rounded-b-[15px]"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <button className="aspect-[1] object-contain w-11 self-stretch shrink-0 my-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/2a3256a1d8825e49ec7d3ef825aa86c5cd7bdd21?placeholderIfAbsent=true"
          className="w-full h-full object-contain"
          alt="Filter options"
        />
      </button>
    </div>
  );
};
