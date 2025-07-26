import React from 'react';

interface PostHeaderProps {
  title: string;
  description: string;
  iconSrc: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ title, description, iconSrc }) => {
  return (
    <header className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
      <div className="flex w-full gap-[40px_50px] max-md:max-w-full">
        <div className="border flex min-h-12 w-12 items-center gap-2.5 justify-center rounded-[50px] border-[rgba(44,42,41,0.4)] border-solid">
          <img
            src={iconSrc}
            alt="Post icon"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch text-[rgba(44,42,41,1)] justify-center mt-5 max-md:max-w-full">
        <h1 className="text-[32px] font-bold tracking-[-0.96px] max-md:max-w-full">
          {title}
        </h1>
        <p className="text-xl font-normal mt-2.5 max-md:max-w-full">
          {description}
        </p>
      </div>
    </header>
  );
};
