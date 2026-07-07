import { Supplier } from "../types/supplier.types";

export const mockSuppliers: Supplier[] = [
    {
        id: "SUP-1001",
        company: "Apple Distribution",
        contactPerson: "John Smith",
        email: "john@appledist.com",
        phone: "+1 202 555 0101",
        status: "Active",
    },

    {
        id: "SUP-1002",
        company: "Tech Source Ltd",
        contactPerson: "Sarah Johnson",
        email: "sarah@techsource.com",
        phone: "+1 202 555 0102",
        status: "Active",
    },

    {
        id: "SUP-1003",
        company: "Global Electronics",
        contactPerson: "Michael Brown",
        email: "michael@globalelec.com",
        phone: "+1 202 555 0103",
        status: "Inactive",
    },

    {
        id: "SUP-1004",
        company: "Future Devices",
        contactPerson: "Emma Wilson",
        email: "emma@futuredevices.com",
        phone: "+1 202 555 0104",
        status: "Active",
    },
];