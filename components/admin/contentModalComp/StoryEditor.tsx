import React from 'react';

interface StoryEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const StoryEditor: React.FC<StoryEditorProps> = ({ 
  value, 
  onChange, 
  placeholder = "Tell your story... |" 
}) => {
  return (
    <section className="mt-5 max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch text-xl text-[rgba(44,42,41,1)] font-bold tracking-[-0.6px] justify-center max-md:max-w-full">
        <h2 className="max-md:max-w-full">Write your story</h2>
      </div>
      <div className="border flex w-full items-center gap-2.5 text-xl text-[#2c2a29] font-normal justify-center mt-5 p-5 rounded-[15px] border-[rgba(44,42,41,0.4)] border-solid max-md:max-w-full">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="self-stretch w-[946px] my-auto max-md:max-w-full bg-transparent outline-none resize-none min-h-[100px] placeholder:text-[#2c2a29]"
        />
      </div>
    </section>
  );
};
