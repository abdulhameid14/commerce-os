"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { productService } from "../services/product.service";

export function useProduct(id: string) {
    return useQuery({
        queryKey: [...queryKeys.products.all, id],
        queryFn: () =>
            productService.getProductById(id),
        enabled: !!id,
    });
}