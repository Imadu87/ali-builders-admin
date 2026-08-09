import { useMemo, useState } from "react";

import ProjectsHeader from "../../components/projects/header/ProjectsHeader";
import ProjectFilters from "../../components/projects/filters/ProjectFilters";
import ProjectGrid from "../../components/projects/list/ProjectGrid";
import ProjectForm from "../../components/projects/form/ProjectForm";

import { recentProjectsData } from "../../constants/recentProjects/recentProjectsData";

const Projects = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [category, setCategory] = useState("All");

    const [showForm, setShowForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = useMemo(() => {
        return recentProjectsData.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.location.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                status === "All" || project.status === status;

            const matchesCategory =
                category === "All" || project.category === category;

            return matchesSearch && matchesStatus && matchesCategory;
        });
    }, [search, status, category]);

    const handleAddProject = () => {
        setSelectedProject(null);
        setShowForm(true);
    };

    const handleEditProject = (project) => {
        setSelectedProject(project);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedProject(null);
    };

    const handleSubmit = (data) => {
        if (selectedProject) {
            console.log("Update Project:", data);
        } else {
            console.log("Add Project:", data);
        }

        handleCloseForm();
    };

    return (
        <div className="space-y-6">
            <ProjectsHeader onAddProject={handleAddProject} />

            <ProjectFilters search={search} setSearch={setSearch} status={status} setStatus={setStatus} category={category} setCategory={setCategory} />

            <ProjectGrid projects={filteredProjects} onEdit={handleEditProject} />

            {showForm && (
                <ProjectForm mode={selectedProject ? "edit" : "add"} project={selectedProject} onClose={handleCloseForm} onSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default Projects;