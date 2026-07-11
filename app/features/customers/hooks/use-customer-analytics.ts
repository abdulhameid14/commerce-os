
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";

export function useCustomerAnalytics() {
    return useQuery({
        queryKey: [
            ...queryKeys.customers.all,
            "analytics",
        ],

        queryFn: async () => {
            return [
                {
                    title: "Total Customers",
                    value: "2,847",
                    change: "+12.4%",
                },

                {
                    title: "Revenue",
                    value: "$84,320",
                    change: "+18.2%",
                },

                {
                    title: "Orders",
                    value: "5,624",
                    change: "+9.1%",
                },

                {
                    title: "Growth Rate",
                    value: "24.8%",
                    change: "+3.5%",
                },
            ];
        },
    });
}