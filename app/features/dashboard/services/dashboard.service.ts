import { api } from "@/app/services/api-client";

export const dashboardService = {
    async getDashboard() {
        const { data } =
            await api.get("/dashboard");

        return data;
    },
};