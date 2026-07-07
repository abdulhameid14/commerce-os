"use client";

import { motion } from "framer-motion";

import { StatCard } from "../../components/dashboard/stat-card";
import { RevenueChart } from "@/app/features/dashboard/revenue-chart";
import { RecentOrders } from "@/app/features/dashboard/recent-orders";
import { TopProducts } from "@/app/features/dashboard/top-products";
import { QuickActions } from "@/app/features/dashboard/quick-actions";

export default function DashboardPage() {
    const stats = [
        {
            title: "Revenue",
            value: "$24,580",
            trend: "+12.3%",
        },
        {
            title: "Orders",
            value: "1,248",
            trend: "+8.1%",
        },
        {
            title: "Products",
            value: "324",
            trend: "+4.2%",
        },
        {
            title: "Customers",
            value: "842",
            trend: "+15.6%",
        },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold text-white">
                    Dashboard
                </h1>

                <p className="mt-2 text-slate-400">
                    Overview of your ecommerce performance.
                </p>
            </motion.div>

            {/* Stats */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.05,
                        }}
                    >
                        <StatCard
                            title={card.title}
                            value={card.value}
                            trend={card.trend}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Revenue Chart */}
            <RevenueChart />

            {/* Bottom Section */}
            <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <RecentOrders />
                </div>

                <div>
                    <TopProducts />
                </div>
            </div>

            {/* Quick Actions */}
            <QuickActions />
        </div>
    );
}