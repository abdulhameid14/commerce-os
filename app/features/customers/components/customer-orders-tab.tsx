"use client";

interface CustomerOrder {
    id: string;
    total: string;
    status: string;
    date: string;
}

interface CustomerOrdersTabProps {
    orders: CustomerOrder[];
}

export function CustomerOrdersTab({
    orders,
}: CustomerOrdersTabProps) {
    return (
        <div className="mt-6 space-y-3">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="
          rounded-xl
          border
          border-slate-800
          bg-slate-900/40
          p-4
          "
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-white">
                                {order.id}
                            </p>

                            <p className="text-xs text-slate-500">
                                {order.date}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold text-white">
                                {order.total}
                            </p>

                            <p className="text-xs text-slate-400">
                                {order.status}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}