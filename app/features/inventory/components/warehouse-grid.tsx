"use client";

import { useWarehouses } from "../hooks/use-warehouses";

import { WarehouseCard } from "./warehouse-card";

export function WarehouseGrid() {
    const {
        data: warehouses = [],
    } = useWarehouses();

    return (
        <div className="grid gap-5 md:grid-cols-2">
            {warehouses.map(
                (warehouse) => (
                    <WarehouseCard
                        key={warehouse.id}
                        warehouse={
                            warehouse
                        }
                    />
                )
            )}
        </div>
    );
}