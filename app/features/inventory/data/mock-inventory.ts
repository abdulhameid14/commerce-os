import { InventoryItem } from "../types/inventory.types";

export const inventoryItems: InventoryItem[] = [
    {
        id: "1",
        productName: "iPhone 17 Pro",
        sku: "IP17P",
        stock: 42,
        reserved: 6,
        warehouse: "Main Warehouse",
        status: "In Stock",
    },

    {
        id: "2",
        productName: "MacBook Pro",
        sku: "MBP16",
        stock: 8,
        reserved: 2,
        warehouse: "Main Warehouse",
        status: "Low Stock",
    },

    {
        id: "3",
        productName: "AirPods Pro",
        sku: "APP2",
        stock: 0,
        reserved: 0,
        warehouse: "Secondary Warehouse",
        status: "Out of Stock",
    },
];