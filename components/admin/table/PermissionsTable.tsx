"use client"

import React, { useState } from 'react';

import { PermissionRow } from './PermissionRow';
import { Permission, PermissionsData } from '@/types';


export const initialData: PermissionsData = {
  roles: [
    {
      id: 'admin',
      name: 'Admin',
      icon: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/7e47d1212eaecbf3ad0fb04f762e0045c30c5744?placeholderIfAbsent=true',
    },
    {
      id: 'manager',
      name: 'Manager',
      icon: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/76fc84d31695d89d5dee51d8245d42732e70c61a?placeholderIfAbsent=true',
    },
    {
      id: 'editor',
      name: 'Editor',
      icon: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/c5ac1b27c3924c64cb4127f9b1ec3fe152d72d66?placeholderIfAbsent=true',
    },
    {
      id: 'viewer',
      name: 'Viewer',
      icon: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/7cbe5a7c9021542e80cbf85f7a2599134a5d5ac2?placeholderIfAbsent=true',
    },
  ],
  modules: [
    {
      id: 'user-management',
      name: 'User Management',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'roles-permissions',
      name: 'Roles & Permissions',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'outlets-management',
      name: 'Outlets Management',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'shop',
      name: 'Shop',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'surveys',
      name: 'Surveys',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'events',
      name: 'Events',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'content-management',
      name: 'Content Management',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'audit-logs',
      name: 'Audit Logs',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
    {
      id: 'system-settings',
      name: 'System Settings',
      permissions: {
        admin: { view: true, create: false, edit: false, delete: false },
        manager: { view: true, create: false, edit: false, delete: false },
        editor: { view: true, create: false, edit: false, delete: false },
        viewer: { view: true, create: false, edit: false, delete: false },
      },
    },
  ],
};

export const PermissionsTable: React.FC = () => {
  const [permissionsData, setPermissionsData] = useState<PermissionsData>(initialData);

  const handlePermissionChange = (
    moduleId: string,
    roleId: string,
    permissionType: keyof Permission,
    value: boolean
  ) => {
    setPermissionsData((prevData) => ({
      ...prevData,
      modules: prevData.modules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              permissions: {
                ...module.permissions,
                [roleId]: {
                  ...module.permissions[roleId],
                  [permissionType]: value,
                },
              },
            }
          : module
      ),
    }));
  };

  const handleSavePermissions = () => {
    console.log('Saving permissions:', permissionsData);
    // Here you would typically send the data to your backend
    alert('Permissions saved successfully!');
  };

  const handleResetPermissions = () => {
    setPermissionsData(initialData);
    alert('Permissions reset to default values!');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
  
       
      <div className="bg-white  flex flex-col text-xs text-[rgba(44,42,41,1)] font-normal px-4 md:px-[43px] py-5 overflow-x-auto">
        {permissionsData.modules.map((module, index) => (
          <PermissionRow
            key={module.id}
            module={module}
            roles={permissionsData.roles}
            onPermissionChange={handlePermissionChange}
            isLastRow={index === permissionsData.modules.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
