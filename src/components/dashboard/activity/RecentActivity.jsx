import { motion } from "framer-motion";
import {
    MessageSquare,
    Building2,
    FileCheck2,
    FolderPlus,
    MoreHorizontal,
} from "lucide-react";

import ActivityItem from "./ActivityItem";

const RecentActivity = () => {

    const activities = [
        {
            id: 1,
            icon: MessageSquare,
            title: "New inquiry received",
            description:
                "Muhammad Ali submitted a new property inquiry.",
            time: "5 min ago",
            iconClassName:
                "bg-blue-50 text-blue-600",
        },
        {
            id: 2,
            icon: Building2,
            title: "Project updated",
            description:
                "Hayatabad Commercial Plaza project information was updated.",
            time: "32 min ago",
            iconClassName:
                "bg-green-50 text-secondary",
        },
        {
            id: 3,
            icon: FolderPlus,
            title: "New project added",
            description:
                "University Road Residence was added to the project list.",
            time: "1 hour ago",
            iconClassName:
                "bg-purple-50 text-purple-600",
        },
        {
            id: 4,
            icon: FileCheck2,
            title: "File verification completed",
            description:
                "Document #AB-1024 was successfully verified.",
            time: "2 hours ago",
            iconClassName:
                "bg-orange-50 text-orange-600",
        },
    ];

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

            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

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


            {/* Activities */}

            <div className="mt-6">

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


            {/* View All */}

            <button
                type="button"
                className="
                    mt-1
                    w-full
                    rounded-xl
                    border
                    border-border
                    py-2.5
                    text-sm
                    font-semibold
                    text-secondary
                    transition
                    hover:bg-green-50
                "
            >
                View All Activity
            </button>

        </motion.section>
    );
};

export default RecentActivity;