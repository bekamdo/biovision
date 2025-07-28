import React, { useState } from 'react';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = "Search...", 
  onSearch,
  className = ""
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="bg-[rgba(253,253,253,0)] border flex min-h-[46px] items-center gap-2.5 text-sm text-[rgba(227,227,227,1)] font-normal w-full sm:w-[266px] px-2.5 py-[11px] rounded-[15px] border-[rgba(227,227,227,1)] border-solid">
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/4d8750ec59d9c46d64c35bf203daf387dd3ddcdf?placeholderIfAbsent=true"
          alt="Search icon"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="self-stretch my-auto bg-transparent border-none outline-none text-[rgba(44,42,41,1)] placeholder-[rgba(227,227,227,1)] flex-1"
          aria-label="Search products"
        />
      </div>
    </form>
  );
};
