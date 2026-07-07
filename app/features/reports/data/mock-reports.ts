import {
    ReportCard,
    ReportRecord,
} from "../types/report.types";

export const reportCards: ReportCard[] = [
    {
        id: "1",
        title: "Revenue Report",
        value: "$24,580",
        change: "+12.3%",
    },
    {
        id: "2",
        title: "Orders Report",
        value: "1,248",
        change: "+8.1%",
    },
    {
        id: "3",
        title: "Customers Report",
        value: "842",
        change: "+15.6%",
    },
    {
        id: "4",
        title: "Refund Report",
        value: "$1,420",
        change: "-3.2%",
    },
];

export const reportHistory: ReportRecord[] = [
    {
        id: "#REP-1001",
        reportType: "Revenue",
        generatedAt: "2026-07-01",
        generatedBy: "Admin",
        format: "PDF",
        status: "Completed",
    },
    {
        id: "#REP-1002",
        reportType: "Orders",
        generatedAt: "2026-07-02",
        generatedBy: "Admin",
        format: "CSV",
        status: "Completed",
    },
    {
        id: "#REP-1003",
        reportType: "Customers",
        generatedAt: "2026-07-03",
        generatedBy: "Sarah",
        format: "Excel",
        status: "Processing",
    },
];