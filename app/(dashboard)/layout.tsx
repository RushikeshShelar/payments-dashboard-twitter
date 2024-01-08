import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({
    children,
}: {
    children : React.ReactNode
}) => {
    return ( 
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-[16rem] md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#1e2640]">
                <Sidebar />
            </div>
            <main className="md:pl-[16rem]">
                <Navbar />
                {children}
            </main>
        </div>
     );
}
 
export default DashboardLayout;