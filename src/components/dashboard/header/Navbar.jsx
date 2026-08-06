import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, ChevronDown, User, Settings, LogOut } from "lucide-react";

import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = ({ collapsed }) => {

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 hidden h-20 border-b border-border bg-white shadow-sm lg:flex lg:items-center lg:justify-between px-6">

      {/* =========================
                Left Side
            ========================= */}
      <div>
        <h1 className="text-xl font-bold text-heading">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-text">
          Welcome back, Admin
        </p>
      </div>

      {/* =========================
                Right Side
            ========================= */}
      <div className="flex items-center gap-4">

        <NotificationDropdown
          open={notificationOpen}
          setOpen={(value) => {
            setNotificationOpen(value);
            if (value) setProfileOpen(false);
          }}
        />

        <div className="h-9 w-px bg-border" />

        <ProfileDropdown
          open={profileOpen}
          setOpen={(value) => {
            setProfileOpen(value);
            if (value) setNotificationOpen(false);
          }}
        />

      </div>
    </header>
  );
};

export default Navbar;