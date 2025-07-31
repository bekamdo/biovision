import MainNav from "@/components/admin/main-nav";
import { Sidebar } from "@/components/admin/shared/SideBar";
import { SidebarShell } from "@/components/admin/shared/SidebarShell";

import Footer from "@/components/footer";
import { ReactNode } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
 
 
   <>
       
    <SidebarShell>
      {children}
    </SidebarShell> 
    <Footer/>
   </>
   
  
    
  
  )
 
  
 
  
}