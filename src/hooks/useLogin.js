import { useState } from "react";

const useLogin = () => {

    const [loading, setLoading] = useState(false);

    const login = async (data) => {

        setLoading(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 1800)
        );

        setLoading(false);

        // Demo

        if (
            data.email === "admin@gmail.com" &&
            data.password === "123456"
        ) {
            return {
                success: true,
                message: "Login Successful",
            };
        }

        return {
            success: false,
            message: "Invalid Email or Password",
        };
    };

    return {
        loading,
        login,
    };
};

export default useLogin;