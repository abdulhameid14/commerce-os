"use client";

interface ReportStatusBadgeProps {
    status: "Completed" | "Processing";
}

export function ReportStatusBadge({
    status,
}: ReportStatusBadgeProps) {
    const styles = {
        Completed:
            "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

        Processing:
            "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    };

    return (
        <span
            className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
                ${styles[status]}
            `}
        >
            {status}
        </span>
    );
}