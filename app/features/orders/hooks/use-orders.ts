import { useQuery } from "@tanstack/react-query";
import { api } from "../../../services/api-client";

export function useOrders() {
    return useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const { data } = await api.get("/orders");
            return data;
        },
    });
}