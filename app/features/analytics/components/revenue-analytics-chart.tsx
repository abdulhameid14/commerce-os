"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
} from "recharts";

const data = [
    { day: "Mon", revenue: 1200 },
    { day: "Tue", revenue: 1800 },
    { day: "Wed", revenue: 1500 },
    { day: "Thu", revenue: 2600 },
    { day: "Fri", revenue: 2200 },
    { day: "Sat", revenue: 3400 },
    { day: "Sun", revenue: 2900 },
];

export function RevenueAnalyticsChart() {
    return (
        <div
            className="
            rounded-2xl
            border
            border-slate-800

            bg-slate-900/40

            p-6
            "
        >
            <h3 className="mb-6 text-lg font-semibold text-white">
                Revenue Analytics
            </h3>

            <div className="h-[320px]">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart data={data}>
                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#3B82F6"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}