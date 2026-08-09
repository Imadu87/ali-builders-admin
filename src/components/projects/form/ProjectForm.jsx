import { useEffect, useState } from "react";
import { X } from "lucide-react";

import ProjectImageUpload from "./ProjectImageUpload";

const initialForm = {
    title: "",
    location: "",
    category: "Residential",
    status: "Planning",
    year: new Date().getFullYear().toString(),
    description: "",
};

const ProjectForm = ({
    mode = "add",
    project = null,
    onClose,
    onSubmit,
}) => {
    const isEdit = mode === "edit";

    const [form, setForm] = useState(initialForm);
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isEdit && project) {
            setForm({
                title: project.title || "",
                location: project.location || "",
                category: project.category || "Residential",
                status: project.status || "Planning",
                year: project.year || "",
                description: project.description || "",
            });

            setImage(project.image || null);
        } else {
            setForm(initialForm);
            setImage(null);
        }

        setErrors({});
    }, [isEdit, project]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));
    };

    const handleImageChange = (file) => {
        const previewUrl = URL.createObjectURL(file);

        setImage(previewUrl);

        setErrors((previous) => ({
            ...previous,
            image: "",
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.title.trim()) {
            newErrors.title = "Project title is required.";
        }

        if (!form.location.trim()) {
            newErrors.location = "Location is required.";
        }

        if (!form.year.trim()) {
            newErrors.year = "Year is required.";
        }

        if (!form.description.trim()) {
            newErrors.description = "Description is required.";
        }

        if (!image) {
            newErrors.image = "Project image is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) return;

        const projectData = {
            ...form,
            image,
        };

        console.log(
            isEdit
                ? "Updated Project:"
                : "New Project:",
            projectData
        );

        onSubmit?.(projectData);
    };

    return (
        <div className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/50
            p-4
            backdrop-blur-sm
        ">

            <div className="
                flex
                max-h-[92vh]
                w-full
                max-w-3xl
                flex-col
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-2xl
            ">

                {/* Header */}

                <div className="
                    flex
                    shrink-0
                    items-center
                    justify-between
                    border-b
                    border-border
                    px-5
                    py-4
                    sm:px-6
                ">

                    <div>
                        <h2 className="
                            text-lg
                            font-bold
                            text-heading
                            sm:text-xl
                        ">
                            {isEdit
                                ? "Edit Project"
                                : "Add New Project"}
                        </h2>

                        <p className="
                            mt-0.5
                            text-xs
                            text-text
                            sm:text-sm
                        ">
                            {isEdit
                                ? "Update project information."
                                : "Add a new project to your portfolio."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            text-gray-500
                            transition
                            hover:bg-gray-100
                            hover:text-gray-800
                        "
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                </div>


                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="overflow-y-auto"
                >

                    <div className="
                        space-y-5
                        p-5
                        sm:p-6
                    ">

                        {/* Title + Location */}

                        <div className="
                            grid
                            grid-cols-1
                            gap-5
                            sm:grid-cols-2
                        ">

                            <FormInput
                                label="Project Title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="e.g. Green Valley Housing"
                                error={errors.title}
                            />

                            <FormInput
                                label="Location"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="e.g. Peshawar"
                                error={errors.location}
                            />

                        </div>


                        {/* Category + Status + Year */}

                        <div className="
                            grid
                            grid-cols-1
                            gap-5
                            sm:grid-cols-3
                        ">

                            <FormSelect
                                label="Category"
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                options={[
                                    "Residential",
                                    "Commercial",
                                ]}
                            />

                            <FormSelect
                                label="Status"
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                options={[
                                    "Planning",
                                    "In Progress",
                                    "Completed",
                                ]}
                            />

                            <FormInput
                                label="Year"
                                name="year"
                                value={form.year}
                                onChange={handleChange}
                                placeholder="2026"
                                error={errors.year}
                            />

                        </div>


                        {/* Image */}

                        <ProjectImageUpload
                            image={image}
                            onChange={handleImageChange}
                            onRemove={() => setImage(null)}
                        />

                        {errors.image && (
                            <p className="
                                -mt-3
                                text-xs
                                font-medium
                                text-red-500
                            ">
                                {errors.image}
                            </p>
                        )}


                        {/* Description */}

                        <div>

                            <label className="
                                mb-2
                                block
                                text-sm
                                font-semibold
                                text-heading
                            ">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Write a short description about the project..."
                                className={`
                                    w-full
                                    resize-none
                                    rounded-xl
                                    border
                                    bg-gray-50
                                    px-4
                                    py-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:bg-white
                                    ${
                                        errors.description
                                            ? "border-red-400 focus:border-red-400"
                                            : "border-border focus:border-secondary"
                                    }
                                `}
                            />

                            {errors.description && (
                                <p className="
                                    mt-1
                                    text-xs
                                    font-medium
                                    text-red-500
                                ">
                                    {errors.description}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* Footer */}

                    <div className="
                        flex
                        flex-col-reverse
                        gap-3
                        border-t
                        border-border
                        bg-gray-50
                        p-5
                        sm:flex-row
                        sm:justify-end
                        sm:px-6
                    ">

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                w-full
                                rounded-xl
                                border
                                border-border
                                bg-white
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-heading
                                transition
                                hover:bg-gray-50
                                sm:w-auto
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="
                                w-full
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
                                hover:shadow-md
                                sm:w-auto
                            "
                        >
                            {isEdit
                                ? "Save Changes"
                                : "Add Project"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};


/* =========================
   Reusable Input
========================= */

const FormInput = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
}) => {
    return (
        <div>

            <label className="
                mb-2
                block
                text-sm
                font-semibold
                text-heading
            ">
                {label}
            </label>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                    w-full
                    rounded-xl
                    border
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:bg-white
                    ${
                        error
                            ? "border-red-400 focus:border-red-400"
                            : "border-border focus:border-secondary"
                    }
                `}
            />

            {error && (
                <p className="
                    mt-1
                    text-xs
                    font-medium
                    text-red-500
                ">
                    {error}
                </p>
            )}

        </div>
    );
};


/* =========================
   Reusable Select
========================= */

const FormSelect = ({
    label,
    name,
    value,
    onChange,
    options,
}) => {
    return (
        <div>

            <label className="
                mb-2
                block
                text-sm
                font-semibold
                text-heading
            ">
                {label}
            </label>

            <select
                name={name}
                value={value}
                onChange={onChange}
                className="
                    w-full
                    rounded-xl
                    border
                    border-border
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-secondary
                    focus:bg-white
                "
            >
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default ProjectForm;