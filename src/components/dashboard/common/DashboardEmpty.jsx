import { motion } from "framer-motion";
import {
    Inbox,
    Plus,
} from "lucide-react";

const DashboardEmpty = ({
    title = "No Data Found",
    description = "There is no data available at the moment.",
    actionLabel,
    onAction,
}) => {

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 10,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            className="
                flex
                min-h-55
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-border
                bg-white
                p-6
                text-center
            "
        >

            {/* Icon */}

            <div
                className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-50
                    text-secondary
                "
            >
                <Inbox size={26} />
            </div>


            {/* Title */}

            <h3
                className="
                    mt-4
                    text-base
                    font-semibold
                    text-heading
                "
            >
                {title}
            </h3>


            {/* Description */}

            <p
                className="
                    mt-2
                    max-w-sm
                    text-sm
                    leading-6
                    text-text
                "
            >
                {description}
            </p>


            {/* Optional Action */}

            {actionLabel && onAction && (
                <button
                    type="button"
                    onClick={onAction}
                    className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-secondary
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:opacity-90
                    "
                >
                    <Plus size={17} />
                    {actionLabel}
                </button>
            )}

        </motion.div>
    );
};

export default DashboardEmpty;