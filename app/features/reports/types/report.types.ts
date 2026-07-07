export interface ReportCard {
    id: string;
    title: string;
    value: string;
    change: string;
}

export interface ReportRecord {
    id: string;
    reportType: string;
    generatedAt: string;
    generatedBy: string;
    format: "PDF" | "CSV" | "Excel";
    status: "Completed" | "Processing";
}