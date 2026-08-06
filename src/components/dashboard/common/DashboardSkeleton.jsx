import { motion } from "framer-motion";

const DashboardSkeleton = ({
    type = "card",
    count = 1,
}) => {

    const items = Array.from(
        { length: count },
        (_, index) => index
    );

    /* =========================
       Stat Cards Skeleton
    ========================= */

    if (type === "stats") {
        return (
            <div
                className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >
                {items.map((item) => (
                    <div
                        key={item}
                        className="
                            rounded-2xl
                            border
                            border-border
                            bg-white
                            p-5
                            shadow-sm
                        "
                    >
                        <div className="flex items-center justify-between">

                            <div className="space-y-3">

                                <div
                                    className="
                                        h-3
                                        w-24
                                        animate-pulse
                                        rounded
                                        bg-gray-200
                                    "
                                />

                                <div
                                    className="
                                        h-7
                                        w-16
                                        animate-pulse
                                        rounded
                                        bg-gray-200
                                    "
                                />

                            </div>

                            <div
                                className="
                                    h-11
                                    w-11
                                    animate-pulse
                                    rounded-xl
                                    bg-gray-200
                                "
                            />

                        </div>
                    </div>
                ))}
            </div>
        );
    }


    /* =========================
       Project Cards Skeleton
    ========================= */

    if (type === "projects") {
        return (
            <div
                className="
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {items.map((item) => (
                    <div
                        key={item}
                        className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-border
                            bg-white
                            shadow-sm
                        "
                    >

                        {/* Image */}

                        <div
                            className="
                                h-48
                                animate-pulse
                                bg-gray-200
                            "
                        />

                        {/* Content */}

                        <div className="space-y-4 p-5">

                            <div
                                className="
                                    h-5
                                    w-3/4
                                    animate-pulse
                                    rounded
                                    bg-gray-200
                                "
                            />

                            <div
                                className="
                                    h-3
                                    w-full
                                    animate-pulse
                                    rounded
                                    bg-gray-200
                                "
                            />

                            <div
                                className="
                                    h-3
                                    w-2/3
                                    animate-pulse
                                    rounded
                                    bg-gray-200
                                "
                            />

                            <div className="flex justify-between">

                                <div
                                    className="
                                        h-8
                                        w-20
                                        animate-pulse
                                        rounded-lg
                                        bg-gray-200
                                    "
                                />

                                <div
                                    className="
                                        h-8
                                        w-20
                                        animate-pulse
                                        rounded-lg
                                        bg-gray-200
                                    "
                                />

                            </div>

                        </div>

                    </div>
                ))}
            </div>
        );
    }


    /* =========================
       Activity Skeleton
    ========================= */

    if (type === "activity") {
        return (
            <div className="space-y-6">

                {items.map((item) => (
                    <div
                        key={item}
                        className="flex gap-4"
                    >

                        <div
                            className="
                                h-10
                                w-10
                                shrink-0
                                animate-pulse
                                rounded-xl
                                bg-gray-200
                            "
                        />

                        <div className="flex-1 space-y-3">

                            <div
                                className="
                                    h-4
                                    w-2/3
                                    animate-pulse
                                    rounded
                                    bg-gray-200
                                "
                            />

                            <div
                                className="
                                    h-3
                                    w-full
                                    animate-pulse
                                    rounded
                                    bg-gray-200
                                "
                            />

                            <div
                                className="
                                    h-3
                                    w-20
                                    animate-pulse
                                    rounded
                                    bg-gray-200
                                "
                            />

                        </div>

                    </div>
                ))}

            </div>
        );
    }


    /* =========================
       Default Card Skeleton
    ========================= */

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
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

            <div
                className="
                    h-5
                    w-40
                    animate-pulse
                    rounded
                    bg-gray-200
                "
            />

            <div
                className="
                    mt-4
                    h-3
                    w-3/4
                    animate-pulse
                    rounded
                    bg-gray-200
                "
            />

            <div
                className="
                    mt-3
                    h-3
                    w-1/2
                    animate-pulse
                    rounded
                    bg-gray-200
                "
            />

            <div
                className="
                    mt-6
                    h-32
                    animate-pulse
                    rounded-xl
                    bg-gray-200
                "
            />

        </motion.div>
    );
};

export default DashboardSkeleton;