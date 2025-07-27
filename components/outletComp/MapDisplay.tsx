import React from 'react';

export const MapDisplay: React.FC = () => {
  return (
    <section className="w-full overflow-hidden text-xs font-medium">
      <div className="rounded flex w-full max-w-full overflow-hidden px-4 py-2.5">
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/344dd04f1da4b084769659ebb02b68ee8f89f442?placeholderIfAbsent=true"
          className="aspect-[1.97] object-contain w-full shadow-[0px_4px_50px_10px_rgba(46,125,50,0.1)] mt-4 rounded-[35px]"
          alt="Interactive map showing restaurant locations"
        />
      </div>
    </section>
  );
};
