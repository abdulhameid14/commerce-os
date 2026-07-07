"use client";

interface AnalyticsFiltersProps {
    period: string;
    onChange: (value: string) => void;
}

export function AnalyticsFilters({
    period,
    onChange,
}: AnalyticsFiltersProps) {
    return (
        <div
            className="
            flex
            flex-wrap
            gap-3

            rounded-2xl
            border
            border-slate-800

            bg-slate-900/40

            p-4
            "
        >
            {[
                "7 Days",
                "30 Days",
                "90 Days",
                "1 Year",
            ].map((item) => (
                <button
                    key={item}
                    onClick={() =>
                        onChange(item)
                    }
                    className={`
                    rounded-xl
                    px-4
                    py-2
                    text-sm

                    transition-all

                    ${period === item
                            ? "bg-blue-600 text-white"
                            : "bg-slate-950 text-slate-400"
                        }
                    `}
                >
                    {item}
                </button>
            ))}

            <button
                className="
                rounded-xl
                border
                border-slate-800

                px-4
                py-2

                text-sm
                text-slate-300
                "
            >
                Custom Range
            </button>
        </div>
    );
}