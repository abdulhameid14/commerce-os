"use client";

import { useMemo, useState } from "react";
import { Eye, Filter } from "lucide-react";

import { useOrders } from "../hooks/use-orders";

import { OrderStatusBadge } from "./order-status-badge";
import { OrderDetailsDrawer } from "./order-details-drawer";
import { OrderFilters } from "./order-filters";
import { OrderEmptyState } from "./order-empty-state";

import { Pagination } from "../../../components/ui/pagination";
import { Order } from "../types/order.types";

export function OrderTable() {
    const [search, setSearch] = useState("");

    const [openDrawer, setOpenDrawer] =
        useState(false);

    const [openFilters, setOpenFilters] =
        useState(false);

    const [selectedOrder, setSelectedOrder] =
        useState<Order | null>(null);

    const [currentPage, setCurrentPage] =
        useState(1);

    const ITEMS_PER_PAGE = 5;

    const {
        data: orders = [],
        isLoading,
        error,
    } = useOrders();

    const filteredOrders = useMemo(() => {
        return orders.filter(
            (order: Order) =>
                order.id
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                order.customer
                    .toLowerCase()
                    .includes(search.toLowerCase())
        );
    }, [orders, search]);

    const totalPages = Math.ceil(
        filteredOrders.length / ITEMS_PER_PAGE
    );

    const paginatedOrders =
        filteredOrders.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
        );

    if (isLoading) {
        return (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <div className="animate-pulse space-y-4">
                    <div className="h-10 w-64 rounded bg-slate-800" />
                    <div className="h-72 rounded bg-slate-800" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-red-400">
                Failed to load orders
            </div>
        );
    }

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
            <div
                className="
                mb-6
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
                "
            >
                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search orders..."
                    className="
                    h-11
                    w-full
                    md:w-80
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950
                    px-4
                    text-white
                    outline-none
                    focus:border-blue-500
                    "
                />

                <button
                    onClick={() =>
                        setOpenFilters(true)
                    }
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-800
                    px-4
                    py-2.5
                    text-slate-300
                    transition-colors
                    hover:border-blue-500
                    hover:text-white
                    "
                >
                    <Filter size={16} />
                    Filters
                </button>
            </div>

            {filteredOrders.length === 0 ? (
                <OrderEmptyState />
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px]">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="pb-4 text-left text-slate-400">
                                        Order ID
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Customer
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Date
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Items
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Total
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Payment
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Status
                                    </th>

                                    <th className="pb-4 text-right text-slate-400">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {paginatedOrders.map(
                                    (order: Order) => (
                                        <tr
                                            key={
                                                order.id
                                            }
                                            className="
                                            border-b
                                            border-slate-800/50
                                            "
                                        >
                                            <td className="py-4 font-medium text-white">
                                                {
                                                    order.id
                                                }
                                            </td>

                                            <td className="py-4">
                                                <div>
                                                    <p className="text-white">
                                                        {
                                                            order.customer
                                                        }
                                                    </p>

                                                    <p className="text-xs text-slate-500">
                                                        {
                                                            order.email
                                                        }
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="py-4 text-slate-300">
                                                {
                                                    order.createdAt
                                                }
                                            </td>

                                            <td className="py-4 text-slate-300">
                                                {
                                                    order.items
                                                }
                                            </td>

                                            <td className="py-4 text-slate-300">
                                                $
                                                {
                                                    order.total
                                                }
                                            </td>

                                            <td className="py-4">
                                                <span
                                                    className={`
                                                    rounded-full
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    ${order.paymentStatus ===
                                                            "Paid"
                                                            ? "bg-green-500/10 text-green-400"
                                                            : "bg-yellow-500/10 text-yellow-400"
                                                        }
                                                    `}
                                                >
                                                    {
                                                        order.paymentStatus
                                                    }
                                                </span>
                                            </td>

                                            <td className="py-4">
                                                <OrderStatusBadge
                                                    status={
                                                        order.status
                                                    }
                                                />
                                            </td>

                                            <td className="py-4">
                                                <div className="flex justify-end">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedOrder(
                                                                order
                                                            );
                                                            setOpenDrawer(
                                                                true
                                                            );
                                                        }}
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
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6">
                        <Pagination
                            currentPage={
                                currentPage
                            }
                            totalPages={
                                totalPages
                            }
                            onPageChange={
                                setCurrentPage
                            }
                        />
                    </div>
                </>
            )}

            <OrderDetailsDrawer
                open={openDrawer}
                onClose={() =>
                    setOpenDrawer(false)
                }
                order={selectedOrder}
            />

            <OrderFilters
                open={openFilters}
                onClose={() =>
                    setOpenFilters(false)
                }
            />
        </div>
    );
}