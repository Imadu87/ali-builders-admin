import { Building2, FolderKanban, MessageSquare, Users } from "lucide-react";

export const statsData = [
  {
    title: "Total Projects",
    value: "24",
    icon: Building2,
    trend: "+12%",
    description: "from last month",
    iconClass: "bg-green-50 text-secondary",
  },
  {
    title: "Active Projects",
    value: "12",
    icon: FolderKanban,
    trend: "+8%",
    description: "from last month",
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Total Inquiries",
    value: "86",
    icon: MessageSquare,
    trend: "+18%",
    description: "from last month",
    iconClass: "bg-purple-50 text-purple-600",
  },
  {
    title: "Team Members",
    value: "18",
    icon: Users,
    trend: "+2",
    description: "new this month",
    iconClass: "bg-orange-50 text-orange-600",
  },
];
