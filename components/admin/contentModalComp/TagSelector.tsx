import React from 'react';

interface Tag {
  id: string;
  name: string;
  selected: boolean;
}

interface TagSelectorProps {
  tags: Tag[];
  onTagToggle: (tagId: string) => void;
}

export const TagSelector: React.FC<TagSelectorProps> = ({ tags, onTagToggle }) => {
  return (
    <section className="mt-5 max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch text-xl text-[rgba(44,42,41,1)] font-bold tracking-[-0.6px] justify-center max-md:max-w-full">
        <h2 className="max-md:max-w-full">Choose a Tag</h2>
      </div>
      <div className="flex w-full items-center gap-[30px] text-sm text-[rgba(44,42,41,1)] font-medium leading-none flex-wrap mt-5 max-md:max-w-full">
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onTagToggle(tag.id)}
            className={`self-stretch flex items-center gap-2.5 justify-center my-auto px-5 py-2.5 rounded-[10px] transition-colors ${
              tag.selected
                ? 'bg-[rgba(46,125,50,1)] text-white font-bold'
                : 'bg-[rgba(44,42,41,0.1)] text-[rgba(44,42,41,1)]'
            }`}
          >
            <span className="self-stretch my-auto">{tag.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
