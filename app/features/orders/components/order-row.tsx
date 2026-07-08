"use client";

import React from "react";
import { Eye } from "lucide-react";

import { Order } from "../types/order.types";
import { OrderStatusBadge } from "./order-status-badge";

interface OrderRowProps {
    order: Order;
    onView: (order: Order) => void;
}

function OrderRowComponent({
    order,
    onView,
}: OrderRowProps) {
    return (
        <tr
            className="
    transition-colors
    hover:bg-slate-800/20
    "
        >
            <td className="px-6 py-4 font-medium text-white">
                {order.id}
            </td>

            <td className="px-6 py-4">
                <div>
                    <p className="font-medium text-white">
                        {order.customer}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                        {order.email}
                    </p>
                </div>
            </td>

            <td className="px-6 py-4 text-slate-300">
                {order.createdAt}
            </td>

            <td className="px-6 py-4 text-slate-300">
                {order.items}
            </td>

            <td className="px-6 py-4 font-medium text-white">
                ${order.total}
            </td>

            <td className="px-6 py-4">
                <span
                    className={`
                    inline-flex
                    items-center
                    rounded-full
                    px-3
                    py-1

                    text-xs
                    font-medium

                    ${order.paymentStatus ===
                            "Paid"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                        }
                    `}
                >
                    {order.paymentStatus}
                </span>
            </td>

            <td className="px-6 py-4">
                <OrderStatusBadge
                    status={order.status}
                />
            </td>

            <td className="px-6 py-4 text-right">
                <button
                    onClick={() =>
                        onView(order)
                    }
                    className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-lg

                    border
                    border-slate-700

                    px-4
                    py-2

                    text-sm
                    font-medium

                    text-slate-300

                    transition-all

                    hover:border-blue-500
                    hover:bg-blue-500/10
                    hover:text-white
                    "
                >
                    <Eye size={15} />
                    View
                </button>
            </td>
        </tr>
    );
}

export const OrderRow = React.memo(
    OrderRowComponent
);