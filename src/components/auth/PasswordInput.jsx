import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    HiEye,
    HiEyeSlash,
    HiCheckCircle,
} from "react-icons/hi2";

const PasswordInput = forwardRef(

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

        const [show, setShow] = useState(false);

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
                        type={show ? "text" : "password"}
                        className={`
                            form-input
                            pr-24
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
                    <div className="
                        absolute
                        top-1/2
                        right-3
                        flex
                        -translate-y-1/2
                        items-center
                        gap-2
                    ">

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
                                    }}

                                    className="
                                        text-xl
                                        text-secondary
                                    "

                                >
                                    <HiCheckCircle />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            type="button"

                            whileTap={{
                                scale: .85,
                            }}

                            onClick={() =>
                                setShow(!show)
                            }

                            className="
                                text-xl
                                text-text
                                transition
                                hover:text-secondary
                            "

                        >
                            {show
                                ? <HiEyeSlash />
                                : <HiEye />
                            }
                        </motion.button>
                    </div>
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

export default PasswordInput;