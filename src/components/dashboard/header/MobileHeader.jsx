import { Menu, Bell } from "lucide-react";

const MobileHeader = ({ setSidebarOpen }) => {
    return (
        <header
            className="
                sticky
                top-0
                z-30
                flex
                h-16
                items-center
                justify-between
                border-b
                border-border
                bg-white
                px-4
                shadow-sm
                lg:hidden
            "
        >

            {/* Left Side */}
            <div className="flex items-center gap-3">

                {/* Hamburger */}
                <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        text-gray-600
                        transition-all
                        duration-300
                        hover:bg-green-50
                        hover:text-secondary
                    "
                    aria-label="Open sidebar"
                >
                    <Menu size={23} />
                </button>

                {/* Page / Brand */}
                <div>
                    <h1 className="text-base font-bold text-heading">
                        Ali Builders
                    </h1>

                    <p className="text-xs text-text">
                        Admin Panel
                    </p>
                </div>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">

                {/* Notifications */}
                <button
                    type="button"
                    className="
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        text-gray-600
                        transition-all
                        duration-300
                        hover:bg-green-50
                        hover:text-secondary
                    "
                    aria-label="Notifications"
                >
                    <Bell size={21} />

                    {/* Notification Badge */}
                    <span
                        className="
                            absolute
                            right-1.5
                            top-1.5
                            h-2
                            w-2
                            rounded-full
                            bg-red-500
                        "
                    />
                </button>

                {/* Profile */}
                <button
                    type="button"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-secondary
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                    aria-label="Admin profile"
                >
                    A
                </button>
            </div>
        </header>
    );
};

export default MobileHeader;