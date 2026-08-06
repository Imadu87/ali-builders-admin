import { motion } from "framer-motion";
import {
    MessageSquare,
    MoreHorizontal,
} from "lucide-react";

const InquiriesChart = () => {

    const inquiries = [
        {
            month: "Jan",
            value: 32,
        },
        {
            month: "Feb",
            value: 45,
        },
        {
            month: "Mar",
            value: 38,
        },
        {
            month: "Apr",
            value: 58,
        },
        {
            month: "May",
            value: 67,
        },
        {
            month: "Jun",
            value: 82,
        },
    ];

    const maxValue = 100;

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
                delay: 0.1,
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
                            bg-blue-50
                            text-blue-600
                        "
                    >
                        <MessageSquare size={20} />
                    </div>

                    <div>

                        <h2 className="font-semibold text-heading">
                            Customer Inquiries
                        </h2>

                        <p className="mt-1 text-xs text-text">
                            Monthly inquiry performance
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


            {/* Summary */}

            <div className="mt-5">

                <div className="flex items-end gap-2">

                    <span className="text-3xl font-bold text-heading">
                        82
                    </span>

                    <span className="mb-1 text-xs font-semibold text-green-600">
                        +18.4%
                    </span>

                </div>

                <p className="mt-1 text-xs text-text">
                    Total inquiries this month
                </p>

            </div>


            {/* Chart */}

            <div className="mt-6">

                <div className="relative h-52">

                    {/* Grid */}

                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            flex-col
                            justify-between
                        "
                    >

                        {[0, 1, 2, 3, 4].map((line) => (
                            <div
                                key={line}
                                className="
                                    w-full
                                    border-t
                                    border-dashed
                                    border-gray-200
                                "
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
                        "
                    >

                        {inquiries.map((item) => (

                            <div
                                key={item.month}
                                className="
                                    group
                                    flex
                                    h-full
                                    flex-1
                                    flex-col
                                    items-center
                                    justify-end
                                "
                            >

                                {/* Value */}

                                <span
                                    className="
                                        mb-2
                                        text-[10px]
                                        font-semibold
                                        text-heading
                                        opacity-0
                                        transition
                                        group-hover:opacity-100
                                    "
                                >
                                    {item.value}
                                </span>


                                {/* Bar */}

                                <motion.div
                                    initial={{
                                        height: 0,
                                    }}
                                    animate={{
                                        height: `${(item.value / maxValue) * 100}%`,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: "easeOut",
                                    }}
                                    className="
                                        w-6
                                        rounded-t-lg
                                        bg-blue-500
                                        transition-opacity
                                        group-hover:opacity-80
                                        sm:w-8
                                    "
                                />

                            </div>

                        ))}

                    </div>

                </div>


                {/* Month Labels */}

                <div
                    className="
                        mt-2
                        flex
                        justify-between
                        text-[11px]
                        text-text
                    "
                >

                    {inquiries.map((item) => (
                        <span
                            key={item.month}
                            className="flex-1 text-center"
                        >
                            {item.month}
                        </span>
                    ))}

                </div>

            </div>

        </motion.div>
    );
};

export default InquiriesChart;