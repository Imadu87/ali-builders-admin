import { ArrowLeft, Edit3 } from "lucide-react";
import { useNavigate } from "react-router";

import ProjectStatusBadge from "../common/ProjectStatusBadge";

const ProjectDetailsHeader = ({ project, onEdit }) => {
    const navigate = useNavigate();

    return (
        <div className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
        ">

            <div className="flex items-start gap-3">

                <button
                    type="button"
                    onClick={() => navigate("/projects")}
                    className="
                        mt-1
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-border
                        bg-white
                        text-gray-600
                        shadow-sm
                        transition
                        hover:bg-gray-50
                        hover:text-secondary
                    "
                    aria-label="Back to projects"
                >
                    <ArrowLeft size={19} />
                </button>

                <div>
                    <div className="flex flex-wrap items-center gap-3">

                        <h1 className="
                            text-2xl
                            font-bold
                            text-heading
                            sm:text-3xl
                        ">
                            {project.title}
                        </h1>

                        <ProjectStatusBadge
                            status={project.status}
                        />

                    </div>

                    <p className="
                        mt-1
                        text-sm
                        text-text
                    ">
                        {project.category} project in {project.location}
                    </p>
                </div>

            </div>

            <button
                type="button"
                onClick={onEdit}
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
                    transition
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    sm:w-auto
                "
            >
                <Edit3 size={17} />
                Edit Project
            </button>

        </div>
    );
};

export default ProjectDetailsHeader;