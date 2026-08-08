import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";

import ActivityItem from "./ActivityItem";

import DashboardSkeleton from "../common/DashboardSkeleton";
import DashboardEmpty from "../common/DashboardEmpty";
import DashboardError from "../common/DashboardError";

const RecentActivity = ({
    activities = [],
    loading = false,
    error = false,
    onRetry,
    onViewAll,
}) => {
    return (
        <motion.section
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
            {/* =========================
                Header
            ========================= */}

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-heading">
                        Recent Activity
                    </h2>
                    <p className="mt-1 text-xs text-text">
                        Latest activity across your admin panel
                    </p>
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
                    aria-label="Activity options"
                >
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* =========================
                Content
            ========================= */}
            <div className="mt-6">
                {/* Loading */}
                {loading ? (
                    <DashboardSkeleton
                        type="activity"
                        count={4}
                    />
                ) : error ? (
                    /* Error */
                    <DashboardError
                        title="Activity couldn't load"
                        description="We couldn't load recent activity right now. Please try again."
                        onRetry={onRetry}
                    />
                ) : activities.length === 0 ? (
                    /* Empty */
                    <DashboardEmpty
                        title="No Recent Activity"
                        description="There hasn't been any recent activity yet."
                    />
                ) : (
                    /* Activities */
                    <div>
                        {activities.map((activity, index) => (
                            <ActivityItem
                                key={activity.id}
                                icon={activity.icon}
                                title={activity.title}
                                description={activity.description}
                                time={activity.time}
                                iconClassName={activity.iconClassName}
                                isLast={
                                    index === activities.length - 1
                                }
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* =========================
                View All
            ========================= */}
            {!loading &&
                !error &&
                activities.length > 0 && (
                    <button
                        type="button"
                        onClick={onViewAll}
                        className="mt-5 w-full rounded-xl border border-border py-2.5 text-sm font-semibold text-secondary transition hover:bg-green-50">
                        View All Activity
                    </button>
                )}
        </motion.section>
    );
};

export default RecentActivity;