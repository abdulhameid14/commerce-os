"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { productService } from "../services/product.service";
import { Product } from "../types/product.types";
import toast from "react-hot-toast";
export function useCreateProduct() {
    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: (
            product: Product
        ) =>
            productService.createProduct(
                product
            ),

        onSuccess: () => {
            toast.success(
                "Product created successfully"
            );

            queryClient.invalidateQueries({
                queryKey:
                    queryKeys.products.all,
            });
        },

        onError: () => {
            toast.error(
                "Failed to create product"
            );
        },
    });
}