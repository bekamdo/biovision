import React from 'react';

interface OutletCardProps {
  name: string;
  address: string;
  tags: string[];
  imageUrl: string;
  onEdit: () => void;
  isCompact?: boolean;
}

export const OutletCard: React.FC<OutletCardProps> = ({
  name,
  address,
  tags,
  imageUrl,
  onEdit,
  isCompact = false
}) => {
  if (isCompact) {
    return (
      <article className="rounded w-full overflow-hidden bg-white mt-4">
        <div className="flex w-full flex-col items-stretch justify-center p-3 max-md:max-w-full">
          <div className="flex w-full gap-[9px]">
            <div className="min-w-60 text-sm text-[rgba(44,42,41,1)] font-medium flex-1 shrink basis-[0%]">
              <h3>{name}</h3>
            </div>
            <div className="rounded min-h-16 overflow-hidden w-16">
              <img
                src={imageUrl}
                className="aspect-[5.32] object-contain w-16 flex-1"
                alt={`${name} restaurant`}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="justify-center items-stretch rounded flex w-full flex-col overflow-hidden bg-white mt-4">
      <div className="flex w-full flex-col items-stretch justify-center p-3 max-md:max-w-full">
        <div className="flex w-full gap-[9px]">
          <div className="min-w-60 font-medium flex-1 shrink basis-[0%]">
            <h3 className="text-[rgba(44,42,41,1)] text-sm">
              {name}
            </h3>
            <div className="flex w-full gap-2 text-xs text-black">
              <div className="flex min-w-60 w-full items-center gap-2.5 flex-1 shrink basis-[0%]">
                <address className="self-stretch flex-1 shrink basis-[0%] my-auto not-italic">
                  {address}
                </address>
              </div>
            </div>
            <div className="flex w-full gap-2 text-[9px] text-[rgba(93,93,93,1)] font-normal whitespace-nowrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="items-center flex gap-2.5 bg-[#F5F5F2] px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded min-h-16 overflow-hidden w-16">
            <img
              src={imageUrl}
              className="aspect-[1] object-contain w-16 flex-1"
              alt={`${name} restaurant`}
            />
          </div>
        </div>
      </div>
      <button
        onClick={onEdit}
        className="justify-center items-center bg-[#2E7D32] flex w-[264px] max-w-full gap-2.5 text-[13px] text-white font-medium whitespace-nowrap px-2.5 py-2 rounded-[25px] border-t-[rgba(0,0,0,0.06)] border-t border-solid hover:bg-[#1B5E20] transition-colors"
      >
        <div className="self-stretch flex w-[194px] items-center gap-2.5 justify-center my-auto">
          <span className="self-stretch my-auto">
            Edit
          </span>
        </div>
      </button>
    </article>
  );
};
