
"use client";


import { DashboardHeader } from "@/components/dashboard/dashboardheader";
import { ReactNode } from "react";


interface SimpleLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: SimpleLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader/>
   <main className="flex-1">
        {children}
        </main>
  </div>
  );
};

export default DashboardLayout  ;

