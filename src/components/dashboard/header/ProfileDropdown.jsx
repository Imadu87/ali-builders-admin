import { AnimatePresence, motion } from "framer-motion";
import {
    User,
    Settings,
    LogOut,
    ChevronDown,
} from "lucide-react";

const ProfileDropdown = ({
    open,
    setOpen,
}) => {

    return (
        <div className="relative">

            {/* Profile Button */}

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-2
                    py-1.5
                    transition
                    hover:bg-gray-50
                "
                aria-expanded={open}
            >

                {/* Avatar */}

                <div
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
                    "
                >
                    A
                </div>


                {/* User Info */}

                <div className="hidden text-left xl:block">

                    <p className="text-sm font-semibold text-heading">
                        Admin
                    </p>

                    <p className="text-xs text-text">
                        Administrator
                    </p>

                </div>


                {/* Arrow */}

                <ChevronDown
                    size={17}
                    className={`
                        hidden
                        text-gray-500
                        transition-transform
                        duration-300
                        xl:block
                        ${open ? "rotate-180" : ""}
                    `}
                />

            </button>


            {/* Dropdown */}

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -8,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -8,
                            scale: 0.97,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="
                            absolute
                            right-0
                            top-14
                            z-50
                            w-56
                            overflow-hidden
                            rounded-2xl
                            border
                            border-border
                            bg-white
                            p-2
                            shadow-xl
                        "
                    >

                        {/* Profile */}

                        <button
                            type="button"
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                px-3
                                py-3
                                text-sm
                                text-gray-600
                                transition
                                hover:bg-green-50
                                hover:text-secondary
                            "
                        >
                            <User size={18} />
                            My Profile
                        </button>


                        {/* Settings */}

                        <button
                            type="button"
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                px-3
                                py-3
                                text-sm
                                text-gray-600
                                transition
                                hover:bg-green-50
                                hover:text-secondary
                            "
                        >
                            <Settings size={18} />
                            Settings
                        </button>


                        {/* Divider */}

                        <div className="my-2 border-t border-border" />


                        {/* Logout */}

                        <button
                            type="button"
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                px-3
                                py-3
                                text-sm
                                font-medium
                                text-red-600
                                transition
                                hover:bg-red-50
                            "
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileDropdown;