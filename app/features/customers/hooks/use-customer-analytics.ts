"use client";
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";

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
                    icon: Users,
                },

                {
                    title: "Revenue",
                    value: "$84,320",
                    change: "+18.2%",
                    icon: DollarSign,
                },

                {
                    title: "Orders",
                    value: "5,624",
                    change: "+9.1%",
                    icon: ShoppingBag,
                },

                {
                    title: "Growth Rate",
                    value: "24.8%",
                    change: "+3.5%",
                    icon: TrendingUp,
                },
            ];
        },
    });
}