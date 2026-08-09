import { FileText } from "lucide-react";

const ProjectDescription = ({ project }) => {
    return (
        <section className="
            rounded-2xl
            border
            border-border
            bg-white
            p-5
            shadow-sm
            sm:p-6
        ">

            <div className="
                flex
                items-center
                gap-3
            ">

                <div className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-green-50
                    text-secondary
                ">
                    <FileText size={19} />
                </div>

                <div>
                    <h2 className="
                        font-bold
                        text-heading
                    ">
                        About This Project
                    </h2>

                    <p className="
                        text-xs
                        text-text
                    ">
                        Project overview and description
                    </p>
                </div>

            </div>

            <p className="
                mt-5
                text-sm
                leading-7
                text-gray-600
            ">
                {project.description}
            </p>

        </section>
    );
};

export default ProjectDescription;