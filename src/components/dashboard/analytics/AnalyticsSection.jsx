import ProjectsOverviewChart from "./ProjectsOverviewChart";
import InquiriesChart from "./InquiriesChart";

import DashboardSkeleton from "../common/DashboardSkeleton";
import DashboardEmpty from "../common/DashboardEmpty";
import DashboardError from "../common/DashboardError";


const AnalyticsSection = ({
    projectsLoading = false,
    projectsError = false,
    projectsData = [],
    inquiriesLoading = false,
    inquiriesError = false,
    inquiriesData = [],
    onProjectsRetry,
    onInquiriesRetry,
}) => {

    return (
        <section
            className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* =========================
                Projects Analytics
            ========================= */}
            {projectsLoading ? (
                <DashboardSkeleton
                    type="card"
                />
            ) : projectsError ? (
                <DashboardError
                    title="Projects analytics unavailable"
                    description="We couldn't load project analytics right now."
                    onRetry={onProjectsRetry}
                />
            ) : projectsData.length === 0 ? (
                <DashboardEmpty
                    title="No Project Analytics"
                    description="There isn't enough project data to display analytics yet."
                />
            ) : (
                <ProjectsOverviewChart
                    data={projectsData}
                />
            )}

            {/* =========================
                Inquiries Analytics
            ========================= */}
            {inquiriesLoading ? (
                <DashboardSkeleton
                    type="card"
                />
            ) : inquiriesError ? (
                <DashboardError
                    title="Inquiries analytics unavailable"
                    description="We couldn't load inquiry analytics right now."
                    onRetry={onInquiriesRetry}
                />
            ) : inquiriesData.length === 0 ? (
                <DashboardEmpty
                    title="No Inquiry Analytics"
                    description="There isn't enough inquiry data to display analytics yet."
                />
            ) : (

                <InquiriesChart
                    data={inquiriesData}
                />
            )}
        </section>
    );
};

export default AnalyticsSection;