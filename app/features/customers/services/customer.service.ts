import { api } from "../../../services/api-client";

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

export const customerService = {
    async getCustomers(): Promise<Customer[]> {
        const { data } =
            await api.get("/customers");

        return data;
    },

    async updateCustomer(
        id: string,
        payload: {
            status?: "active" | "inactive";
            notes?: string;
        }
    ) {
        const { data } =
            await api.patch(
                `/customers/${id}`,
                payload
            );

        return data;
    },
};