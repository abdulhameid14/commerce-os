import { Campaign } from "../types/campaign.types";

export const mockCampaigns: Campaign[] = [
    {
        id: "CMP-001",
        name: "Summer Sale",
        channel: "Facebook",
        budget: 5000,
        status: "Active",
    },
    {
        id: "CMP-002",
        name: "Black Friday",
        channel: "Google",
        budget: 12000,
        status: "Paused",
    },
];