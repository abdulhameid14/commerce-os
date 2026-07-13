import { api } from "../../../services/api-client";
import {
    Order,
    OrderStatus,
} from "../types/order.types";

export const orderService = {
    async getOrders(): Promise<Order[]> {
        const { data } =
            await api.get("/orders");

        return data;
    },

    async updateStatus(
        id: string,
        status: OrderStatus
    ) {
        const { data } =
            await api.patch(
                `/orders/${id}`,
                { status }
            );

        return data;
    },
};