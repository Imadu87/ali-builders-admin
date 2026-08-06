import { motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";

const RecentInquiries = ({ inquiries = [], onViewAll }) => {

    return (
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
                duration: 0.4,
            }}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {/* Header */}
            <div
                className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                    <h2 className="font-semibold text-heading">
                        Recent Inquiries
                    </h2>
                    <p className="mt-1 text-xs text-text">
                        Latest customer inquiries
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onViewAll}
                    className="flex items-center gap-1 text-sm font-semibold text-secondary hover:underline">
                    View All
                    <ArrowRight size={15} />
                </button>
            </div>


            {/* Inquiries */}

            <div className="divide-y divide-border">
                {inquiries.map((inquiry) => (
                    <div
                        key={inquiry.id}
                        className="flex flex-col gap-3 px-5 py-4 transition hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between">
                        {/* User */}
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-secondary">
                                {inquiry.name.charAt(0)}
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-heading">
                                    {inquiry.name}
                                </p>
                                <p className="truncate text-xs text-text">
                                    {inquiry.subject}
                                </p>
                            </div>
                        </div>


                        {/* Status */}
                        <div className="flex items-center justify-between gap-4 sm:justify-end">
                            <span
                                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${inquiry.status === "New"
                                    ? "bg-green-50 text-green-600"
                                    : inquiry.status === "Pending"
                                        ? "bg-orange-50 text-orange-600"
                                        : "bg-gray-100 text-gray-600"
                                    }
                                `}
                            >
                                {inquiry.status}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-text">
                                <Clock3 size={13} />
                                {inquiry.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default RecentInquiries;