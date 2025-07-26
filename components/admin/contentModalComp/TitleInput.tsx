import React from 'react';

interface TitleInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TitleInput: React.FC<TitleInputProps> = ({ 
  value, 
  onChange, 
  placeholder = "Title goes here" 
}) => {
  return (
    <div className="border flex w-full items-center gap-2.5 text-[40px] text-[#2c2a29] font-bold tracking-[-1.2px] justify-center mt-5 p-5 rounded-[25px] border-[rgba(44,42,41,0.4)] border-solid max-md:max-w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="self-stretch w-[948px] my-auto max-md:max-w-full bg-transparent outline-none placeholder:text-[#2c2a29]"
      />
    </div>
  );
};
