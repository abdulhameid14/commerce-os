"use client";

import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";

const data = [
    { month: "Jan", customers: 120 },
    { month: "Feb", customers: 190 },
    { month: "Mar", customers: 250 },
    { month: "Apr", customers: 310 },
    { month: "May", customers: 420 },
    { month: "Jun", customers: 520 },
];

export function CustomerGrowthChart() {
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
                Customer Growth
            </h3>

            <div className="h-[300px]">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <AreaChart data={data}>
                        <XAxis dataKey="month" />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="customers"
                            stroke="#3B82F6"
                            fill="#3B82F6"
                            fillOpacity={0.15}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}