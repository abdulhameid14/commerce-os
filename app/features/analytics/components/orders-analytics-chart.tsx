"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", orders: 420 },
    { month: "Feb", orders: 510 },
    { month: "Mar", orders: 620 },
    { month: "Apr", orders: 740 },
    { month: "May", orders: 680 },
    { month: "Jun", orders: 850 },
];

export function OrdersAnalyticsChart() {
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
                Orders Analytics
            </h3>

            <div className="h-[320px]">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <BarChart data={data}>
                        <Tooltip />

                        <Bar
                            dataKey="orders"
                            fill="#3B82F6"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}