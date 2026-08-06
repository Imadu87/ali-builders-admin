import { Outlet } from "react-router";
import { useState } from "react";

import Sidebar from "../components/dashboard/sidebar/Sidebar";
import Navbar from "../components/dashboard/header/Navbar";
import MobileHeader from "../components/dashboard/header/MobileHeader";

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f5f7fb]">

            {/* Sidebar */}
            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Main Area */}
            <div
                className={`
                    min-h-screen
                    transition-all
                    duration-300
                    ease-in-out
                    ${collapsed ? "lg:ml-24" : "lg:ml-[280px]"}
                `}
            >

                {/* Desktop Navbar */}
                <Navbar
                    collapsed={collapsed}
                />

                {/* Mobile Header */}
                <MobileHeader
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Content */}
                <main className="p-4 sm:p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;