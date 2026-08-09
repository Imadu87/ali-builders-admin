import { Search, SlidersHorizontal } from "lucide-react";

const ProjectFilters = ({
    search,
    setSearch,
    status,
    setStatus,
    category,
    setCategory,
}) => {
    return (
        <section
            className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                {/* Search */}
                <div className="relative flex-1">

                    <Search
                        size={19}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search projects..."
                        className="w-full rounded-xl border border-border bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-secondary focus:bg-white" />
                </div>


                {/* Filters */}

                <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative">
                        <SlidersHorizontal
                            size={16}
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                            value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)
                            }
                            className="w-full appearance-none rounded-xl border border-border bg-white py-3 pl-9 pr-8 text-sm outline-none focus:border-secondary sm:w-44">
                            <option value="All">
                                All Status
                            </option>

                            <option value="Completed">
                                Completed
                            </option>

                            <option value="In Progress">
                                In Progress
                            </option>

                            <option value="Planning">
                                Planning
                            </option>
                        </select>

                    </div>


                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-secondary sm:w-44">
                        <option value="All">
                            All Categories
                        </option>

                        <option value="Residential">
                            Residential
                        </option>

                        <option value="Commercial">
                            Commercial
                        </option>
                    </select>

                </div>

            </div>
        </section>
    );
};

export default ProjectFilters;