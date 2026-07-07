export interface InventoryReport {
    id: string;
    reportType: string;
    generatedAt: string;
    generatedBy: string;
    format: string;
    status: "Completed" | "Processing";
}