import { motion } from "framer-motion";
import { Plus, MessageSquare, Users } from "lucide-react";

const actions = [
    {
        title: "Add New Project",
        description: "Create a new project",
        icon: Plus,
        iconClass: "bg-green-50 text-secondary",
        onClick: () => {
            console.log("Add Project");
        },
    },
    {
        title: "View Inquiries",
        description: "Check customer messages",
        icon: MessageSquare,
        iconClass: "bg-blue-50 text-blue-600",
        onClick: () => {
            console.log("View Inquiries");
        },
    },
    {
        title: "Manage Team",
        description: "View team members",
        icon: Users,
        iconClass: "bg-purple-50 text-purple-600",
        onClick: () => {
            console.log("Manage Team");
        },
    },
];

const QuickActions = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
            }}
            className="rounded-2xl border border-border bg-white p-5 shadow-sm"
        >
            <div>
                <h2 className="font-semibold text-heading">Quick Actions</h2>
                <p className="mt-1 text-xs text-text">Frequently used actions</p>
            </div>

            <div className="mt-5 space-y-3">
                {actions.map((action) => {
                    const Icon = action.icon;
                    return (
                        <button
                            key={action.title}
                            type="button"
                            onClick={action.onClick}
                            className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition-all duration-300 hover:border-secondary hover:bg-green-50"
                        >
                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${action.iconClass}`}>
                                <Icon size={19} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-heading">
                                    {action.title}
                                </p>
                                <p className="text-xs text-text">{action.description}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default QuickActions;
