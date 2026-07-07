export interface Campaign {
    id: string;
    name: string;
    channel: string;
    budget: number;
    status: "Active" | "Paused";
}