
import { useQuery } from "@tanstack/react-query";

export function useCustomerActivities(
    customerId?: string
) {
    return useQuery({
        queryKey: [
            "customer-activities",
            customerId,
        ],

        enabled: !!customerId,

        queryFn: async () => {
            return [
                {
                    id: "1",
                    title: "Placed Order #1025",
                    date: "Today",
                },

                {
                    id: "2",
                    title: "Updated Profile",
                    date: "Yesterday",
                },
            ];
        },
    });
}