export interface OrderRecord {
    id: string;
    customer: string;
    email: string;
    items: number;
    total: number;
    paymentStatus: string;
    status: string;
    createdAt: string;
}

export const orders: OrderRecord[] = [
    {
        id: "ORD-1001",
        customer: "John Smith",
        email: "john@example.com",
        items: 3,
        total: 1200,
        paymentStatus: "Paid",
        status: "Delivered",
        createdAt: "2026-07-01",
    },
    {
        id: "ORD-1002",
        customer: "Sarah Johnson",
        email: "sarah@example.com",
        items: 2,
        total: 850,
        paymentStatus: "Pending",
        status: "Processing",
        createdAt: "2026-07-02",
    },
    {
        id: "ORD-1003",
        customer: "Michael Brown",
        email: "michael@example.com",
        items: 1,
        total: 430,
        paymentStatus: "Paid",
        status: "Shipped",
        createdAt: "2026-07-03",
    },
];