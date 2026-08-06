import { motion } from "framer-motion";
import {
    BarChart3,
    MoreHorizontal,
} from "lucide-react";

const ProjectsOverviewChart = () => {

    const projects = [
        {
            month: "Jan",
            completed: 4,
            ongoing: 3,
        },
        {
            month: "Feb",
            completed: 5,
            ongoing: 4,
        },
        {
            month: "Mar",
            completed: 3,
            ongoing: 6,
        },
        {
            month: "Apr",
            completed: 6,
            ongoing: 5,
        },
        {
            month: "May",
            completed: 7,
            ongoing: 4,
        },
        {
            month: "Jun",
            completed: 8,
            ongoing: 6,
        },
    ];

    const maxValue = 10;

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
            className="
                rounded-2xl
                border
                border-border
                bg-white
                p-5
                shadow-sm
            "
        >

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-green-50
                            text-secondary
                        "
                    >
                        <BarChart3 size={20} />
                    </div>

                    <div>

                        <h2 className="font-semibold text-heading">
                            Projects Overview
                        </h2>

                        <p className="mt-1 text-xs text-text">
                            Project activity over the last 6 months
                        </p>

                    </div>

                </div>

                <button
                    type="button"
                    className="
                        rounded-lg
                        p-2
                        text-gray-500
                        transition
                        hover:bg-gray-100
                    "
                    aria-label="More options"
                >
                    <MoreHorizontal size={20} />
                </button>

            </div>


            {/* Legend */}

            <div className="mt-5 flex items-center gap-5">

                <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-secondary" />

                    <span className="text-xs text-text">
                        Completed
                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

                    <span className="text-xs text-text">
                        In Progress
                    </span>

                </div>

            </div>


            {/* Chart */}

            <div className="mt-6">

                <div
                    className="
                        flex
                        h-64
                        gap-4
                    "
                >

                    {/* Y Axis */}

                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            pb-7
                            text-[11px]
                            text-text
                        "
                    >
                        <span>10</span>
                        <span>8</span>
                        <span>6</span>
                        <span>4</span>
                        <span>2</span>
                        <span>0</span>
                    </div>


                    {/* Chart Area */}

                    <div className="relative flex-1">

                        {/* Grid Lines */}

                        <div
                            className="
                                absolute
                                inset-x-0
                                top-0
                                h-[calc(100%-28px)]
                            "
                        >

                            {[0, 1, 2, 3, 4].map((line) => (
                                <span
                                    key={line}
                                    className="
                                        absolute
                                        left-0
                                        right-0
                                        border-t
                                        border-dashed
                                        border-gray-200
                                    "
                                    style={{
                                        top: `${line * 25}%`,
                                    }}
                                />
                            ))}

                        </div>


                        {/* Bars */}

                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-end
                                justify-between
                                gap-2
                                pb-7
                            "
                        >

                            {projects.map((item) => (

                                <div
                                    key={item.month}
                                    className="
                                        flex
                                        h-full
                                        flex-1
                                        items-end
                                        justify-center
                                        gap-1.5
                                    "
                                >

                                    {/* Completed */}

                                    <motion.div
                                        initial={{
                                            height: 0,
                                        }}
                                        animate={{
                                            height: `${(item.completed / maxValue) * 100}%`,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                        className="
                                            w-3
                                            max-w-[18px]
                                            rounded-t-md
                                            bg-secondary
                                            sm:w-5
                                        "
                                        title={`Completed: ${item.completed}`}
                                    />


                                    {/* Ongoing */}

                                    <motion.div
                                        initial={{
                                            height: 0,
                                        }}
                                        animate={{
                                            height: `${(item.ongoing / maxValue) * 100}%`,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.1,
                                        }}
                                        className="
                                            w-3
                                            max-w-[18px]
                                            rounded-t-md
                                            bg-blue-500
                                            sm:w-5
                                        "
                                        title={`In Progress: ${item.ongoing}`}
                                    />

                                </div>

                            ))}

                        </div>


                        {/* X Axis Labels */}

                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                right-0
                                flex
                                justify-between
                                text-[11px]
                                text-text
                            "
                        >

                            {projects.map((item) => (
                                <span
                                    key={item.month}
                                    className="flex-1 text-center"
                                >
                                    {item.month}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsOverviewChart;