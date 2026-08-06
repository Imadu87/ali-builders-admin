import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProjectCard from "./ProjectCard";

import DashboardSkeleton from "../common/DashboardSkeleton";
import DashboardEmpty from "../common/DashboardEmpty";
import DashboardError from "../common/DashboardError";


const RecentProjects = ({
    projects = [],
    loading = false,
    error = false,
    onRetry,
    onViewAll,
    onAddProject,
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
        >

            {/* Section Header */}
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-lg font-bold text-heading">
                        Recent Projects
                    </h2>
                    <p className="mt-1 text-sm text-text">
                        Overview of your latest projects
                    </p>
                </div>

                {!loading && !error && projects.length > 0 && (
                    <button
                        type="button"
                        onClick={onViewAll}
                        className="flex w-fit items-center gap-1 text-sm font-semibold text-secondary transition hover:underline">
                        View All Projects
                        <ArrowRight size={16} />
                    </button>
                )}
            </div>

            {/* Loading */}
            {loading ? (
                <DashboardSkeleton
                    type="projects"
                    count={3}
                />
            ) : error ? (
                /* Error */
                <DashboardError
                    title="Projects couldn't load"
                    description="We couldn't load your recent projects. Please try again."
                    onRetry={onRetry}
                />
            ) : projects.length === 0 ? (
                /* Empty */
                <DashboardEmpty
                    title="No Projects Yet"
                    description="You haven't added any projects yet. Start by adding your first project."
                    actionLabel="Add Project"
                    onAction={onAddProject}
                />
            ) : (
                /* Projects */
                <div
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
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
                                delay: index * 0.08,
                                duration: 0.4,
                            }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.section>
    );
};

export default RecentProjects;