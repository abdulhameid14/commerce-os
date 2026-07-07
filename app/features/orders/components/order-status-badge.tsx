interface OrderStatusBadgeProps {
    status:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled"
    | "Refunded";
}

export function OrderStatusBadge({
    status,
}: OrderStatusBadgeProps) {
    const styles = {
        Pending:
            "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

        Processing:
            "bg-blue-500/10 text-blue-400 border-blue-500/20",

        Shipped:
            "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",

        Delivered:
            "bg-green-500/10 text-green-400 border-green-500/20",

        Cancelled:
            "bg-red-500/10 text-red-400 border-red-500/20",

        Refunded:
            "bg-purple-500/10 text-purple-400 border-purple-500/20",
    };

    return (
        <span
            className={`
      inline-flex
      items-center

      rounded-full
      border

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