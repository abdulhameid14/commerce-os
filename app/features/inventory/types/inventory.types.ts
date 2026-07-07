export interface InventoryItem {
    id: string;
    productName: string;
    sku: string;
    stock: number;
    reserved: number;
    warehouse: string;
    status: "In Stock" | "Low Stock" | "Out of Stock";
}