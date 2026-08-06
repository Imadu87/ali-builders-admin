import { motion } from "framer-motion";
import {
    AlertTriangle,
    RefreshCcw,
} from "lucide-react";

const DashboardError = ({
    title = "Something went wrong",
    description = "We couldn't load this information. Please try again.",
    onRetry,
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
                border-red-100
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
                    bg-red-50
                    text-red-600
                "
            >
                <AlertTriangle size={26} />
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


            {/* Retry */}

            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-border
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-heading
                        transition
                        hover:bg-gray-50
                    "
                >
                    <RefreshCcw size={17} />
                    Try Again
                </button>
            )}

        </motion.div>
    );
};

export default DashboardError;