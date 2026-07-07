import { PurchaseOrder } from "../types/purchase-order.types";

export const mockPurchaseOrders: PurchaseOrder[] = [
    {
        id: "PO-1001",
        supplier: "Apple Supplier Ltd",
        total: 25000,
        status: "Pending",
        createdAt: "2026-07-01",
    },
    {
        id: "PO-1002",
        supplier: "Samsung Trading",
        total: 18500,
        status: "Approved",
        createdAt: "2026-07-03",
    },
    {
        id: "PO-1003",
        supplier: "Logitech Global",
        total: 9200,
        status: "Received",
        createdAt: "2026-07-05",
    },
];