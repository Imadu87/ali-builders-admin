import { BrowserRouter, Routes, Route } from "react-router";

import AuthLayout from "../layouts/AuthLayout";

import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ResetPassword from "../pages/auth/ResetPassword";

// Dashboard
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";

// Projects
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/verify-otp"
                        element={<VerifyOtp />}
                    />
                    <Route
                        path="/reset-password"
                        element={<ResetPassword />}
                    />
                </Route>


                // Dashboard
                <Route element={<DashboardLayout />}>
                    <Route
                        path="/dashboard"
                        element={<DashboardHome />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                    <Route
                        path="/projects/:id"
                        element={<ProjectDetails />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;