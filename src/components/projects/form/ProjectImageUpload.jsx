import { useRef } from "react";
import { ImagePlus, X, Upload } from "lucide-react";

const ProjectImageUpload = ({
    image,
    onChange,
    onRemove,
}) => {
    const inputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            return;
        }

        onChange(file);
    };

    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-heading">
                Project Image
            </label>

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />

            {image ? (
                <div className="relative overflow-hidden rounded-2xl border border-border">
                    <img
                        src={image}
                        alt="Project preview"
                        className="
                            h-56
                            w-full
                            object-cover
                            sm:h-64
                        "
                    />

                    <button
                        type="button"
                        onClick={onRemove}
                        className="
                            absolute
                            right-3
                            top-3
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-black/60
                            text-white
                            backdrop-blur-sm
                            transition
                            hover:bg-red-500
                        "
                        aria-label="Remove image"
                    >
                        <X size={17} />
                    </button>

                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        className="
                            absolute
                            bottom-3
                            right-3
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-white/95
                            px-3
                            py-2
                            text-xs
                            font-semibold
                            text-heading
                            shadow-sm
                            transition
                            hover:bg-white
                        "
                    >
                        <Upload size={14} />
                        Change Image
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="
                        flex
                        min-h-52
                        w-full
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border-2
                        border-dashed
                        border-gray-300
                        bg-gray-50
                        px-5
                        text-center
                        transition
                        hover:border-secondary
                        hover:bg-green-50/50
                    "
                >
                    <div className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-green-50
                        text-secondary
                    ">
                        <ImagePlus size={22} />
                    </div>

                    <p className="
                        mt-3
                        text-sm
                        font-semibold
                        text-heading
                    ">
                        Upload project image
                    </p>

                    <p className="
                        mt-1
                        text-xs
                        text-text
                    ">
                        PNG, JPG, WEBP up to 5MB
                    </p>
                </button>
            )}
        </div>
    );
};

export default ProjectImageUpload;