export const Checkbox = ({ checked }: { checked: boolean }) => (
  <div className="relative">
    <div className={`w-[14px] h-[14px] border rounded-[3px] ${checked ? 'bg-dashboard-green border-dashboard-green' : 'bg-white border-design-gray-light'}`}>
      {checked && (
        <div 
          className="absolute left-[3px] top-[2px] w-[8px] h-[5px] border-b-2 border-l-2 border-design-white transform rotate-[-50deg]"
        />
      )}
    </div>
  </div>
);