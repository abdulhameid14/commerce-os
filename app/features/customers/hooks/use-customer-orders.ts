import { useQuery } from "@tanstack/react-query";

export function useCustomerOrders(
    customerId?: string
) {
    return useQuery({
        queryKey: [
            "customer-orders",
            customerId,
        ],

        enabled: !!customerId,

        queryFn: async () => {
            return [
                {
                    id: "#1024",
                    total: "$240",
                    status: "Delivered",
                    date: "Jun 20, 2026",
                },

                {
                    id: "#1025",
                    total: "$480",
                    status: "Processing",
                    date: "Jun 18, 2026",
                },
            ];
        },
    });
}