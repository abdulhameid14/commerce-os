import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { orderService } from "../services/order.service";

export function useOrders() {
    return useQuery({
        queryKey: queryKeys.orders.all,
        queryFn: orderService.getOrders,
    });
}