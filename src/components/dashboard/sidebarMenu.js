import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BriefcaseBusiness,
  Image,
  ShieldCheck,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    path: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Leadership",
    path: "/dashboard/leadership",
    icon: BriefcaseBusiness,
  },
  {
    title: "Team",
    path: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Services",
    path: "/dashboard/services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gallery",
    path: "/dashboard/gallery",
    icon: Image,
  },
  {
    title: "File Verification",
    path: "/dashboard/file-verification",
    icon: ShieldCheck,
  },
  {
    title: "Messages",
    path: "/dashboard/messages",
    icon: Mail,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];
