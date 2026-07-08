"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { productService } from "../services/product.service";

export function useProducts() {
    return useQuery({
        queryKey: queryKeys.products.all,
        queryFn: productService.getProducts,
    });
}