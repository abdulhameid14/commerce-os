
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../services/query-keys";
import { Crown, RefreshCcw, UserPlus, UserX } from "lucide-react";

export function useCustomerSegments() {
    return useQuery({
        queryKey: [
            ...queryKeys.customers.all,
            "segments",
        ],

        queryFn: async () => {
            return [
                {
                    title: "VIP Customers",
                    value: 124,
                    icon: Crown,
                    color:
                        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                },

                {
                    title: "Repeat Customers",
                    value: 892,
                    icon: RefreshCcw,
                    color:
                        "bg-blue-500/10 text-blue-400 border-blue-500/20",
                },

                {
                    title: "New Customers",
                    value: 248,
                    icon: UserPlus,
                    color:
                        "bg-green-500/10 text-green-400 border-green-500/20",
                },

                {
                    title: "Inactive Customers",
                    value: 76,
                    icon: UserX,
                    color:
                        "bg-red-500/10 text-red-400 border-red-500/20",
                },
            ];
        },
    });
}