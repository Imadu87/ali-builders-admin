import { useState } from "react";
import { useParams } from "react-router";

import { recentProjectsData } from "../../constants/recentProjects/recentProjectsData";

import ProjectDetailsHeader from "../../components/projects/details/ProjectDetailsHeader";
import ProjectGallery from "../../components/projects/details/ProjectGallery";
import ProjectInformation from "../../components/projects/details/ProjectInformation";
import ProjectDescription from "../../components/projects/details/ProjectDescription";

import ProjectForm from "../../components/projects/form/ProjectForm";

const ProjectDetails = () => {
  const { id } = useParams();
  const [showEditForm, setShowEditForm] = useState(false);

  const project = recentProjectsData.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="
                flex
                min-h-[60vh]
                items-center
                justify-center
            ">
        <div className="text-center">
          <h2 className="text-xl font-bold text-heading">
            Project Not Found
          </h2>

          <p className="mt-2 text-sm text-text">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <ProjectDetailsHeader
        project={project}
        onEdit={() => setShowEditForm(true)}
      />

      <ProjectGallery
        project={project}
      />

      <div className="
                grid
                grid-cols-1
                gap-6
                xl:grid-cols-3
            ">

        <div className="xl:col-span-2">
          <ProjectDescription
            project={project}
          />
        </div>

        <ProjectInformation
          project={project}
        />

        {showEditForm && (
          <ProjectForm
            mode="edit"
            project={project}
            onClose={() => setShowEditForm(false)}
            onSubmit={(data) => {
              console.log("Edit Project:", data);
              setShowEditForm(false);
            }}
          />
        )}

      </div>

    </div>
  );
};

export default ProjectDetails;