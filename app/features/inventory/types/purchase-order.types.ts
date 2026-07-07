export interface PurchaseOrder {
    id: string;
    supplier: string;
    total: number;
    status:
    | "Pending"
    | "Approved"
    | "Received";

    createdAt: string;
}