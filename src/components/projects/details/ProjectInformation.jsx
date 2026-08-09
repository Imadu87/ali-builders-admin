import {
    MapPin,
    CalendarDays,
    Building2,
    CircleCheck,
} from "lucide-react";

const ProjectInformation = ({ project }) => {
    const information = [
        {
            label: "Location",
            value: project.location,
            icon: MapPin,
        },
        {
            label: "Category",
            value: project.category,
            icon: Building2,
        },
        {
            label: "Year",
            value: project.year,
            icon: CalendarDays,
        },
        {
            label: "Status",
            value: project.status,
            icon: CircleCheck,
        },
    ];

    return (
        <section className="
            h-fit
            rounded-2xl
            border
            border-border
            bg-white
            p-5
            shadow-sm
        ">

            <h2 className="
                text-lg
                font-bold
                text-heading
            ">
                Project Information
            </h2>

            <div className="mt-5 space-y-4">

                {information.map((item) => {

                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                bg-gray-50
                                p-3
                            "
                        >

                            <div className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-green-50
                                text-secondary
                            ">
                                <Icon size={18} />
                            </div>

                            <div>
                                <p className="
                                    text-xs
                                    text-text
                                ">
                                    {item.label}
                                </p>

                                <p className="
                                    mt-0.5
                                    text-sm
                                    font-semibold
                                    text-heading
                                ">
                                    {item.value}
                                </p>
                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default ProjectInformation;