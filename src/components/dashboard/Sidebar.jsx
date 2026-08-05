import { motion } from "framer-motion";
import {
    X,
    PanelLeftClose,
    PanelLeftOpen,
    LogOut,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import { sidebarMenu } from "./sidebarMenu";

const Sidebar = ({
    collapsed,
    setCollapsed,
    sidebarOpen,
    setSidebarOpen,
}) => {

    const SidebarContent = () => (
        <>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-5">
                <div className="flex items-center gap-3">

                    {/* Temporary Logo */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-lg font-bold text-white">
                        A
                    </div>

                    {!collapsed && (
                        <div>
                            <h2 className="text-lg font-bold text-heading">
                                Ali Builders
                            </h2>
                            <p className="text-xs text-text">
                                Admin Panel
                            </p>
                        </div>
                    )}
                </div>

                {/* Desktop Collapse */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="hidden rounded-lg p-2 transition hover:bg-gray-100 lg:block"
                >
                    {collapsed ? (
                        <PanelLeftOpen size={20} />
                    ) : (
                        <PanelLeftClose size={20} />
                    )}
                </button>
                {/* Mobile Close */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Menu */}
            <nav className="flex-1 space-y-2 overflow-y-auto p-4">
                {sidebarMenu.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-border p-4">
                <button
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-semibold text-red-600 transition-all duration-300 hover:bg-red-100">
                    <LogOut size={18} />
                    {!collapsed && "Logout"}
                </button>
            </div>
        </>
    );

    return (
        <>
            {/* Overlay */}
            {sidebarOpen && (
                <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" />
            )}

            {/* Desktop */}

            <motion.aside
                animate={{
                    width: collapsed ? 96 : 280,
                }}
                transition={{
                    duration: .3,
                }}
                className="fixed left-0 top-0 z-40 hidden h-screen flex-col border-r border-border  bg-white shadow-lg lg:flex">
                <SidebarContent />
            </motion.aside>

            {/* Mobile */}

            <motion.aside
                initial={false}
                animate={{
                    x: sidebarOpen ? 0 : -320,
                }}
                transition={{
                    duration: .3,
                }}
                className=" fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-border bg-white shadow-2xl lg:hidden">
                <SidebarContent />
            </motion.aside>
        </>
    );
};

export default Sidebar;