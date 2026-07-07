import { Product } from "../types/product.types";

const mockProducts: Product[] = [
    {
        id: "1",
        name: "iPhone 17 Pro",
        sku: "IP17P",
        category: "Phones",
        price: 1200,
        stock: 15,
        status: "active",
    },

    {
        id: "2",
        name: "MacBook Pro",
        sku: "MBP",
        category: "Laptops",
        price: 2500,
        stock: 8,
        status: "active",
    },
];

export const productService = {
    async getProducts() {
        return mockProducts;
    },

    async createProduct(
        product: Product
    ) {
        mockProducts.push(product);

        return product;
    },

    async updateProduct(
        id: string,
        data: Partial<Product>
    ) {
        const index =
            mockProducts.findIndex(
                (p) => p.id === id
            );

        if (index === -1)
            throw new Error(
                "Product not found"
            );

        mockProducts[index] = {
            ...mockProducts[index],
            ...data,
        };

        return mockProducts[index];
    },

    async deleteProduct(
        id: string
    ) {
        const index =
            mockProducts.findIndex(
                (p) => p.id === id
            );

        if (index === -1)
            throw new Error(
                "Product not found"
            );

        mockProducts.splice(index, 1);

        return true;
    },
};