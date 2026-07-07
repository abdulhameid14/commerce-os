"use client";

interface OrderFiltersProps {
    open: boolean;
    onClose: () => void;
}

export function OrderFilters({
    open,
    onClose,
}: OrderFiltersProps) {
    if (!open) return null;

    return (
        <div
            className="
      fixed
      inset-0
      z-50

      bg-black/50
      backdrop-blur-sm
      "
        >
            <div
                className="
        absolute
        right-6
        top-24

        w-80

        rounded-2xl
        border
        border-slate-800

        bg-slate-950

        p-5
        "
            >
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-semibold text-white">
                        Filters
                    </h3>

                    <button
                        onClick={onClose}
                        className="text-slate-400"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-4">
                    <select
                        className="
            h-11
            w-full
            rounded-xl
            border
            border-slate-800
            bg-slate-900
            px-3
            text-white
            "
                    >
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                    </select>

                    <select
                        className="
            h-11
            w-full
            rounded-xl
            border
            border-slate-800
            bg-slate-900
            px-3
            text-white
            "
                    >
                        <option>All Payments</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Failed</option>
                    </select>
                </div>
            </div>
        </div>
    );
}