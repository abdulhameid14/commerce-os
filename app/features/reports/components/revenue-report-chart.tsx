"use client";

import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 18000 },
    { month: "Mar", value: 22000 },
    { month: "Apr", value: 19000 },
    { month: "May", value: 26000 },
    { month: "Jun", value: 32000 },
];

export function RevenueReportChart() {
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
            <h3 className="mb-5 text-lg font-semibold text-white">
                Revenue Report
            </h3>

            <div className="h-[300px]">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart data={data}>
                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3B82F6"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}