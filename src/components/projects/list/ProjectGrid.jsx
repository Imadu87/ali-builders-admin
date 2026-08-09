import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, onEdit }) => {
    if (projects.length === 0) {
        return (
            <div className="rounded-2xl border border-border bg-white p-10 text-center shadow-sm">
                <h3 className="font-semibold text-heading">No Projects Found</h3>
                <p className="mt-1 text-sm text-text">Try changing your search or filters.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default ProjectGrid;