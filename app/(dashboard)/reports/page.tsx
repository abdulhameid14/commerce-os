"use client";

import { useState } from "react";

import { ReportsOverview } from "../../features/reports/components/reports-overview";
import { ReportsTable } from "../../features/reports/components/reports-table";
import { ReportFilters } from "../../features/reports/components/report-filters";
import { ExportReportModal } from "../../features/reports/components/export-report-modal";
import { ReportAnalyticsCards } from "../../features/reports/components/report-analytics-cards";
import { RevenueReportChart } from "../../features/reports/components/revenue-report-chart";
import { OrdersReportChart } from "../../features/reports/components/orders-report-chart";
import { CustomerGrowthChart } from "../../features/reports/components/customer-growth-chart";
import { AppButton } from "../../components/ui/app-button";

export default function ReportsPage() {
    const [period, setPeriod] =
        useState("30 Days");

    const [openExport, setOpenExport] =
        useState(false);

    return (
        <div className="space-y-8">
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
                        Reports
                    </h1>

                    <p className="mt-2 text-slate-400">
                        View and export business reports.
                    </p>
                </div>

                <AppButton
                    className="w-auto px-6"
                    onClick={() =>
                        setOpenExport(true)
                    }
                >
                    Export Report
                </AppButton>
            </div>

            <ReportFilters
                period={period}
                onChange={setPeriod}
            />

            <ReportsOverview />
            <ReportAnalyticsCards />

            <div className="grid gap-6 xl:grid-cols-2">
                <RevenueReportChart />
                <OrdersReportChart />
            </div>

            <CustomerGrowthChart />

            <ReportsTable />

            <ExportReportModal
                open={openExport}
                onClose={() =>
                    setOpenExport(false)
                }
            />
        </div>
    );
}