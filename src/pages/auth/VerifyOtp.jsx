import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

import OTPInput from "../../components/auth/OTPInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthAlert from "../../components/auth/AuthAlert";

const VerifyOtp = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [shake, setShake] = useState(false);
    const [success, setSuccess] = useState(false);
    const [alert, setAlert] = useState({
        type: "",
        message: "",
    });

    useEffect(() => {
        if (timeLeft === 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    const handleSubmit = async (e) => {
        e.preventDefault();
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

        if (otp === "1234") {
            setSuccess(true);
            setAlert({
                type: "success",
                message: "OTP Verified Successfully.",
            });
            setTimeout(() => {
                navigate("/reset-password");
            }, 1200);
        }
        else {
            setShake(true);
            setAlert({
                type: "error",
                message: "Invalid OTP. Please try again.",
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
                    } : {
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
                    Verify OTP
                </h1>
                <p className="mt-4 leading-7 text-text">
                    We've sent a verification code to your
                    registered email address. Enter the
                    verification code below.
                </p>
            </motion.div>

            <AuthAlert
                type={alert.type}
                message={alert.message}
            />

            {/* Form */}

            <form
                onSubmit={handleSubmit}
                className="space-y-8"
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: .15,
                    }}
                >
                    <OTPInput
                        length={4}
                        onChange={setOtp}
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
                        disabled={otp.length !== 4}
                    >
                        Verify OTP
                    </AuthButton>
                </motion.div>
            </form>

            {/* Timer */}

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
                <p className="text-sm text-text">
                    Didn't receive the code?
                </p>
                {timeLeft > 0 ? (
                    <motion.div
                        key={timeLeft}
                        initial={{
                            scale: .8,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        className="mt-3"
                    >
                        <span className="rounded-full bg-green-50 px-5 py-2 text-lg font-bold text-secondary">
                            {minutes}:{seconds}
                        </span>
                    </motion.div>
                ) : (
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: .95,
                        }}
                        type="button"
                        onClick={() => {
                            setTimeLeft(60);
                            setAlert({
                                type: "success",
                                message: "OTP sent again.",
                            });
                        }}
                        className="
                            mt-4
                            font-semibold
                            text-secondary
                            transition
                            hover:underline
                        "
                    >
                        Resend OTP
                    </motion.button>
                )}
            </motion.div>

            {/* Footer */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: .45,
                }}
                className="mt-8 text-center"
            >
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
                    ← Back
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default VerifyOtp;