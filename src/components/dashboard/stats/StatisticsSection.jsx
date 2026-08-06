import { motion } from "framer-motion";

import StatCard from "./StatCard";

import DashboardSkeleton from "../common/DashboardSkeleton";
import DashboardError from "../common/DashboardError";


const StatisticsSection = ({
    stats = [],
    loading = false,
    error = false,
    onRetry,
}) => {

    return (
        <>
            {/* =========================
                Loading
            ========================= */}

            {loading ? (
                <DashboardSkeleton
                    type="stats"
                    count={4}
                />
            ) : error ? (
                /* =========================
                    Error
                ========================= */
                <DashboardError
                    title="Statistics couldn't load"
                    description="We couldn't load your dashboard statistics. Please try again."
                    onRetry={onRetry}
                />
            ) : (
                /* =========================
                    Statistics
                ========================= */
                <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.4,
                            }}
                        >
                            <StatCard {...stat} />
                        </motion.div>
                    ))}
                </section>
            )}
        </>
    );
};

export default StatisticsSection;