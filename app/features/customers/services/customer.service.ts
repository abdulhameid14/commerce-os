import { api } from "../../../services/api-client";
import { Customer } from "../types/customer.types";

export const customerService = {
    async getCustomers(): Promise<Customer[]> {
        const { data } = await api.get("/customers");

        return data;
    },
};