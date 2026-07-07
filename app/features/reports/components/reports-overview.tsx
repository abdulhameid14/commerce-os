"use client";

import { reportCards } from "../data/mock-reports";

export function ReportsOverview() {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reportCards.map((report) => (
                <div
                    key={report.id}
                    className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/40
                    p-6
                    "
                >
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-400">
                            {report.title}
                        </p>

                        <span
                            className="
                            rounded-full
                            bg-emerald-500/10
                            px-2
                            py-1
                            text-xs
                            text-emerald-400
                            "
                        >
                            {report.change}
                        </span>
                    </div>

                    <h3
                        className="
                        mt-4
                        text-3xl
                        font-bold
                        text-white
                        "
                    >
                        {report.value}
                    </h3>
                </div>
            ))}
        </div>
    );
}