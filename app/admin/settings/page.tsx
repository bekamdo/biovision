import Header from '@/components/admin/shared/Header';
import React from 'react'

const SettingsPage = () => {
const menuItems = [
    { title: "Privacy & Display" },
    { title: "Email Notifications" },
    { title: "Blocked Users" },
    { title: "Delete Account" },
  ];
    
  return (
     <div className="flex flex-col items-start gap-[20px] p-4 sm:p-[20px] bg-[#F5F5F5]   min-h-screen w-full max-w-[1277px] mx-auto">
         <Header title="Settings" description="Manage your accounts settings here" />
       


     </div>
  )
}

export default SettingsPage;