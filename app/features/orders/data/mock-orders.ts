import { Order } from "../types/order.types";

export const mockOrders: Order[] = [
    {
        id: "ORD-1024",
        customer: "John Smith",
        email: "john@example.com",
        items: 3,
        total: 240,
        paymentStatus: "Paid",
        status: "Delivered",
        createdAt: "2026-07-01",
    },

    {
        id: "ORD-1025",
        customer: "Sarah Wilson",
        email: "sarah@example.com",
        items: 2,
        total: 480,
        paymentStatus: "Paid",
        status: "Processing",
        createdAt: "2026-07-02",
    },

    {
        id: "ORD-1026",
        customer: "Michael Brown",
        email: "michael@example.com",
        items: 1,
        total: 190,
        paymentStatus: "Pending",
        status: "Pending",
        createdAt: "2026-07-03",
    },

    {
        id: "ORD-1027",
        customer: "Emma Johnson",
        email: "emma@example.com",
        items: 4,
        total: 620,
        paymentStatus: "Paid",
        status: "Shipped",
        createdAt: "2026-07-04",
    },
];