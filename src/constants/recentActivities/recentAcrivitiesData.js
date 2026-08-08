import { MessageSquare, Building2, FolderPlus, FileCheck2 } from "lucide-react";

export const recentActivitiesData = [
  {
    id: 1,
    icon: MessageSquare,
    title: "New inquiry received",
    description: "Muhammad Ali submitted a new property inquiry.",
    time: "5 min ago",
    iconClassName: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    icon: Building2,
    title: "Project updated",
    description: "Hayatabad Commercial Plaza project information was updated.",
    time: "32 min ago",
    iconClassName: "bg-green-50 text-secondary",
  },
  {
    id: 3,
    icon: FolderPlus,
    title: "New project added",
    description: "University Road Residence was added to the project list.",
    time: "1 hour ago",
    iconClassName: "bg-purple-50 text-purple-600",
  },
  {
    id: 4,
    icon: FileCheck2,
    title: "File verification completed",
    description: "Document #AB-1024 was successfully verified.",
    time: "2 hours ago",
    iconClassName: "bg-orange-50 text-orange-600",
  },
];
