"use client";

interface Order {
    id: string;
    customer: string;
    amount: string;
    status: string;
}

interface RecentOrdersProps {
    orders: Order[];
}

export function RecentOrders({
    orders,
}: RecentOrdersProps) {
    return (
        <div
            className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/40
            p-6
            "
        >
            <h3 className="mb-5 text-lg font-semibold text-white">
                Recent Orders
            </h3>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-slate-800
                        p-4
                        "
                    >
                        <div>
                            <p className="font-medium text-white">
                                {order.id}
                            </p>

                            <p className="text-sm text-slate-400">
                                {order.customer}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-white">
                                {order.amount}
                            </p>

                            <p className="text-xs text-slate-400">
                                {order.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}