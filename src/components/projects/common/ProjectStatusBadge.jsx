const ProjectStatusBadge = ({ status }) => {
    const styles = {
        Completed:
            "bg-green-50 text-green-700",
        "In Progress":
            "bg-blue-50 text-blue-700",
        Planning:
            "bg-orange-50 text-orange-700",
    };

    return (
        <span
            className={` inline-flex rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm
                ${styles[status] || "bg-gray-100 text-gray-700"}`}>
            {status}
        </span>
    );
};

export default ProjectStatusBadge;