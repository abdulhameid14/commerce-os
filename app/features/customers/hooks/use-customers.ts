import { useQuery } from "@tanstack/react-query";

import { customerService } from "../services/customer.service";
import { queryKeys } from "../../../services/query-keys";

export function useCustomers() {
    return useQuery({
        queryKey: queryKeys.customers.all,
        queryFn: customerService.getCustomers,
    });
}