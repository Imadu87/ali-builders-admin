import { motion } from "framer-motion";

const AuthButton = ({
    children,
    loading,
    disabled,
    ...props
}) => {

    return (

        <motion.button

            type="submit"

            whileHover={{
                scale: disabled ? 1 : 1.02,
            }}

            whileTap={{
                scale: disabled ? 1 : .97,
            }}

            animate={{
                borderRadius: loading ? 999 : 12,
            }}

            transition={{
                duration: .25,
            }}

            disabled={loading || disabled}

            {...props}

            className="
                btn-primary
                w-full
                overflow-hidden
                disabled:cursor-not-allowed
                disabled:opacity-60
            "

        >

            {loading ? (

                <motion.div

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                    className="flex items-center justify-center gap-3"

                >

                    <motion.div

                        animate={{
                            rotate: 360,
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: .8,
                            ease: "linear",
                        }}

                        className="
                            h-5
                            w-5
                            rounded-full
                            border-2
                            border-white
                            border-t-transparent
                        "

                    />

                    Signing In...

                </motion.div>

            ) : (

                <motion.span

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                >
                    {children}
                </motion.span>
            )}
        </motion.button>
    );
};

export default AuthButton;