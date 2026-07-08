"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { productService } from "../services/product.service";
import { Product } from "../types/product.types";

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
            queryClient.invalidateQueries({
                queryKey:
                    queryKeys.products.all,
            });
        },
    });
}