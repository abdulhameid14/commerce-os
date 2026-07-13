import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { customerService } from "../services/customer.service";

interface UpdateCustomerPayload {
    id: string;
    status?: "active" | "inactive";
    notes?: string;
}

export function useUpdateCustomer() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (
            payload: UpdateCustomerPayload
        ) =>
            customerService.updateCustomer(
                payload.id,
                payload
            ),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:
                    queryKeys.customers.all,
            });
        },
    });
}