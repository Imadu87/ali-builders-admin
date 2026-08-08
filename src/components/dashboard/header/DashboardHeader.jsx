import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const DashboardHeader = ({
    title = "Dashboard Overview",
    description = "Here's what's happening with Ali Builders today.",
    actionLabel = "Add Project",
    onAction,
    showAction = true,
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -15,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
            }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Content */}
            <div>
                <h1 className="text-2xl font-bold text-heading sm:text-3xl">
                    {title}
                </h1>
                <p className="mt-1 text-sm text-text sm:text-base">
                    {description}
                </p>
            </div>

            {/* Action */}
            {showAction && (
                <button
                    type="button"
                    onClick={onAction}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto">
                    <Plus size={18} />

                    {actionLabel}
                </button>
            )}
        </motion.div>
    );
};

export default DashboardHeader;