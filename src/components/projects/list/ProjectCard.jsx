import { useNavigate } from "react-router";
import { MapPin, Calendar, MoreVertical } from "lucide-react";

import ProjectStatusBadge from "../common/ProjectStatusBadge";

const ProjectCard = ({ project, onEdit }) => {
    const navigate = useNavigate();

    return (
        <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />

                <div className="absolute right-3 top-3">
                    <ProjectStatusBadge status={project.status} />
                </div>

                <button type="button" className="absolute left-3 top-3 rounded-lg bg-white/90 p-2 text-gray-600 backdrop-blur-sm transition hover:bg-white" aria-label="Project options">
                    <MoreVertical size={18} />
                </button>
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="font-semibold text-heading">{project.title}</h3>
                        <p className="mt-1 text-sm text-text">{project.category}</p>
                    </div>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-text">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4 text-xs text-text">
                    <span className="flex items-center gap-1.5"><MapPin size={15} />{project.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={15} />{project.year}</span>
                </div>

                <div className="mt-4 flex gap-2">
                    <button onClick={() => navigate(`/projects/${project.id}`)} type="button" className="flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold text-heading transition hover:bg-gray-50">
                        View
                    </button>

                    <button onClick={() => onEdit(project)} type="button" className="flex-1 rounded-xl bg-green-50 py-2.5 text-sm font-semibold text-secondary transition hover:bg-green-100">
                        Edit
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;