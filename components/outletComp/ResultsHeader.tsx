import React from 'react';

interface ResultsHeaderProps {
  resultCount: number;
  currentSort: string;
}

export const ResultsHeader: React.FC<ResultsHeaderProps> = ({ resultCount, currentSort }) => {
  const getSortLabel = (sortValue: string) => {
    switch (sortValue) {
      case 'price-asc': return 'Price Asc';
      case 'price-desc': return 'Price Desc';
      case 'rating': return 'Rating';
      case 'distance': return 'Distance';
      default: return 'Price Asc';
    }
  };

  return (
    <>
      <header className="flex min-h-[55px] w-full items-center gap-2.5 text-lg text-black font-medium max-md:max-w-full">
        <h1 className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          All Results
        </h1>
      </header>
      
      <div className="flex w-full items-center gap-6 text-sm font-normal mt-4 flex-wrap sm:flex-nowrap">
        <p className="text-[#4E5562] leading-loose flex-1 my-auto">
          Showing {resultCount} results
        </p>
        <div className="items-center self-stretch flex gap-2.5 overflow-hidden text-[#4E5562] leading-none my-auto rounded-[50px]">
          <div className="self-stretch flex min-h-5 my-auto" />
          <span className="text-[#4E5562] self-stretch my-auto">
            {getSortLabel(currentSort)}
          </span>
          <div className="self-stretch flex w-4 shrink-0 h-5 my-auto" />
        </div>
      </div>
    </>
  );
};
