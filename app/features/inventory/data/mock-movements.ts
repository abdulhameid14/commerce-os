import { InventoryMovement } from "../types/inventory-movement.types";

export const movements: InventoryMovement[] = [
    {
        id: "MOV-1001",
        productName: "iPhone 17 Pro",
        type: "IN",
        quantity: 50,
        warehouse: "Main Warehouse",
        createdAt: "2026-07-01",
    },

    {
        id: "MOV-1002",
        productName: "MacBook Pro",
        type: "OUT",
        quantity: 5,
        warehouse: "Main Warehouse",
        createdAt: "2026-07-03",
    },

    {
        id: "MOV-1003",
        productName: "AirPods Pro",
        type: "TRANSFER",
        quantity: 20,
        warehouse: "Secondary Warehouse",
        createdAt: "2026-07-04",
    },
];