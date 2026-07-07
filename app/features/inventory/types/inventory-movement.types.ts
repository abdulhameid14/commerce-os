export interface InventoryMovement {
    id: string;
    productName: string;
    type:
    | "IN"
    | "OUT"
    | "TRANSFER";
    quantity: number;
    warehouse: string;
    createdAt: string;
}