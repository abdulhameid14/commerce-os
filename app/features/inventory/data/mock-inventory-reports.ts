import { InventoryReport } from "../types/inventory-report.types";

export const mockInventoryReports: InventoryReport[] = [
    {
        id: "REP-001",
        reportType: "Stock Summary",
        generatedAt: "2026-07-01",
        generatedBy: "Admin",
        format: "PDF",
        status: "Completed",
    },
    {
        id: "REP-002",
        reportType: "Low Stock Report",
        generatedAt: "2026-07-03",
        generatedBy: "Admin",
        format: "Excel",
        status: "Completed",
    },
    {
        id: "REP-003",
        reportType: "Warehouse Report",
        generatedAt: "2026-07-05",
        generatedBy: "Manager",
        format: "CSV",
        status: "Processing",
    },
];