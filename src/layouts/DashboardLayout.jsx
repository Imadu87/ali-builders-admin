import { Outlet } from "react-router";
import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = () => {
    // Desktop
    const [collapsed, setCollapsed] = useState(false);
    // Mobile
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f5f7fb]">
            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <div
                className={`
                    min-h-screen
                    transition-all
                    duration-300
                    lg:ml-72
                    ${collapsed ? "lg:ml-24" : "lg:ml-72"}
                `}
            >
                <Navbar
                    collapsed={collapsed}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;