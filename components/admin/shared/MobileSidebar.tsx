"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Search,
  Grid3X3,
  User,
  Menu,
  ShoppingCart,
  Store,
  FileText,
  Calendar,
  Newspaper,
  Settings,
  Server,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: Grid3X3, isActive: true },
  { name: "User Management", href: "/users", icon: User },
  { name: "Content Management", href: "/content", icon: Menu },
  { name: "Shop", href: "/shop", icon: ShoppingCart },
  { name: "Outlet Management", href: "/outlets", icon: Store },
  { name: "Survey Builder", href: "/surveys", icon: FileText },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Newsletter", href: "/newsletter", icon: Newspaper },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Audit Logs & Security", href: "/audit", icon: Server },
];

interface MobileSidebarProps {
  onClose: () => void;
}

export function MobileSidebar({ onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${isCollapsed ? "w-20" : "w-[303px]"} h-screen border-r border-line-border bg-white flex flex-col relative transition-all duration-300 ease-in-out overflow-y-auto`}
    >
      {/* Logo */}
      <div
        className={`pt-8 pb-6 px-6 flex justify-center ${isCollapsed ? "px-2" : ""}`}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d2f677a766ed6af023da94e48e832c1d54358e5b?width=338"
          alt="Biovision Africa Trust"
          className={`object-contain transition-all duration-300 ${
            isCollapsed ? "h-[60px] w-[50px]" : "h-[100px] w-[169px]"
          }`}
        />
      </div>

      {/* Search Bar */}
      {!isCollapsed && (
        <div className="px-6 mb-6">
          <div className="w-full border-b border-line-light"></div>
          <div className="mt-6 relative">
            <div className="flex items-center bg-surface-light rounded-xl p-2">
              <Search className="w-6 h-6 text-text-primary absolute left-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent pl-10 pr-4 py-2 text-sm font-helvetica text-text-secondary placeholder-text-secondary focus:outline-none w-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className={`flex-1 ${isCollapsed ? "px-2" : "px-[18px]"}`}>
        <div className="flex flex-col space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                title={isCollapsed ? item.name : undefined}
                className={`flex items-center ${isCollapsed ? "justify-center px-3 py-3" : "gap-3 px-4 py-3"} rounded-xl text-sm font-helvetica transition-colors ${
                  isActive
                    ? "bg-surface-light border border-line-border text-green-primary font-bold"
                    : "text-text-primary hover:bg-surface-light"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-green-primary" : "text-text-primary"
                  }`}
                />
                {!isCollapsed && <span className="leading-5">{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Collapse Menu */}
      <div className={`${isCollapsed ? "px-2" : "px-8"} py-3`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`flex items-center ${isCollapsed ? "justify-center px-3 py-2" : "gap-3"} text-text-primary text-sm font-helvetica hover:bg-surface-light rounded-xl transition-colors w-full`}
          title={
            isCollapsed
              ? isCollapsed
                ? "Expand menu"
                : "Collapse menu"
              : undefined
          }
        >
          {isCollapsed ? (
            <ChevronRight className="w-6 h-6" />
          ) : (
            <>
              <ChevronLeft className="w-6 h-6" />
              <span>Collapse menu</span>
            </>
          )}
        </button>
      </div>

      {/* User Profile Section */}
      <div className="px-2 pb-6">
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3bfefc27eb1c98022943ecde739ce71413715502?width=64"
                alt="Gustavo Xavier"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="flex items-center justify-center p-2 text-red-logout rounded-xl hover:bg-surface-light transition-colors"
              title="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3bfefc27eb1c98022943ecde739ce71413715502?width=64"
                  alt="Gustavo Xavier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-inter text-black-text leading-5 tracking-[-0.25px]">
                  Gustavo Xavier
                </div>
                <div className="inline-flex items-center justify-center px-1.5 py-0 bg-orange-tag rounded-full">
                  <span className="text-[10px] font-inter text-black-text leading-4 tracking-[-0.5px]">
                    Admin
                  </span>
                </div>
              </div>
            </div>

            {/* Logout */}
            <div className="px-5">
              <button className="flex items-center gap-3 text-red-logout text-sm font-inter leading-5 tracking-[-0.25px] hover:bg-surface-light rounded-xl p-2 transition-colors w-full">
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
