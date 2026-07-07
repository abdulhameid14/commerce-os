"use client";

import { warehouses } from "../data/mock-warehouses";
import { WarehouseCard } from "./warehouse-card";

export function WarehouseGrid() {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {warehouses.map((warehouse) => (
                <WarehouseCard
                    key={warehouse.id}
                    warehouse={warehouse}
                />
            ))}
        </div>
    );
}