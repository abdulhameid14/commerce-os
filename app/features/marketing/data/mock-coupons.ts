import { Coupon } from "../types/coupon.types";

export const mockCoupons: Coupon[] = [
    {
        id: "CP-001",
        code: "WELCOME10",
        discount: 10,
        usage: 145,
        expiryDate: "2026-12-31",
        status: "Active",
    },
    {
        id: "CP-002",
        code: "SUMMER20",
        discount: 20,
        usage: 80,
        expiryDate: "2026-08-30",
        status: "Active",
    },
    {
        id: "CP-003",
        code: "OLD50",
        discount: 50,
        usage: 500,
        expiryDate: "2025-01-01",
        status: "Expired",
    },
];