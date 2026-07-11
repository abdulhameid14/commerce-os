import { api } from "../../../services/api-client";
import { Product } from "../types/product.types";

export const productService = {
    async getProducts(): Promise<Product[]> {
        const { data } =
            await api.get("/products");

        return data;
    },

    async createProduct(
        product: Product
    ) {
        const { data } =
            await api.post(
                "/products",
                product
            );

        return data;
    },

    async updateProduct(
        id: string,
        product: Partial<Product>
    ) {
        const { data } =
            await api.put(
                `/products/${id}`,
                product
            );

        return data;
    },

    async deleteProduct(
        id: string
    ) {
        await api.delete(
            `/products/${id}`
        );

        return true;
    },
};