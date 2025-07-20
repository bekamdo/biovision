// components/admin/shared/SidebarToggle.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MobileSidebar } from "./MobileSidebar";

export function SidebarToggle() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-white rounded-lg border border-line-border shadow-sm"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6 text-text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-text-primary" />
          )}
        </button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Slide-In Sidebar */}
      <div
        className={`md:hidden fixed left-0 top-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileSidebar onClose={() => setSidebarOpen(false)} />
      </div>
    </>
  );
}
