export interface Customer {
    id: string;
    name: string;
    email: string;
    orders: number;
    spent: number;
    status: "active" | "inactive";
    joinedAt: string;
    notes?: string;
}