import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthAlert from "../../components/auth/AuthAlert";

import { resetPasswordSchema } from "../../validations/auth.validation";

const ResetPassword = () => {
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
        resolver: zodResolver(resetPasswordSchema),
        mode: "onChange",
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

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

        // Demo Success

        if (data.password === data.confirmPassword) {
            setSuccess(true);
            setAlert({
                type: "success",
                message: "Password updated successfully.",
            });
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } else {
            setShake(true);
            setAlert({
                type: "error",
                message: "Passwords do not match.",
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
                    Reset Password
                </h1>

                <p className="mt-3 text-text">
                    Create a strong new password for your account.
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

                    <PasswordInput
                        label="New Password"
                        placeholder="Enter new password"
                        error={errors.password?.message}
                        success={
                            password &&
                            !errors.password
                        }
                        {...register("password")}
                    />
                </motion.div>

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
                        delay: .25,
                    }}
                >

                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Confirm password"
                        error={errors.confirmPassword?.message}
                        success={
                            confirmPassword &&
                            !errors.confirmPassword
                        }
                        {...register("confirmPassword")}
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
                        delay: .35,
                    }}
                >
                    <AuthButton
                        loading={loading}
                        disabled={
                            !password ||
                            !confirmPassword
                        }
                    >
                        Update Password
                    </AuthButton>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default ResetPassword;