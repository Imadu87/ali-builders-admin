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
    path: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Leadership",
    path: "/leadership",
    icon: BriefcaseBusiness,
  },
  {
    title: "Team",
    path: "/team",
    icon: Users,
  },
  {
    title: "Services",
    path: "/services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: Image,
  },
  {
    title: "File Verification",
    path: "/file-verification",
    icon: ShieldCheck,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: Mail,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
