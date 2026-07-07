interface Props {
    status: "Active" | "Expired";
}

export function CouponStatusBadge({
    status,
}: Props) {
    return (
        <span
            className={`
            rounded-full
            px-3
            py-1
            text-xs

            ${status === "Active"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }
            `}
        >
            {status}
        </span>
    );
}