import { PermissionRow } from "./PermissionRow";

export const RoleSection = ({ roleName, permissions }: {
  roleName: string;
  permissions: Array<{ name: string; permissions: Record<string, boolean> }>
}) => (
  <div className="flex flex-col lg:flex-row p-0 items-start w-full rounded-xl border border-design-border bg-white">
    <div className="text-design-text text-xs font-bold w-full lg:w-[234px] h-auto lg:h-[46px] flex items-center px-5 gap-[30px] py-3 lg:py-0 border-b lg:border-b-0 border-design-border">
      {roleName}
    </div>
    <div className="flex flex-col items-start gap-1 w-full lg:w-[727px]">
      {permissions.map((permission, index) => (
        <PermissionRow key={index} {...permission} />
      ))}
    </div>
  </div>
);