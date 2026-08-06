import { motion } from "framer-motion";

const StatCard = ({
    title,
    value,
    icon: Icon,
    description,
    iconClass = "bg-green-50 text-secondary",
    trend,
    trendType = "positive",
}) => {

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
            }}
            whileHover={{
                y: -4,
            }}
            className="
                rounded-2xl
                border
                border-border
                bg-white
                p-5
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-lg
            "
        >

            {/* Top */}

            <div className="flex items-start justify-between gap-4">

                <div>
                    <p className="text-sm font-medium text-text">
                        {title}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-heading sm:text-3xl">
                        {value}
                    </h2>
                </div>

                {/* Icon */}
                <div
                    className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ${iconClass}
                    `}
                >
                    <Icon size={23} />
                </div>
            </div>


            {/* Bottom */}

            <div className="mt-5 flex flex-wrap items-center gap-2">
                {trend && (
                    <span
                        className={`
                            rounded-full
                            px-2
                            py-1
                            text-xs
                            font-semibold
                            ${
                                trendType === "positive"
                                    ? "bg-green-50 text-green-600"
                                    : "bg-red-50 text-red-600"
                            }
                        `}
                    >
                        {trend}
                    </span>
                )}

                {description && (
                    <span className="text-xs text-text">
                        {description}
                    </span>
                )}

            </div>
        </motion.div>
    );
};

export default StatCard;