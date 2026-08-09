import { Image as ImageIcon } from "lucide-react";

const ProjectGallery = ({ project }) => {
    return (
        <section className="
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-white
            shadow-sm
        ">

            <div className="
                relative
                h-64
                sm:h-80
                lg:h-[420px]
            ">

                <img
                    src={project.image}
                    alt={project.title}
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />

                <div className="
                    absolute
                    bottom-4
                    left-4
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-black/50
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-sm
                ">
                    <ImageIcon size={15} />
                    Project Preview
                </div>

            </div>

        </section>
    );
};

export default ProjectGallery;