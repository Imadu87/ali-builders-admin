import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthAlert from "../../components/auth/AuthAlert";

import { forgotPasswordSchema } from "../../validations/auth.validation";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(false);
    const [success, setSuccess] = useState(false);
    const [alert, setAlert] = useState({
        type: "",
        message: "",
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
        },
    });
    const email = watch("email");
    const onSubmit = async (data) => {
        setAlert({
            type: "",
            message: "",
        });
        setLoading(true);
        await new Promise((resolve) =>
            setTimeout(resolve, 1800)
        );
        setLoading(false);
        // Demo

        if (data.email === "admin@gmail.com") {
            setSuccess(true);
            setAlert({
                type: "success",
                message: "OTP sent successfully.",
            });
            setTimeout(() => {
                navigate("/verify-otp");
            }, 1200);
        }
        else {
            setShake(true);
            setAlert({
                type: "error",
                message: "Email not found.",
            });
            setTimeout(() => {
                setShake(false);
            }, 500);
        }
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}

            animate={
                shake
                    ? {
                        x: [-10, 10, -8, 8, -6, 6, 0],
                        opacity: 1,
                        y: 0,
                    }
                    : {
                        opacity: success ? 0 : 1,
                        y: 0,
                        scale: success ? .96 : 1,
                    }
            }
            transition={{
                duration: .45,
            }}
        >

            {/* Heading */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: .1,
                }}
                className="mb-8 text-center"
            >

                <h1 className="text-3xl font-bold text-heading">
                    Forgot Password
                </h1>
                <p className="mt-3 text-text">
                    Enter your registered email address.
                    We'll send you a verification OTP.
                </p>
            </motion.div>

            {/* Alert */}

            <AuthAlert
                type={alert.type}
                message={alert.message}
            />

            {/* Form */}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -20,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: .15,
                    }}
                >

                    <AuthInput
                        label="Email Address"
                        type="email"
                        autoFocus
                        autoComplete="email"
                        placeholder="admin@example.com"
                        error={errors.email?.message}
                        success={
                            email &&
                            !errors.email
                        }
                        {...register("email")}
                    />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: .25,
                    }}
                >
                    <AuthButton
                        loading={loading}
                        disabled={!email}
                    >
                        Send OTP
                    </AuthButton>
                </motion.div>
            </form>

            {/* Footer */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: .35,
                }}
                className="mt-8 text-center"
            >
                <Link
                    to="/"
                    className="
                        text-sm
                        font-medium
                        text-secondary
                        transition
                        hover:underline
                    "

                >
                    ← Back to Login
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default ForgotPassword;