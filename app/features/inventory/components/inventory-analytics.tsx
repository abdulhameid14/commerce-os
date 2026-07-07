"use client";

export function InventoryAnalytics() {
    return (
        <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Total Stock
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    3,430
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Low Stock
                </p>

                <h3 className="mt-2 text-3xl font-bold text-yellow-400">
                    12
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Warehouses
                </p>

                <h3 className="mt-2 text-3xl font-bold text-blue-400">
                    2
                </h3>
            </div>
        </div>
    );
}