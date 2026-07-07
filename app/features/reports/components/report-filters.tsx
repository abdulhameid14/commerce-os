"use client";

import { CalendarDays } from "lucide-react";

interface ReportFiltersProps {
    period: string;
    onChange: (value: string) => void;
}

export function ReportFilters({
    period,
    onChange,
}: ReportFiltersProps) {
    const filters = [
        "Today",
        "7 Days",
        "30 Days",
        "90 Days",
    ];

    return (
        <div
            className="
            flex
            flex-col
            gap-4

            md:flex-row
            md:items-center
            md:justify-between
            "
        >
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() =>
                            onChange(filter)
                        }
                        className={`
                            rounded-xl
                            px-4
                            py-2

                            text-sm
                            font-medium

                            transition-all

                            ${period === filter
                                ? "bg-blue-600 text-white"
                                : "border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white"
                            }
                        `}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <button
                className="
                flex
                items-center
                gap-2

                rounded-xl
                border
                border-slate-800

                bg-slate-900/40

                px-4
                py-2

                text-slate-300
                "
            >
                <CalendarDays size={16} />
                Custom Range
            </button>
        </div>
    );
}