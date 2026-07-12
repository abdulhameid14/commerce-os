"use client";

import { useQuery } from "@tanstack/react-query";

import { inventoryService } from "../services/inventory.service";
import { queryKeys } from "@/app/services/query-keys";

export function useInventoryMovements() {
    return useQuery({
        queryKey:
            queryKeys.inventory.movements,
        queryFn:
            inventoryService.getMovements,
    });
}