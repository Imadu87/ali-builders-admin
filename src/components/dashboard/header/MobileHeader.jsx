import { Menu, Bell } from "lucide-react";

import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import { useState } from "react";

const MobileHeader = ({ setSidebarOpen }) => {
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
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
                <NotificationDropdown
                    open={notificationOpen}
                    setOpen={(value) => {
                        setNotificationOpen(value);
                        if (value) {
                            setProfileOpen(false);
                        }
                    }}
                />

                <ProfileDropdown
                    open={profileOpen}
                    setOpen={(value) => {
                        setProfileOpen(value);
                        if (value) {
                            setNotificationOpen(false);
                        }
                    }}
                />

            </div>
        </header>
    );
};

export default MobileHeader;