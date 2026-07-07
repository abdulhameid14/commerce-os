import { api } from "../../../services/api-client";
import { Order } from "../types/order.types";

export const orderService = {
    async getOrders(): Promise<Order[]> {
        const { data } = await api.get("/orders");

        return data;
    },
};