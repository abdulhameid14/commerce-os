"use client";

import { useState } from "react";

import { AppButton } from "../../components/ui/app-button";

import { AnalyticsOverview } from "../../features/analytics/components/analytics-overview";
import { AnalyticsFilters } from "../../features/analytics/components/analytics-filters";

import { RevenueAnalyticsChart } from "../../features/analytics/components/revenue-analytics-chart";
import { OrdersAnalyticsChart } from "../../features/analytics/components/orders-analytics-chart";

import { CustomerAnalytics } from "../../features/analytics/components/customer-analytics";

import { TopProductsAnalytics } from "../../features/analytics/components/top-products-analytics";
import { TopCategoriesAnalytics } from "../../features/analytics/components/top-categories-analytics";

import { TrafficSources } from "../../features/analytics/components/traffic-sources";
import { DeviceAnalytics } from "../../features/analytics/components/device-analytics";

import { ConversionAnalytics } from "../../features/analytics/components/conversion-analytics";
import { CustomerLifetimeValue } from "../../features/analytics/components/customer-lifetime-value";

import { SalesFunnelAnalytics } from "../../features/analytics/components/sales-funnel-analytics";
import { GeographicAnalytics } from "../../features/analytics/components/geographic-analytics";

import { AnalyticsExportModal } from "../../features/analytics/components/analytics-export-modal";

export default function AnalyticsPage() {
    const [period, setPeriod] =
        useState("30 Days");

    const [openExport, setOpenExport] =
        useState(false);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div
                className="
                flex
                flex-col
                gap-4

                md:flex-row
                md:items-center
                md:justify-between
                "
            >
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Analytics
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Track store performance and growth.
                    </p>
                </div>

                <AppButton
                    className="w-auto px-6"
                    onClick={() =>
                        setOpenExport(true)
                    }
                >
                    Export Analytics
                </AppButton>
            </div>

            {/* Filters */}
            <AnalyticsFilters
                period={period}
                onChange={setPeriod}
            />

            {/* Overview Cards */}
            <AnalyticsOverview />

            {/* Charts */}
            <div className="grid gap-6 xl:grid-cols-2">
                <RevenueAnalyticsChart />
                <OrdersAnalyticsChart />
            </div>

            {/* Customer Metrics */}
            <CustomerAnalytics />

            <ConversionAnalytics />

            <CustomerLifetimeValue />

            {/* Products & Categories */}
            <div className="grid gap-6 xl:grid-cols-2">
                <TopProductsAnalytics />
                <TopCategoriesAnalytics />
            </div>

            {/* Traffic & Devices */}
            <div className="grid gap-6 xl:grid-cols-2">
                <TrafficSources />
                <DeviceAnalytics />
            </div>

            {/* Funnel & Geography */}
            <div className="grid gap-6 xl:grid-cols-2">
                <SalesFunnelAnalytics />
                <GeographicAnalytics />
            </div>

            {/* Export Modal */}
            <AnalyticsExportModal
                open={openExport}
                onClose={() =>
                    setOpenExport(false)
                }
            />
        </div>
    );
}