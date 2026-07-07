"use client";

interface Props {
    open: boolean;
    onClose: () => void;
    order: any;
}

export function PurchaseOrderDetails({
    open,
    onClose,
    order,
}: Props) {
    if (!open || !order) return null;

    return (
        <div
            className="
            fixed inset-y-0 right-0 z-50
            w-full max-w-md
            border-l border-slate-800
            bg-slate-950
            p-6
            "
        >
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Purchase Order
                </h2>

                <button
                    onClick={onClose}
                    className="text-slate-400"
                >
                    ✕
                </button>
            </div>

            <div className="mt-6 space-y-4">
                <p className="text-slate-300">
                    ID: {order.id}
                </p>

                <p className="text-slate-300">
                    Supplier: {order.supplier}
                </p>

                <p className="text-slate-300">
                    Total: ${order.total}
                </p>

                <p className="text-slate-300">
                    Status: {order.status}
                </p>

                <p className="text-slate-300">
                    Date: {order.createdAt}
                </p>
            </div>
        </div>
    );
}