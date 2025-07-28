import React from 'react';
import { Module, Permission, Role } from '@/types';
import { PermissionCell } from './PermissionCell';

interface PermissionRowProps {
  module: Module;
  roles: Role[];
  onPermissionChange: (
    moduleId: string,
    roleId: string,
    permissionType: keyof Permission,
    value: boolean
  ) => void;
  isLastRow?: boolean;
}

export const PermissionRow: React.FC<PermissionRowProps> = ({
  module,
  roles,
  onPermissionChange,
  isLastRow = false,
}) => {
  return (
    <>
      {/* Desktop layout */}
      <div
        className={`hidden lg:grid grid-cols-5 items-center w-full px-[16px] lg:px-[43px] py-4 text-sm text-gray-800 ${
          !isLastRow ? 'border-b border-[rgba(44,42,41,0.1)]' : ''
        }`}
      >
        <div className="font-semibold">{module.name}</div>
        {roles.map((role) => (
          <div key={role.id} className="flex justify-center">
            <PermissionCell
              permission={module.permissions[role.id]}
              roleIcon={role.icon}
              onPermissionChange={(permissionType, value) =>
                onPermissionChange(module.id, role.id, permissionType, value)
              }
            />
          </div>
        ))}
      </div>

      {/* Mobile/Tablet layout */}
      <div className="flex lg:hidden flex-col w-full px-4 py-4 border border-[rgba(44,42,41,0.1)] rounded-lg mb-3">
        <div className="text-sm font-semibold mb-2">{module.name}</div>
        <div className="flex flex-col gap-3">
          {roles.map((role) => (
            <div key={role.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
              
                <span className="text-sm">{role.name}</span>
              </div>
              <PermissionCell
                permission={module.permissions[role.id]}
                roleIcon={role.icon}
                onPermissionChange={(permissionType, value) =>
                  onPermissionChange(module.id, role.id, permissionType, value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
