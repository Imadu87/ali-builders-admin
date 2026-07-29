import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthAlert from "../../components/auth/AuthAlert";

import { loginSchema } from "../../validations/auth.validation";
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const navigate = useNavigate();

    const { loading, login } = useLogin();

    const [alert, setAlert] = useState({
        type: "",
        message: "",
    });

    const [shake, setShake] = useState(false);

    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const email = watch("email");
    const password = watch("password");
    const remember = watch("remember");

    const onSubmit = async (data) => {
        setAlert({
            type: "",
            message: "",
        });
        const result = await login(data);
        if (result.success) {
            setSuccess(true);
            setAlert({
                type: "success",
                message: "Welcome Back Admin.",
            });
            setTimeout(() => {
                navigate("/dashboard");
            }, 1200);
        }
        else {
            setShake(true);
            setAlert({
                type: "error",
                message: result.message,
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
                        scale: 1,
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
                    Welcome Back
                </h1>
                <p className="mt-3 text-text">
                    Sign in to access the Admin Dashboard.
                </p>
            </motion.div>

            <AuthAlert
                type={alert.type}
                message={alert.message}
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >
                {/* Email */}

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

                {/* Password */}

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
                        label="Password"
                        placeholder="Enter Password"
                        error={errors.password?.message}
                        success={
                            password &&
                            !errors.password
                        }
                        {...register("password")}
                    />
                </motion.div>

                {/* Remember */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: .30,
                    }}
                    className="flex items-center justify-between"
                >

                    <label className="flex cursor-pointer items-center gap-3">

                        <input
                            type="checkbox"
                            className="hidden"
                            {...register("remember")}
                        />

                        <motion.div
                            whileTap={{
                                scale: .9,
                            }}
                            className="
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded
                            border-2
                            border-secondary
                            transition-all
                        "
                        >
                            {remember && (
                                <motion.div
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                    }}
                                    className="
                                        h-3
                                        w-3
                                        rounded
                                        bg-secondary
                                    "
                                />
                            )}
                        </motion.div>
                        <span className="text-sm">
                            Remember Me
                        </span>
                    </label>
                    <Link
                        to="/forgot-password"
                        className="
                            text-sm
                            font-medium
                            text-secondary
                            transition
                            hover:underline
                        "
                    >
                        Forgot Password?
                    </Link>
                </motion.div>

                {/* Button */}

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
                            !email ||
                            !password
                        }
                    >
                        Login
                    </AuthButton>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default Login;