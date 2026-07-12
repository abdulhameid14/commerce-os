import { api } from "@/app/services/api-client";

import { InventoryItem } from "../types/inventory.types";
import { InventoryMovement } from "../types/inventory-movement.types";
import { Supplier } from "../types/supplier.types";
import { PurchaseOrder } from "../types/purchase-order.types";
import { InventoryReport } from "../types/inventory-report.types";
import { Warehouse } from "../types/warehouse.types";

export const inventoryService = {
    async getInventory(): Promise<InventoryItem[]> {
        const { data } =
            await api.get("/inventory");

        return data;
    },

    async getMovements(): Promise<
        InventoryMovement[]
    > {
        const { data } =
            await api.get(
                "/inventory/movements"
            );

        return data;
    },

    async getSuppliers(): Promise<
        Supplier[]
    > {
        const { data } =
            await api.get(
                "/inventory/suppliers"
            );

        return data;
    },

    async getPurchaseOrders(): Promise<
        PurchaseOrder[]
    > {
        const { data } =
            await api.get(
                "/inventory/purchase-orders"
            );

        return data;
    },

    async getReports(): Promise<
        InventoryReport[]
    > {
        const { data } =
            await api.get(
                "/inventory/reports"
            );

        return data;
    },

    async getWarehouses(): Promise<
        Warehouse[]
    > {
        const { data } =
            await api.get(
                "/inventory/warehouses"
            );

        return data;
    },
};