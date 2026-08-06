import { motion } from "framer-motion";
import {
    MapPin,
    CalendarDays,
    ArrowUpRight,
} from "lucide-react";

const ProjectCard = ({
    title,
    location,
    image,
    status,
    year,
    category,
}) => {

    const statusStyles = {
        Completed: "bg-green-50 text-green-600",
        "In Progress": "bg-blue-50 text-blue-600",
        Planning: "bg-orange-50 text-orange-600",
    };

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
            whileHover={{
                y: -5,
            }}
            transition={{
                duration: 0.35,
            }}
            className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-white
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-xl
            "
        >

            {/* Project Image */}

            <div className="relative h-48 overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                {/* Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                    "
                />

                {/* Status */}

                <span
                    className={`
                        absolute
                        left-4
                        top-4
                        rounded-full
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        shadow-sm
                        ${
                            statusStyles[status] ||
                            "bg-gray-100 text-gray-600"
                        }
                    `}
                >
                    {status}
                </span>

                {/* Category */}

                {category && (
                    <span
                        className="
                            absolute
                            bottom-4
                            left-4
                            rounded-full
                            bg-white/90
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-heading
                            backdrop-blur-sm
                        "
                    >
                        {category}
                    </span>
                )}

            </div>


            {/* Content */}

            <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                        <h3
                            className="
                                truncate
                                text-base
                                font-bold
                                text-heading
                            "
                        >
                            {title}
                        </h3>

                        <div
                            className="
                                mt-2
                                flex
                                items-center
                                gap-1.5
                                text-sm
                                text-text
                            "
                        >
                            <MapPin
                                size={15}
                                className="shrink-0"
                            />

                            <span className="truncate">
                                {location}
                            </span>
                        </div>
                    </div>


                    {/* View Button */}

                    <button
                        type="button"
                        aria-label={`View ${title}`}
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-gray-50
                            text-gray-600
                            transition-all
                            duration-300
                            hover:bg-secondary
                            hover:text-white
                        "
                    >
                        <ArrowUpRight size={17} />
                    </button>

                </div>


                {/* Footer */}

                <div
                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        border-border
                        pt-4
                    "
                >

                    <div className="flex items-center gap-2">
                        <CalendarDays
                            size={15}
                            className="text-text"
                        />
                        <span className="text-xs text-text">
                            {year}
                        </span>
                    </div>

                    <span
                        className="
                            text-xs
                            font-semibold
                            text-secondary
                        "
                    >
                        View Details
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;