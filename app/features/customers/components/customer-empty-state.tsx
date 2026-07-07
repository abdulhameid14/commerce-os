import { Users } from "lucide-react";

export function CustomerEmptyState() {
    return (
        <div
            className="
            flex
            flex-col
            items-center
            justify-center

            py-20
            text-center
            "
        >
            <Users
                size={48}
                className="mb-4 text-slate-600"
            />

            <h3 className="text-lg font-semibold text-white">
                No customers found
            </h3>

            <p className="mt-2 text-slate-400">
                Customers will appear here after
                placing their first order.
            </p>
        </div>
    );
}