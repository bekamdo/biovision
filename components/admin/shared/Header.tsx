import React, { useState } from 'react';
import { SearchInput } from './SearchInput';
import { ActionButton } from './ActionButton';

export const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    console.log('Searching for:', value);
  };

  const handleAddAction = () => {
    console.log('Add new product clicked');
  };

  return (
    <header className="flex flex-col w-full text-[rgba(44,42,41,1)]">
      {/* Responsive header section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 mb-6">
        {/* Left: Title + description */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-[-0.96px]">
            {title}
          </h1>
          <p className="text-lg sm:text-xl font-normal mt-2.5">{description}</p>
        </div>

        {/* Right: Search + button */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[18px]">
          <SearchInput placeholder="Search..." onSearch={handleSearch} />
          <ActionButton onClick={handleAddAction} ariaLabel="Add new product" />
        </div>
      </div>

      {/* Search results */}
      {/* {searchQuery && (
        <section className="mt-4 p-4 bg-gray-50 rounded-lg" aria-live="polite">
          <p className="text-sm text-gray-600">
            Search results for: <strong>{searchQuery}</strong>
          </p>
        </section>
      )} */}
    </header>
  );
};

export default Header;
