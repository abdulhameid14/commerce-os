"use client";

import {
    useEffect,
    useState,
} from "react";

import { productService } from "../services/product.service";

import { Product } from "../types/product.types";

export function useProducts() {
    const [products, setProducts] =
        useState<Product[]>([]);

    const [loading, setLoading] =
        useState(true);

    const loadProducts =
        async () => {
            try {
                const data =
                    await productService.getProducts();

                setProducts(data);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        loadProducts();
    }, []);

    const createProduct =
        async (
            product: Product
        ) => {
            await productService.createProduct(
                product
            );

            await loadProducts();
        };

    const updateProduct =
        async (
            id: string,
            data: Partial<Product>
        ) => {
            await productService.updateProduct(
                id,
                data
            );

            await loadProducts();
        };

    const deleteProduct =
        async (id: string) => {
            await productService.deleteProduct(
                id
            );

            await loadProducts();
        };

    return {
        products,

        loading,

        createProduct,

        updateProduct,

        deleteProduct,

        refresh:
            loadProducts,
    };
}