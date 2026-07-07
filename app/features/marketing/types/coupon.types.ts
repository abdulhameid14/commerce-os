export interface Coupon {
    id: string;
    code: string;
    discount: number;
    usage: number;
    expiryDate: string;
    status: "Active" | "Expired";
}