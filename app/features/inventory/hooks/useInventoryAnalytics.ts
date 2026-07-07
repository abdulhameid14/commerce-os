import { inventoryItems } from "../data/mock-inventory";

export function useInventoryAnalytics() {
    const totalStock =
        inventoryItems.reduce(
            (total, item) =>
                total + item.stock,
            0
        );

    const lowStockCount =
        inventoryItems.filter(
            (item) =>
                item.status ===
                "Low Stock"
        ).length;

    const warehouseCount = 2;

    return {
        totalStock,
        lowStockCount,
        warehouseCount,
    };
}