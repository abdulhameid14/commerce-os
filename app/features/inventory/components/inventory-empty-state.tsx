"use client";

export function InventoryEmptyState() {
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
            <h3 className="text-lg font-semibold text-white">
                No inventory found
            </h3>

            <p className="mt-2 text-slate-400">
                Products will appear here once created.
            </p>
        </div>
    );
}