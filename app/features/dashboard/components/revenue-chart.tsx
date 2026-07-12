"use client";

import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

interface RevenueItem {
    name: string;
    revenue: number;
}

interface RevenueChartProps {
    data: RevenueItem[];
}

export function RevenueChart({
    data,
}: RevenueChartProps) {
    return (
        <div
            className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/40
            backdrop-blur-sm
            p-6
            "
        >
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                    Revenue Overview
                </h3>

                <p className="text-sm text-slate-400">
                    Last 7 days revenue
                </p>
            </div>

            <div className="h-[300px]">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart data={data}>
                        <Tooltip
                            contentStyle={{
                                background: "#0f172a",
                                border: "1px solid #1e293b",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                        />

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