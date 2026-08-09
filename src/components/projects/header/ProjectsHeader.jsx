import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const ProjectsHeader = ({ onAddProject }) => {
    return (
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
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-2xl font-bold text-heading sm:text-3xl">
                    Projects
                </h1>

                <p className="mt-1 text-sm text-text sm:text-base">
                    Manage and monitor all Ali Builders projects.
                </p>
            </div>

            <button
                type="button"
                onClick={onAddProject}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto">
                <Plus size={18} />
                Add Project
            </button>
        </motion.div>
    );
};

export default ProjectsHeader;