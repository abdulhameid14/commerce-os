"use client";

import { motion } from "framer-motion";

import { StatCard } from "../../components/dashboard/stat-card";
import { RevenueChart } from "@/app/features/dashboard/components/revenue-chart";
import { RecentOrders } from "@/app/features/dashboard/components/recent-orders";
import { TopProducts } from "@/app/features/dashboard/components/top-products";
import { QuickActions } from "@/app/features/dashboard/components/quick-actions";
import { useDashboard } from "@/app/features/dashboard/hooks/use-dashboard";
import { LoadingState } from "@/app/components/ui/loading-state";
import { ErrorState } from "@/app/components/ui/error-state";

export default function DashboardPage() {
    const {
        data,
        isLoading,
        error,
    } = useDashboard();
    if (isLoading) {
        return <LoadingState />;
    }

    if (error) {
        return (
            <ErrorState message="Failed to load dashboard" />
        );
    }
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
                {data?.stats.map((card: any, index: number) => (
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
            <RevenueChart
                data={data?.revenue ?? []}
            />

            {/* Bottom Section */}
            <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <RecentOrders
                        orders={data?.recentOrders ?? []}
                    />
                </div>

                <div>
                    <TopProducts
                        products={data?.topProducts ?? []}
                    />
                </div>
            </div>

            {/* Quick Actions */}
            <QuickActions />
        </div>
    );
}