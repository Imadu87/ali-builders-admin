import { AnimatePresence, motion } from "framer-motion";
import {
    HiCheckCircle,
    HiExclamationCircle,
} from "react-icons/hi2";

const AuthAlert = ({
    type,
    message,
}) => {

    if (!message) return null;

    const success = type === "success";

    return (

        <AnimatePresence>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -20,
                    scale: .96,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    y: -20,
                }}
                transition={{
                    duration: .25,
                }}
                className={`
                    mb-6
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    p-4
                    ${success
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }

                `}
            >
                {success
                    ? <HiCheckCircle className="text-2xl" />
                    : <HiExclamationCircle className="text-2xl" />
                }
                <p className="font-medium">
                    {message}
                </p>
            </motion.div>
        </AnimatePresence>
    );
};

export default AuthAlert;