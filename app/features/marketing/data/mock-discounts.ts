import { Discount } from "../types/discount.types";

export const mockDiscounts: Discount[] = [
    {
        id: "DS-001",
        title: "Black Friday",
        type: "Percentage",
        value: 30,
        startDate: "2026-11-20",
        endDate: "2026-11-30",
    },
    {
        id: "DS-002",
        title: "New Year Sale",
        type: "Percentage",
        value: 25,
        startDate: "2026-12-25",
        endDate: "2027-01-05",
    },
];