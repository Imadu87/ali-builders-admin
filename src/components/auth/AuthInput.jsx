import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

const AuthInput = forwardRef(
    (
        {
            label,
            error,
            success,
            className = "",
            ...props
        },
        ref
    ) => {

        return (

            <div>
                <label className="form-label">
                    {label}
                </label>

                <div className="relative">
                    <motion.input
                        ref={ref}
                        whileFocus={{
                            scale: 1.01,
                        }}
                        transition={{
                            duration: .2,
                        }}
                        className={`
                            form-input
                            pr-12
                            transition-all
                            duration-300
                            ${error
                                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                : ""
                            }
                            ${success
                                ? "border-secondary focus:border-secondary focus:ring-green-100"
                                : ""
                            }
                            ${className}
                        `}
                        {...props}
                    />

                    <AnimatePresence>
                        {success && !error && (
                            <motion.div
                                initial={{
                                    scale: 0,
                                    rotate: -90,
                                    opacity: 0,
                                }}

                                animate={{
                                    scale: 1,
                                    rotate: 0,
                                    opacity: 1,
                                }}

                                exit={{
                                    scale: 0,
                                    opacity: 0,
                                }}

                                transition={{
                                    duration: .25,
                                }}

                                className="
                                    absolute
                                    top-1/2
                                    right-4
                                    -translate-y-1/2
                                    text-2xl
                                    text-secondary
                                "

                            >
                                <HiCheckCircle />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: -5,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            exit={{
                                opacity: 0,
                            }}

                            className="
                                mt-2
                                text-sm
                                font-medium
                                text-red-500
                            "

                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        );
    }
);

export default AuthInput;