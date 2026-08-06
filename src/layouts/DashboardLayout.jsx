import { Outlet } from "react-router";
import { useState } from "react";

import Sidebar from "../components/dashboard/sidebar/Sidebar";
// import Navbar from "../components/dashboard/Navbar";
import MobileHeader from "../components/dashboard/header/MobileHeader";

const DashboardLayout = () => {

    // Desktop sidebar collapse state
    const [collapsed, setCollapsed] = useState(false);

    // Mobile sidebar open/close state
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f5f7fb]">

            {/* =========================
                Sidebar
            ========================= */}

            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* =========================
                Main Area
            ========================= */}

            <div
                className={`
                    min-h-screen
                    transition-all
                    duration-300
                    lg:ml-72
                    ${collapsed ? "lg:ml-24" : "lg:ml-72"}
                `}
            >

                {/* =========================
                    Desktop Navbar
                ========================= */}
{/* 
                <Navbar
                    collapsed={collapsed}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                /> */}

                {/* =========================
                    Mobile Header
                ========================= */}
                <MobileHeader
                    setSidebarOpen={setSidebarOpen}
                />

                {/* =========================
                    Page Content
                ========================= */}
                <main className="p-4 sm:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;