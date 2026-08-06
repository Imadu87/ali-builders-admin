import { motion } from "framer-motion";
import {
    Building2,
    FolderKanban,
    MessageSquare,
    Users,
    Plus,
    ArrowRight,
    Clock3,
} from "lucide-react";

import StatCard from "../../components/dashboard/cards/StatCard";
import ProjectCard from "../../components/dashboard/cards/ProjectCard";

import project1 from "../../assets/images/projects/project1/project1.1.jfif"
import project2 from "../../assets/images/projects/project1/project1.2.jfif"
import project3 from "../../assets/images/projects/project1/project1.3.jfif"

const DashboardHome = () => {

    /* =========================
       Statistics
    ========================= */

    const stats = [
        {
            title: "Total Projects",
            value: "24",
            icon: Building2,
            trend: "+12%",
            description: "from last month",
            iconClass: "bg-green-50 text-secondary",
        },
        {
            title: "Active Projects",
            value: "12",
            icon: FolderKanban,
            trend: "+8%",
            description: "from last month",
            iconClass: "bg-blue-50 text-blue-600",
        },
        {
            title: "Total Inquiries",
            value: "86",
            icon: MessageSquare,
            trend: "+18%",
            description: "from last month",
            iconClass: "bg-purple-50 text-purple-600",
        },
        {
            title: "Team Members",
            value: "18",
            icon: Users,
            trend: "+2",
            description: "new this month",
            iconClass: "bg-orange-50 text-orange-600",
        },
    ];


    /* =========================
       Recent Inquiries
    ========================= */

    const recentInquiries = [
        {
            id: 1,
            name: "Muhammad Ahmed",
            email: "ahmed@example.com",
            subject: "House Project Inquiry",
            time: "10 minutes ago",
            status: "New",
        },
        {
            id: 2,
            name: "Hassan Khan",
            email: "hassan@example.com",
            subject: "Commercial Project",
            time: "35 minutes ago",
            status: "Pending",
        },
        {
            id: 3,
            name: "Usman Ali",
            email: "usman@example.com",
            subject: "Property Consultation",
            time: "1 hour ago",
            status: "New",
        },
        {
            id: 4,
            name: "Bilal Shah",
            email: "bilal@example.com",
            subject: "Project Details",
            time: "2 hours ago",
            status: "Resolved",
        },
    ];


    /* =========================
       Recent Projects
    ========================= */

    const recentProjects = [
        {
            id: 1,
            title: "Green Valley Housing",
            location: "Peshawar",
            image: project1,
            status: "Completed",
            year: "2025",
            category: "Residential",
        },
        {
            id: 2,
            title: "Ali Heights",
            location: "Islamabad",
            image: project2,
            status: "In Progress",
            year: "2026",
            category: "Commercial",
        },
        {
            id: 3,
            title: "Modern Villas",
            location: "Hayatabad",
            image: project3,
            status: "Planning",
            year: "2026",
            category: "Residential",
        },
    ];


    return (
        <div className="space-y-6">

            {/* =========================
                Welcome Header
            ========================= */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: -15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                }}
                className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >

                <div>

                    <h1 className="text-2xl font-bold text-heading sm:text-3xl">
                        Dashboard Overview
                    </h1>

                    <p className="mt-1 text-sm text-text sm:text-base">
                        Here's what's happening with Ali Builders today.
                    </p>

                </div>


                <button
                    type="button"
                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-secondary
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-lg
                        sm:w-auto
                    "
                >
                    <Plus size={18} />
                    Add Project
                </button>

            </motion.div>


            {/* =========================
                Statistics
            ========================= */}

            <div
                className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >

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

            </div>


            {/* =========================
                Recent Inquiries
                + Quick Actions
            ========================= */}

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* Recent Inquiries */}

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
                        delay: 0.35,
                        duration: 0.4,
                    }}
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border
                        bg-white
                        shadow-sm
                        xl:col-span-2
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-border
                            px-5
                            py-4
                        "
                    >

                        <div>
                            <h2 className="font-semibold text-heading">
                                Recent Inquiries
                            </h2>

                            <p className="mt-1 text-xs text-text">
                                Latest customer inquiries
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-1
                                text-sm
                                font-semibold
                                text-secondary
                                hover:underline
                            "
                        >
                            View All
                            <ArrowRight size={15} />
                        </button>
                    </div>


                    <div className="divide-y divide-border">
                        {recentInquiries.map((inquiry) => (

                            <div
                                key={inquiry.id}
                                className="
                                    flex
                                    flex-col
                                    gap-3
                                    px-5
                                    py-4
                                    transition
                                    hover:bg-gray-50
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                "
                            >

                                <div className="flex min-w-0 items-center gap-3">
                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-green-50
                                            text-sm
                                            font-bold
                                            text-secondary
                                        "
                                    >
                                        {inquiry.name.charAt(0)}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-heading">
                                            {inquiry.name}
                                        </p>
                                        <p className="truncate text-xs text-text">
                                            {inquiry.subject}
                                        </p>
                                    </div>
                                </div>


                                <div className="flex items-center justify-between gap-4 sm:justify-end">
                                    <span
                                        className={`
                                            rounded-full
                                            px-2.5
                                            py-1
                                            text-xs
                                            font-semibold
                                            ${
                                                inquiry.status === "New"
                                                    ? "bg-green-50 text-green-600"
                                                    : inquiry.status === "Pending"
                                                    ? "bg-orange-50 text-orange-600"
                                                    : "bg-gray-100 text-gray-600"
                                            }
                                        `}
                                    >
                                        {inquiry.status}
                                    </span>

                                    <div className="flex items-center gap-1 text-xs text-text">
                                        <Clock3 size={13} />
                                        {inquiry.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>


                {/* Quick Actions */}

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
                        delay: 0.4,
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

                    <div>
                        <h2 className="font-semibold text-heading">
                            Quick Actions
                        </h2>
                        <p className="mt-1 text-xs text-text">
                            Frequently used actions
                        </p>
                    </div>


                    <div className="mt-5 space-y-3">
                        <button
                            type="button"
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-border
                                p-3
                                text-left
                                transition-all
                                duration-300
                                hover:border-secondary
                                hover:bg-green-50
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-green-50
                                    text-secondary
                                "
                            >
                                <Plus size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-heading">
                                    Add New Project
                                </p>
                                <p className="text-xs text-text">
                                    Create a new project
                                </p>
                            </div>
                        </button>


                        <button
                            type="button"
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-border
                                p-3
                                text-left
                                transition-all
                                duration-300
                                hover:border-secondary
                                hover:bg-green-50
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-blue-50
                                    text-blue-600
                                "
                            >
                                <MessageSquare size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-heading">
                                    View Inquiries
                                </p>
                                <p className="text-xs text-text">
                                    Check customer messages
                                </p>
                            </div>
                        </button>

                        <button
                            type="button"
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-border
                                p-3
                                text-left
                                transition-all
                                duration-300
                                hover:border-secondary
                                hover:bg-green-50
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-purple-50
                                    text-purple-600
                                "
                            >
                                <Users size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-heading">
                                    Manage Team
                                </p>
                                <p className="text-xs text-text">
                                    View team members
                                </p>
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>


            {/* =========================
                Recent Projects
            ========================= */}

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
                    delay: 0.45,
                    duration: 0.4,
                }}
            >

                {/* Section Header */}

                <div
                    className="
                        mb-4
                        flex
                        flex-col
                        gap-2
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <div>

                        <h2 className="text-lg font-bold text-heading">
                            Recent Projects
                        </h2>

                        <p className="mt-1 text-sm text-text">
                            Overview of your latest projects
                        </p>

                    </div>


                    <button
                        type="button"
                        className="
                            flex
                            w-fit
                            items-center
                            gap-1
                            text-sm
                            font-semibold
                            text-secondary
                            transition
                            hover:underline
                        "
                    >
                        View All Projects
                        <ArrowRight size={16} />
                    </button>

                </div>


                {/* Project Cards */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {recentProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.5 + index * 0.08,
                                duration: 0.4,
                            }}
                        >
                            <ProjectCard
                                {...project}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default DashboardHome;