import { api } from "@/app/services/api-client";
import { AnalyticsCard } from "../types/analytics.types";

export const analyticsService = {
    async getOverview(): Promise<AnalyticsCard[]> {
        const { data } = await api.get("/analytics");
        return data;
    },
};