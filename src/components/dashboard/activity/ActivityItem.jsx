import { motion } from "framer-motion";

const ActivityItem = ({
    icon: Icon,
    title,
    description,
    time,
    iconClassName = "bg-green-50 text-secondary",
    isLast = false,
}) => {

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -10,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.3,
            }}
            className="relative flex gap-4"
        >

            {/* Timeline */}

            {!isLast && (
                <div
                    className="
                        absolute
                        left-5
                        top-11
                        h-[calc(100%+8px)]
                        w-px
                        bg-gray-200
                    "
                />
            )}


            {/* Icon */}

            <div
                className={`
                    relative
                    z-10
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${iconClassName}
                `}
            >
                <Icon size={18} />
            </div>


            {/* Content */}

            <div className="min-w-0 flex-1 pb-6">
                <div
                    className="
                        flex
                        flex-col
                        gap-1
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <h3 className="text-sm font-semibold text-heading">
                        {title}
                    </h3>

                    <span className="text-xs text-text">
                        {time}
                    </span>
                </div>

                <p className="mt-1 text-sm leading-6 text-text">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ActivityItem;