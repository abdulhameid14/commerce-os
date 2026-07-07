"use client";

import { FileText } from "lucide-react";

export function ReportsEmptyState() {
    return (
        <div
            className="
            flex
            flex-col
            items-center
            justify-center

            rounded-2xl
            border
            border-dashed
            border-slate-800

            py-20
            "
        >
            <FileText
                size={42}
                className="mb-4 text-slate-600"
            />

            <h3 className="text-lg font-semibold text-white">
                No reports found
            </h3>

            <p className="mt-2 text-slate-400">
                Generate your first report.
            </p>
        </div>
    );
}