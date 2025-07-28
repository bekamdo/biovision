import { Permission } from '@/types';
import React from 'react';


interface PermissionCellProps {
  permission: Permission;
  roleIcon: string;
  onPermissionChange: (permissionType: keyof Permission, value: boolean) => void;
}

export const PermissionCell: React.FC<PermissionCellProps> = ({
  permission,
  roleIcon,
  onPermissionChange,
}) => {
  return (
    <div className="flex-shrink-0 whitespace-nowrap leading-none w-[62px] md:w-[62px] min-w-[62px]">
      <div className="flex gap-1.5 md:gap-2.5 pb-2 items-center">
        <img
          src={roleIcon}
          className="aspect-[1] object-contain w-3 md:w-3.5 shrink-0"
          alt="Role icon"
        />
        <div className="text-xs">View</div>
      </div>
      <div className="flex gap-1.5 md:gap-2.5 pb-2 items-center">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={permission.create}
            onChange={(e) => onPermissionChange('create', e.target.checked)}
            className="sr-only"
          />
          <div
            className={`border flex w-3 md:w-3.5 shrink-0 h-3 md:h-3.5 rounded-[3px] border-[rgba(44,42,41,0.4)] border-solid ${
              permission.create ? 'bg-dashboard-green' : ''
            }`}
          >
            {permission.create && (
              <svg
                className="w-2 md:w-2.5 h-2 md:h-2.5 text-white m-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </label>
        <div className="text-xs">Create</div>
      </div>
      <div className="flex gap-1.5 md:gap-2.5 pb-2 items-center">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={permission.edit}
            onChange={(e) => onPermissionChange('edit', e.target.checked)}
            className="sr-only"
          />
          <div
            className={`border flex w-3 md:w-3.5 shrink-0 h-3 md:h-3.5 rounded-[3px] border-[rgba(44,42,41,0.4)] border-solid ${
              permission.edit ? 'bg-dashboard-green' : ''
            }`}
          >
            {permission.edit && (
              <svg
                className="w-2 md:w-2.5 h-2 md:h-2.5 text-white m-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </label>
        <div className="text-xs">Edit</div>
      </div>
      <div className="flex gap-1.5 md:gap-2.5 pb-2 items-center">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={permission.delete}
            onChange={(e) => onPermissionChange('delete', e.target.checked)}
            className="sr-only"
          />
          <div
            className={`border flex w-3 md:w-3.5 shrink-0 h-3 md:h-3.5 rounded-[3px] border-[rgba(44,42,41,0.4)] border-solid ${
              permission.delete ? 'bg-dashboard-green' : ''
            }`}
          >
            {permission.delete && (
              <svg
                className="w-2 md:w-2.5 h-2 md:h-2.5 text-white m-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </label>
        <div className="text-xs">Delete</div>
      </div>
    </div>
  );
};
