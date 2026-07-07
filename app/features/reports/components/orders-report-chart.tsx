"use client";

import {
    BarChart,
    Bar,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";

const data = [
    { month: "Jan", orders: 220 },
    { month: "Feb", orders: 340 },
    { month: "Mar", orders: 410 },
    { month: "Apr", orders: 390 },
    { month: "May", orders: 520 },
    { month: "Jun", orders: 610 },
];

export function OrdersReportChart() {
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
                Orders Report
            </h3>

            <div className="h-[300px]">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <BarChart data={data}>
                        <XAxis dataKey="month" />

                        <Tooltip />

                        <Bar
                            dataKey="orders"
                            fill="#3B82F6"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}