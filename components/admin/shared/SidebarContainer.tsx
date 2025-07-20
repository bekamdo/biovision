// app/components/SidebarContainer.tsx

import { Sidebar } from "./SideBar";
import { SidebarToggle } from "./SidebarToggle";

export function SidebarContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white">
      {/* Mobile toggle button + mobile sidebar */}
      <SidebarToggle />

      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Spacer to prevent overlap with mobile toggle */}
        <div className="md:hidden h-16" />
        {children}
      </main>
    </div>
  );
}
