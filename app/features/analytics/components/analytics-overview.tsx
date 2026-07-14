"use client";

import { useAnalytics } from "../hooks/useAnalytics";
export function AnalyticsOverview() {
    const { data = [], isLoading } = useAnalytics();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {data.map((card) => (
                <div
                    key={card.id}
                    className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/40
                    p-6
                    "
                >
                    <p className="text-sm text-slate-400">
                        {card.title}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                        {card.value}
                    </h3>

                    <span
                        className="
                        mt-3
                        inline-flex

                        rounded-full

                        bg-green-500/10

                        px-2
                        py-1

                        text-xs
                        text-green-400
                        "
                    >
                        {card.growth}
                    </span>
                </div>
            ))}
        </div>
    );
}