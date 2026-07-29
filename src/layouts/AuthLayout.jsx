import { Outlet } from "react-router";

import logo from "../assets/logo/logo.png";

const AuthLayout = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-light px-4 py-10">
            {/* Background Blur */}
            <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            {/* Auth Card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="card">
                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <img
                            src={logo}
                            alt="Ali Builders Associate"
                            className="h-20 object-contain"
                            loading="lazy"
                        />
                    </div>
                    {/* Auth Pages */}
                    <Outlet />
                </div>
                {/* Footer */}
                <p className="mt-8 text-center text-sm text-text">
                    © {new Date().getFullYear()} Ali Builders Associate.
                    <br />
                    All Rights Reserved.
                </p>

            </div>

        </div>
    );
};

export default AuthLayout;