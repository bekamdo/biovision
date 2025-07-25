// components/admin/shared/SidebarShell.tsx
import { Sidebar } from "./SideBar";
import { SidebarToggle } from "./SidebarToggle";
import MainNav from "@/components/admin/main-nav";
import Footer from "@/components/footer";

export function SidebarShell({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="min-h-screen bg-app-bg font-helvetica flex">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex-col">
        {/* Mobile Sidebar Toggle */}
        <SidebarToggle />

        {/* Header */}
        <MainNav />

        {/* Page content */}
        {/* <main className="w-full max-w-[1277px] mx-auto px-5 py-5 flex flex-col gap-5"> */}
          {children}
        {/* </main>
    */}
      </div>
     
       
    </div>
    </>
    
  );
}
