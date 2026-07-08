"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { productService } from "../services/product.service";

export function useDeleteProduct() {
    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            productService.deleteProduct(
                id
            ),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:
                    queryKeys.products.all,
            });
        },
    });
}