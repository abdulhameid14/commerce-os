import { Customer } from "../types/customer.types";

export const mockCustomers: Customer[] = [
    {
        id: "CUS-001",
        name: "John Smith",
        email: "john@example.com",
        orders: 12,
        spent: 2480,
        status: "active",
        joinedAt: "2026-01-12",
    },

    {
        id: "CUS-002",
        name: "Sarah Wilson",
        email: "sarah@example.com",
        orders: 8,
        spent: 1340,
        status: "active",
        joinedAt: "2026-02-03",
    },

    {
        id: "CUS-003",
        name: "Michael Brown",
        email: "michael@example.com",
        orders: 2,
        spent: 180,
        status: "inactive",
        joinedAt: "2026-03-11",
    },
];