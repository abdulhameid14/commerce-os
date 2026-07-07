import { OrderTable } from "../../features/orders/components/order-table";

export default function OrdersPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Orders
                </h1>

                <p className="mt-2 text-slate-400">
                    Manage and track customer orders.
                </p>
            </div>

            <OrderTable />
        </div>
    );
}