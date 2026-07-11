"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { productService } from "../services/product.service";
import { Product } from "../types/product.types";
import toast from "react-hot-toast";
interface UpdateProductParams {
    id: string;
    data: Partial<Product>;
}

export function useUpdateProduct() {
    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            data,
        }: UpdateProductParams) =>
            productService.updateProduct(
                id,
                data
            ),

        onSuccess: () => {
            toast.success(
                "Product updated successfully"
            );

            queryClient.invalidateQueries({
                queryKey:
                    queryKeys.products.all,
            });
        },

        onError: () => {
            toast.error(
                "Failed to update product"
            );
        },
    });
}