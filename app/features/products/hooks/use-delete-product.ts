"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { productService } from "../services/product.service";
import toast from "react-hot-toast";
export function useDeleteProduct() {
    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            productService.deleteProduct(
                id
            ),

        onSuccess: () => {
            toast.success(
                "Product deleted successfully"
            );

            queryClient.invalidateQueries({
                queryKey:
                    queryKeys.products.all,
            });
        },

        onError: () => {
            toast.error(
                "Failed to delete product"
            );
        },
    });
}