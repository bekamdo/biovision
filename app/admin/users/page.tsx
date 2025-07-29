import { editorPermissions, superAdminPermissions, userData, userPermissions } from "@/app/data/sampledata";
import { FilterIcon } from "@/components/admin/icon/FilterIcon";
import { SearchIcon } from "@/components/admin/icon/SearchIcon";
import Pagination from "@/components/admin/shared/Pagination";
import { PermissionsTable } from "@/components/admin/table/PermissionsTable";
import { UserRow } from "@/components/admin/UserRow";

export default function UserManagement() {
  return (
    <div className="flex flex-col bg-[#F8F9FA] items-end gap-5 w-full max-w-[1277px] mx-auto p-4 lg:p-8 font-helvetica">
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
          <button className="text-white hover:bg-dashboard-green-light hover:animate-pulse text-sm font-bold px-[60px] py-5 bg-dashboard-green rounded-[50px] cursor-pointer hover:bg-design-green-light transition-colors w-full sm:w-auto">
            Assign Role
          </button>
          <button className="text-dashboard-green text-sm font-bold px-[60px] py-5 border-2 border-dashboard-green bg-white rounded-[50px] cursor-pointer hover:bg-green-50 transition-colors w-full sm:w-auto">
            Add Permission
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex  flex-col sm:flex-row w-full justify-end items-center gap-[18px] sm:w-[377px] ml-auto">
        <div className="flex w-full sm:w-[209px] px-[10px] py-2 items-center gap-[10px] rounded-[15px] border border-design-gray-light bg-transparent">
          <SearchIcon />
             <input
                 type="text"
                 placeholder="Search..."
                 className="flex-grow bg-transparent outline-none text-gray-700 text-sm placeholder-gray-400"
                />
        </div>
        <button className="flex p-[11px] items-center rounded-[50px]  bg-dashboard-green cursor-pointer hover:bg-dashboard-green-light transition-colors">
          <FilterIcon />
        </button>
      </div>

      {/* Users Table */}
      <div className="flex flex-col items-start gap-5 w-full">
        {/* Users Table Header */}
        <div className="hidden bg-white md:flex h-[47px] px-[50px] items-center justify-between w-full rounded-xl border border-design-border bg-design-white">
          <div className="text-design-text text-xs font-bold">Users</div>
          <div className="text-design-text text-xs font-bold">User Type</div>
          <div className="text-design-text text-xs font-bold">Contact Number</div>
           <div className="text-design-text text-xs font-bold">Email Address</div>
            <div className="text-design-text text-xs font-bold">Role</div>
        </div>

        {/* Users Table Content */}
        <div className="flex bg-white flex-col px-4 md:px-[35px] py-5 w-full rounded-xl border border-design-border bg-design-white">
          {userData.map((user, index) => (
            <UserRow key={index} {...user} />
          ))}
        </div>
               <Pagination/>
       
      </div>
      
     

      {/* Roles and Permissions Section */}
      <div className="flex  flex-col items-start gap-5 w-full">
        {/* Roles Table Header */}
        <div className="hidden lg:grid grid-cols-5 text-center items-center h-[47px] w-full px-[43px] rounded-xl border border-design-border bg-white">
       
              <div className="text-design-text text-xs font-bold">Module</div>
              <div className="text-design-text text-xs font-bold text-center">Super Admin</div>
              <div className="text-design-text text-xs font-bold text-center">Admin</div>
              <div className="text-design-text text-xs font-bold text-center">Editor</div>
               <div className="text-design-text text-xs font-bold text-center">User</div>
           
</div>
        {/* Roles Content */}
        <div className="flex bg-white border border-design-border bg-design-white rounded-xl flex-col items-start gap-4 w-full">
          {/* <RoleSection roleName="Super Admin" permissions={superAdminPermissions} />
          <RoleSection roleName="Editor" permissions={editorPermissions} />
          <RoleSection roleName="User" permissions={userPermissions} /> */}
          
          <PermissionsTable/>
        </div>
      </div>
    </div>
  );
}