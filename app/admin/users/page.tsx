import { editorPermissions, superAdminPermissions, userData, userPermissions } from "@/app/data/sampledata";
import { FilterIcon } from "@/components/admin/icon/FilterIcon";
import { SearchIcon } from "@/components/admin/icon/SearchIcon";
import { RoleSection } from "@/components/admin/RoleSection";
import { UserRow } from "@/components/admin/UserRow";

export default function UserManagement() {
  return (
    <div className="flex flex-col items-end gap-5 w-full max-w-[1277px] mx-auto p-4 lg:p-8 font-helvetica">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 lg:gap-[10px] w-full">
        <div className="flex flex-col items-start gap-[10px] flex-1">
          <h1 className="text-design-text text-2xl lg:text-[32px] font-bold leading-normal tracking-[-0.96px]">
            User Management
          </h1>
          <p className="text-design-text text-base leading-6">
            Control who has access to the platform and their permissions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button className="text-white text-sm font-bold px-[60px] py-5 bg-dashboard-green rounded-[50px] cursor-pointer hover:bg-design-green-light transition-colors w-full sm:w-auto">
            Assign Role
          </button>
          <button className="text-dashboard-green text-sm font-bold px-[60px] py-5 border-2 border-dashboard-green bg-white rounded-[50px] cursor-pointer hover:bg-green-50 transition-colors w-full sm:w-auto">
            Add Permission
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-[18px] w-full sm:w-[277px] ml-auto">
        <div className="flex w-full sm:w-[209px] px-[10px] py-2 items-center gap-[10px] rounded-[15px] border border-design-gray-light bg-transparent">
          <SearchIcon />
          <input 
            type="text" 
            placeholder="Search..." 
            className="text-design-gray-light font-inter text-sm bg-transparent border-none outline-none flex-1"
          />
        </div>
        <button className="flex p-[11px] items-center rounded-[50px] bg-dashboard-green cursor-pointer hover:bg-design-green-light transition-colors">
          <FilterIcon />
        </button>
      </div>

      {/* Users Table */}
      <div className="flex flex-col items-start gap-5 w-full">
        {/* Users Table Header */}
        <div className="hidden md:flex h-[47px] px-[50px] items-center justify-between w-full rounded-xl border border-design-border bg-design-white">
          <div className="text-design-text text-xs font-bold">Users</div>
          <div className="text-design-text text-xs font-bold">Role</div>
          <div className="text-design-text text-xs font-bold">Actions</div>
        </div>

        {/* Users Table Content */}
        <div className="flex flex-col px-4 md:px-[35px] py-5 w-full rounded-xl border border-design-border bg-design-white">
          {userData.map((user, index) => (
            <UserRow key={index} {...user} />
          ))}
        </div>
      </div>

      {/* Roles and Permissions Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        {/* Roles Table Header */}
        <div className="hidden lg:flex h-[47px] px-[50px] items-center gap-[185px] w-full rounded-xl border border-design-border bg-design-white">
          <div className="text-design-text text-xs font-bold">Role</div>
          <div className="text-design-text text-xs font-bold">Permissions</div>
        </div>

        {/* Roles Content */}
        <div className="flex flex-col items-start gap-4 w-full">
          <RoleSection roleName="Super Admin" permissions={superAdminPermissions} />
          <RoleSection roleName="Editor" permissions={editorPermissions} />
          <RoleSection roleName="User" permissions={userPermissions} />
        </div>
      </div>
    </div>
  );
}