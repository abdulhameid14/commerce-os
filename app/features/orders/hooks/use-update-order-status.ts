import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { orderService } from "../services/order.service";

export function useUpdateOrderStatus() {
    const queryClient =
        useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            status,
        }: {
            id: string;
            status: string;
        }) =>
            orderService.updateStatus(
                id,
                status as any
            ),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:
                    queryKeys.orders.all,
            });
        },
    });
}