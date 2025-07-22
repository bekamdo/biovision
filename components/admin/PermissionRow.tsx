import { Checkbox } from "./Checkbox";

export const PermissionRow = ({ name, permissions }: {
   name: string; 
  permissions: Record<string, boolean> 
}) => (
  <div className="flex flex-col lg:flex-row lg:items-center w-full border-b border-design-border py-2 gap-3 lg:gap-0">
    <div className="text-design-text text-xs font-bold w-full lg:w-[172px] h-auto lg:h-[33px] flex items-center px-5 gap-[30px]">
      {name}
    </div>
    <div className="flex flex-wrap items-center gap-4 lg:gap-[34px] w-full lg:w-[327px] px-5 lg:px-0">
      {Object.entries(permissions).map(([permission, checked]) => (
        <div key={permission} className="flex items-center gap-2 py-1">
          <Checkbox checked={checked} />
          <div className="text-design-text text-xs whitespace-nowrap">
            {permission}
          </div>
        </div>
      ))}
    </div>
  </div>
);