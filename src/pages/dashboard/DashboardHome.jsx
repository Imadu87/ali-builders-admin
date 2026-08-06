import { motion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  FolderKanban,
  MessageSquare,
  Users,
  Plus,
} from "lucide-react";

import StatisticsSection from "../../components/dashboard/stats/StatisticsSection";
import ProjectsOverviewChart from "../../components/dashboard/analytics/ProjectsOverviewChart";
import InquiriesChart from "../../components/dashboard/analytics/InquiriesChart";
import RecentActivity from "../../components/dashboard/activity/RecentActivity";
import RecentInquiries from "../../components/dashboard/inquiries/RecentInquiries";
import QuickActions from "../../components/dashboard/actions/QuickActions";
import RecentProjects from "../../components/dashboard/projects/RecentProjects";

import DashboardSkeleton from "../../components/dashboard/common/DashboardSkeleton";
import DashboardEmpty from "../../components/dashboard/common/DashboardEmpty";
import DashboardError from "../../components/dashboard/common/DashboardError";

import project1 from "../../assets/images/projects/project1/project1.1.jfif";
import project2 from "../../assets/images/projects/project1/project1.2.jfif";
import project3 from "../../assets/images/projects/project1/project1.3.jfif";

const DashboardHome = () => {
  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState(false);

  const [inquiriesLoading, setInquiriesLoading] = useState(false);
  const [inquiriesError, setInquiriesError] = useState(false);

  const [projectsAnalyticsLoading, setProjectsAnalyticsLoading] = useState(false);
  const [projectsAnalyticsError, setProjectsAnalyticsError] = useState(false);

  const [inquiriesAnalyticsLoading, setInquiriesAnalyticsLoading] = useState(false);
  const [inquiriesAnalyticsError, setInquiriesAnalyticsError] = useState(false);

  const [activityLoading, setActivityLoading] = useState(false);
  const [activityError, setActivityError] = useState(false);

  const [projectsLoading, setProjectsLoading] = useState(false);
  const [projectsError, setProjectsError] = useState(false);

  /* =========================
       Statistics
    ========================= */

  const stats = [
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

  /* =========================
       Recent Inquiries
    ========================= */

  const recentInquiries = [
    {
      id: 1,
      name: "Muhammad Ahmed",
      email: "ahmed@example.com",
      subject: "House Project Inquiry",
      time: "10 minutes ago",
      status: "New",
    },
    {
      id: 2,
      name: "Hassan Khan",
      email: "hassan@example.com",
      subject: "Commercial Project",
      time: "35 minutes ago",
      status: "Pending",
    },
    {
      id: 3,
      name: "Usman Ali",
      email: "usman@example.com",
      subject: "Property Consultation",
      time: "1 hour ago",
      status: "New",
    },
    {
      id: 4,
      name: "Bilal Shah",
      email: "bilal@example.com",
      subject: "Project Details",
      time: "2 hours ago",
      status: "Resolved",
    },
  ];

  /* =========================
       Recent Projects
    ========================= */

  const recentProjects = [
    {
      id: 1,
      title: "Green Valley Housing",
      location: "Peshawar",
      image: project1,
      status: "Completed",
      year: "2025",
      category: "Residential",
    },
    {
      id: 2,
      title: "Ali Heights",
      location: "Islamabad",
      image: project2,
      status: "In Progress",
      year: "2026",
      category: "Commercial",
    },
    {
      id: 3,
      title: "Modern Villas",
      location: "Hayatabad",
      image: project3,
      status: "Planning",
      year: "2026",
      category: "Residential",
    },
  ];

  return (
    <div className="space-y-6">
      {/* =========================
                Welcome Header
            ========================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-heading sm:text-3xl">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-text sm:text-base">
            Here's what's happening with Ali Builders today.
          </p>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto">
          <Plus size={18} />
          Add Project
        </button>
      </motion.div>

      {/* =========================
                Statistics
            ========================= */}
      <StatisticsSection
        stats={stats}
        loading={statsLoading}
        error={statsError}
        onRetry={() => {
          setStatsError(false);
          setStatsLoading(true);

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
      />

      {/* =========================
                Recent Inquiries
                + Quick Actions
            ========================= */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Recent Inquiries */}
        <div className="xl:col-span-2">
          {inquiriesLoading ? (
            <DashboardSkeleton
              type="activity"
              count={4}
            />
          ) : inquiriesError ? (
            <DashboardError
              title="Inquiries couldn't load"
              description="We couldn't load recent customer inquiries."
              onRetry={() => {
                setInquiriesError(false);
                setInquiriesLoading(true);
                setTimeout(() => {
                  setInquiriesLoading(false);
                }, 1000);
              }}
            />
          ) : recentInquiries.length === 0 ? (
            <DashboardEmpty
              title="No Recent Inquiries"
              description="There are no customer inquiries yet."
            />
          ) : (
            <RecentInquiries
              inquiries={recentInquiries}
              onViewAll={() => {
                console.log("Navigate to inquiries");
              }}
            />
          )}
        </div>
        {/* Quick Actions */}
        <QuickActions />
      </div>

      {/* =========================
             Analytics
        ========================= */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* =========================
        Projects Analytics
          ========================= */}
        {projectsAnalyticsLoading ? (
          <DashboardSkeleton
            type="card"
          />
        ) : projectsAnalyticsError ? (
          <DashboardError
            title="Projects analytics unavailable"
            description="We couldn't load project analytics right now."
            onRetry={() => {
              setProjectsAnalyticsError(false);
              setProjectsAnalyticsLoading(true);
              setTimeout(() => {
                setProjectsAnalyticsLoading(false);
              }, 1000);
            }}
          />
        ) : (
          <ProjectsOverviewChart />
        )}


        {/* =========================
        Inquiries Analytics
        ========================= */}
        {inquiriesAnalyticsLoading ? (
          <DashboardSkeleton
            type="card"
          />
        ) : inquiriesAnalyticsError ? (
          <DashboardError
            title="Inquiries analytics unavailable"
            description="We couldn't load inquiry analytics right now."
            onRetry={() => {
              setInquiriesAnalyticsError(false);
              setInquiriesAnalyticsLoading(true);
              setTimeout(() => {
                setInquiriesAnalyticsLoading(false);
              }, 1000);
            }}
          />
        ) : (
          <InquiriesChart />
        )}
      </section>

      {/* =========================
          Recent Activity
          ========================= */}

      <section className="mt-6">
        {activityLoading ? (
          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
            <div className="mb-6 space-y-2">
              <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-64 animate-pulse rounded bg-gray-200" />
            </div>
            <DashboardSkeleton
              type="activity"
              count={4}
            />
          </div>
        ) : activityError ? (
          <DashboardError
            title="Activity couldn't load"
            description="We couldn't load recent activity right now. Please try again."
            onRetry={() => {
              setActivityError(false);
              setActivityLoading(true);
              setTimeout(() => {
                setActivityLoading(false);
              }, 1000);
            }}
          />
        ) : (
          <RecentActivity />
        )}
      </section>

      {/* =========================
        Recent Projects
      ========================= */}
      <RecentProjects
        projects={recentProjects}
        loading={projectsLoading}
        error={projectsError}
        onRetry={() => {
          setProjectsError(false);
          setProjectsLoading(true);

          setTimeout(() => {
            setProjectsLoading(false);
          }, 1000);
        }}
        onViewAll={() => {
          console.log("View all projects");
        }}
        onAddProject={() => {
          console.log("Open add project");
        }}
      />
    </div>
  );
};

export default DashboardHome;
