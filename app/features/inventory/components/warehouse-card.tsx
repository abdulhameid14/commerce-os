"use client";

import { Warehouse } from "../types/warehouse.types";

interface Props {
    warehouse: Warehouse;
}

export function WarehouseCard({
    warehouse,
}: Props) {
    return (
        <div
            className="
            rounded-2xl
            border
            border-slate-800

            bg-slate-900/40

            p-5
            "
        >
            <h3 className="text-white font-semibold">
                {warehouse.name}
            </h3>

            <p className="mt-2 text-slate-400">
                {warehouse.location}
            </p>

            <div className="mt-4 space-y-2">
                <p className="text-slate-300">
                    Products: {warehouse.products}
                </p>

                <p className="text-slate-300">
                    Stock: {warehouse.stock}
                </p>
            </div>
        </div>
    );
}