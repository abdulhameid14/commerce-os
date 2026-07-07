"use client";

interface LowStockAlertProps {
    count: number;
}

export function LowStockAlert({
    count,
}: LowStockAlertProps) {
    if (count === 0) return null;

    return (
        <div
            className="
            rounded-2xl
            border
            border-yellow-500/20

            bg-yellow-500/10

            p-4
            "
        >
            <p className="font-medium text-yellow-400">
                {count} products are running low on stock.
            </p>
        </div>
    );
}