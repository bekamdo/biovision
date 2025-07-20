import { Bell } from 'lucide-react'
import React from 'react'

const MainNav = () => {
  return (
    <>
            {/* Header */}
        <header className="w-full h-[100px] bg-white flex items-center justify-end px-[100px] py-5 border-b border-app-border">
          <div className="flex items-center gap-[100px]">
            <div className="flex items-center gap-5">
              {/* Notification Bell */}
              <div className="relative">
                <Bell className="w-[18px] h-[21px] text-app-text-secondary" />
                <div className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-app-red rounded-full" />
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-[15px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ac5c870ffada7ce013bbcaefd09dbfe6c978202c?width=120"
                  alt="Profile"
                  className="w-[60px] h-[60px] rounded-full border-[0.5px] border-app-text-secondary"
                />
                <div className="flex flex-col gap-1.5">
                  <div className="text-app-text-secondary text-sm font-medium">
                    Jane Doe
                  </div>
                  <div className="text-app-text-secondary text-xs">Manager</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        </>
  
  )
}

export default MainNav