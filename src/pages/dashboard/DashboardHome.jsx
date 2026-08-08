import { useState } from "react";

import DashboardHeader from "../../components/dashboard/header/DashboardHeader";
import StatisticsSection from "../../components/dashboard/stats/StatisticsSection";
import AnalyticsSection from "../../components/dashboard/analytics/AnalyticsSection";
import RecentActivity from "../../components/dashboard/activity/RecentActivity";
import RecentInquiries from "../../components/dashboard/inquiries/RecentInquiries";
import QuickActions from "../../components/dashboard/actions/QuickActions";
import RecentProjects from "../../components/dashboard/projects/RecentProjects";

import DashboardSkeleton from "../../components/dashboard/common/DashboardSkeleton";
import DashboardEmpty from "../../components/dashboard/common/DashboardEmpty";
import DashboardError from "../../components/dashboard/common/DashboardError";

// Data
import { statsData } from "../../constants/stats/statsData";
import { recentInquiriesData } from "../../constants/recentInquires/recentInquiresData";
import { recentProjectsData } from "../../constants/recentProjects/recentProjectsData";
import { recentActivitiesData } from "../../constants/recentActivities/recentAcrivitiesData";
import { projectsAnalyticsData } from "../../constants/recentProjects/projectsAnalyticsData";
import { inquiriesAnalyticsData } from "../../constants/recentInquires/inquiriesAnalyticsData";

const DashboardHome = () => {
  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState(false);

  const [projectsAnalyticsLoading, setProjectsAnalyticsLoading] = useState(false);
  const [projectsAnalyticsError, setProjectsAnalyticsError] = useState(false);

  const [inquiriesLoading, setInquiriesLoading] = useState(false);
  const [inquiriesError, setInquiriesError] = useState(false);

  const [inquiriesAnalyticsLoading, setInquiriesAnalyticsLoading] = useState(false);
  const [inquiriesAnalyticsError, setInquiriesAnalyticsError] = useState(false);

  const [activityLoading, setActivityLoading] = useState(false);
  const [activityError, setActivityError] = useState(false);

  const [projectsLoading, setProjectsLoading] = useState(false);
  const [projectsError, setProjectsError] = useState(false);

  const handleProjectsAnalyticsRetry = () => {
    setProjectsAnalyticsError(false);
    setProjectsAnalyticsLoading(true);

    setTimeout(() => {
      setProjectsAnalyticsLoading(false);
    }, 1000);
  };

  const handleInquiriesAnalyticsRetry = () => {
    setInquiriesAnalyticsError(false);
    setInquiriesAnalyticsLoading(true);

    setTimeout(() => {
      setInquiriesAnalyticsLoading(false);
    }, 1000);
  };



  return (
    <div className="space-y-6">
      {/* =========================
                Welcome Header
            ========================= */}

      <DashboardHeader
        title="Dashboard Overview"
        description="Here's what's happening with Ali Builders today."
        actionLabel="Add Project"
        onAction={() => {
          console.log("Open Add Project");
        }}
      />

      {/* =========================
                Statistics
            ========================= */}
      <StatisticsSection
        stats={statsData}
        loading={statsLoading}
        error={statsError}
        onRetry={() => {
          setStatsError(false);
          setStatsLoading(true);

          setTimeout(() => {
            setStatsLoading(false);
          }, 1000);
        }}
      />

      {/* =========================
             Analytics
        ========================= */}
      <AnalyticsSection
        projectsLoading={projectsAnalyticsLoading}
        projectsError={projectsAnalyticsError}
        projectsData={projectsAnalyticsData}

        inquiriesLoading={inquiriesAnalyticsLoading}
        inquiriesError={inquiriesAnalyticsError}
        inquiriesData={inquiriesAnalyticsData}

        onProjectsRetry={handleProjectsAnalyticsRetry}
        onInquiriesRetry={handleInquiriesAnalyticsRetry}
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
          ) : recentInquiriesData.length === 0 ? (
            <DashboardEmpty
              title="No Recent Inquiries"
              description="There are no customer inquiries yet."
            />
          ) : (
            <RecentInquiries
              inquiries={recentInquiriesData}
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
          Recent Activity
          ========================= */}

      <RecentActivity
        activities={recentActivitiesData}
        loading={activityLoading}
        error={activityError}
        onRetry={() => {
          setActivityError(false);
          setActivityLoading(true);

          setTimeout(() => {
            setActivityLoading(false);
          }, 1000);
        }}
        onViewAll={() => {
          console.log("Navigate to activity");
        }}
      />

      {/* =========================
        Recent Projects
      ========================= */}
      <RecentProjects
        projects={recentProjectsData}
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
