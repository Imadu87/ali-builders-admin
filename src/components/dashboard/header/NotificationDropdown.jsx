import { AnimatePresence, motion } from "framer-motion";
import {
    Bell,
    User,
    Settings,
} from "lucide-react";

const NotificationDropdown = ({
    open,
    setOpen,
}) => {

    const notifications = [
        {
            id: 1,
            title: "New inquiry received",
            description:
                "A new customer submitted an inquiry.",
            time: "10 minutes ago",
            icon: User,
            iconClass:
                "bg-green-50 text-secondary",
        },
        {
            id: 2,
            title: "System update",
            description:
                "Dashboard settings were updated.",
            time: "1 hour ago",
            icon: Settings,
            iconClass:
                "bg-blue-50 text-blue-600",
        },
    ];

    return (
        <div className="relative">

            {/* Notification Button */}

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    text-gray-600
                    transition-all
                    duration-300
                    hover:bg-green-50
                    hover:text-secondary
                "
                aria-label="Notifications"
                aria-expanded={open}
            >

                <Bell size={21} />

                {/* Badge */}

                <span
                    className="
                        absolute
                        right-2
                        top-2
                        h-2
                        w-2
                        rounded-full
                        bg-red-500
                    "
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
                            w-[calc(100vw-2rem)]
                            max-w-80
                            overflow-hidden
                            rounded-2xl
                            border
                            border-border
                            bg-white
                            shadow-xl
                        "
                    >

                        {/* Header */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-border
                                px-5
                                py-4
                            "
                        >

                            <h3 className="font-semibold text-heading">
                                Notifications
                            </h3>

                            <span
                                className="
                                    rounded-full
                                    bg-green-50
                                    px-2
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-secondary
                                "
                            >
                                {notifications.length} New
                            </span>

                        </div>


                        {/* Notifications */}

                        <div className="max-h-80 overflow-y-auto">

                            {notifications.map((notification) => {

                                const Icon = notification.icon;

                                return (
                                    <button
                                        key={notification.id}
                                        type="button"
                                        className="
                                            flex
                                            w-full
                                            gap-3
                                            border-b
                                            border-border
                                            px-5
                                            py-4
                                            text-left
                                            transition
                                            hover:bg-gray-50
                                        "
                                    >

                                        <div
                                            className={`
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                ${notification.iconClass}
                                            `}
                                        >
                                            <Icon size={17} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-heading">
                                                {notification.title}
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-text">
                                                {notification.description}
                                            </p>

                                            <span className="mt-2 block text-xs text-gray-400">
                                                {notification.time}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}

                        </div>


                        {/* Footer */}

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="
                                w-full
                                border-t
                                border-border
                                py-3
                                text-sm
                                font-semibold
                                text-secondary
                                transition
                                hover:bg-green-50
                            "
                        >
                            View all notifications
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationDropdown;