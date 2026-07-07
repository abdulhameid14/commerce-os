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
        <tr className="border-b border-slate-800/50">
            <td className="py-4 font-medium text-white">
                {order.id}
            </td>

            <td className="py-4">
                <div>
                    <p className="text-white">
                        {order.customer}
                    </p>

                    <p className="text-xs text-slate-500">
                        {order.email}
                    </p>
                </div>
            </td>

            <td className="py-4 text-slate-300">
                {order.createdAt}
            </td>

            <td className="py-4 text-slate-300">
                {order.items}
            </td>

            <td className="py-4 text-slate-300">
                ${order.total}
            </td>

            <td className="py-4">
                <span
                    className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    ${order.paymentStatus === "Paid"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }
                    `}
                >
                    {order.paymentStatus}
                </span>
            </td>

            <td className="py-4">
                <OrderStatusBadge
                    status={order.status}
                />
            </td>

            <td className="py-4">
                <div className="flex justify-end">
                    <button
                        onClick={() => onView(order)}
                        className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-slate-800
                        px-3
                        py-2
                        text-slate-300
                        transition-colors
                        hover:border-blue-500
                        hover:text-white
                        "
                    >
                        <Eye size={15} />
                        View
                    </button>
                </div>
            </td>
        </tr>
    );
}

export const OrderRow = React.memo(
    OrderRowComponent
);