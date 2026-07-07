interface CustomerStatusBadgeProps {
    status: "active" | "inactive";
}

export function CustomerStatusBadge({
    status,
}: CustomerStatusBadgeProps) {
    return (
        <span
            className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-medium

            ${status === "active"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-slate-700/40 text-slate-400"
                }
            `}
        >
            {status}
        </span>
    );
}