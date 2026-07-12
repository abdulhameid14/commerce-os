"use client";

import { useInventory } from "../hooks/use-inventory";
import { useWarehouses } from "../hooks/use-warehouses";

export function InventoryAnalytics() {
    const { data: inventory = [] } =
        useInventory();

    const { data: warehouses = [] } =
        useWarehouses();

    const totalStock =
        inventory.reduce(
            (total, item) =>
                total + item.stock,
            0
        );

    const lowStockCount =
        inventory.filter(
            (item) =>
                item.status ===
                "Low Stock"
        ).length;

    return (
        <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Total Stock
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    {totalStock}
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Low Stock
                </p>

                <h3 className="mt-2 text-3xl font-bold text-yellow-400">
                    {lowStockCount}
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Warehouses
                </p>

                <h3 className="mt-2 text-3xl font-bold text-blue-400">
                    {warehouses.length}
                </h3>
            </div>
        </div>
    );
}