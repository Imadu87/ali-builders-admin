import { NavLink } from "react-router";

const SidebarItem = ({
    item,
    collapsed,
    onClick,
}) => {

    const Icon = item.icon;

    return (
        <NavLink
            to={item.path}
            end={item.path === "/dashboard"}
            onClick={onClick}
            className={({ isActive }) =>
                `
                flex items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition-all
                duration-300

                ${isActive
                    ? "bg-secondary text-white shadow-lg"
                    : "text-gray-600 hover:bg-green-50 hover:text-secondary"
                }
                `
            }
        >

            <Icon size={21} />

            {!collapsed && (
                <span className="font-medium">
                    {item.title}
                </span>
            )}

        </NavLink>
    );
};

export default SidebarItem;