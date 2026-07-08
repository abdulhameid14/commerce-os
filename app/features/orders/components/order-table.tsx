"use client";

import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { Filter } from "lucide-react";

import { DataTable } from "../../../components/ui/data-table";
import { LoadingState } from "../../../components/ui/loading-state";
import { ErrorState } from "../../../components/ui/error-state";

import { useOrders } from "../hooks/use-orders";
import { OrderFilters } from "./order-filters";
import { OrderEmptyState } from "./order-empty-state";
import { OrderRow } from "./order-row";

import { Order } from "../types/order.types";

import { useDebounce } from "../../../hooks/use-debounce";
import { useTableState } from "../../../hooks/use-table-state";

const OrderDetailsDrawer = dynamic(
    () =>
        import("./order-details-drawer").then(
            (mod) => mod.OrderDetailsDrawer
        ),
    {
        loading: () => (
            <div className="fixed inset-0 z-50 bg-black/30" />
        ),
    }
);

export function OrderTable() {
    const {
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        openFilters,
        setOpenFilters,
    } = useTableState();

    const [openDrawer, setOpenDrawer] =
        useState(false);

    const [selectedOrder, setSelectedOrder] =
        useState<Order | null>(null);

    const debouncedSearch =
        useDebounce(search, 500);

    const ITEMS_PER_PAGE = 5;

    const {
        data: orders = [],
        isLoading,
        error,
    } = useOrders();

    const handleViewOrder = useCallback(
        (order: Order) => {
            setSelectedOrder(order);
            setOpenDrawer(true);
        },
        []
    );

    const filteredOrders = useMemo(() => {
        return orders.filter(
            (order) =>
                order.id
                    .toLowerCase()
                    .includes(
                        debouncedSearch.toLowerCase()
                    ) ||
                order.customer
                    .toLowerCase()
                    .includes(
                        debouncedSearch.toLowerCase()
                    )
        );
    }, [orders, debouncedSearch]);

    const totalPages = Math.ceil(
        filteredOrders.length /
        ITEMS_PER_PAGE
    );

    const paginatedOrders = useMemo(
        () =>
            filteredOrders.slice(
                (currentPage - 1) *
                ITEMS_PER_PAGE,
                currentPage *
                ITEMS_PER_PAGE
            ),
        [
            filteredOrders,
            currentPage,
        ]
    );

    if (isLoading) {
        return <LoadingState />;
    }

    if (error) {
        return (
            <ErrorState message="Failed to load orders" />
        );
    }

    return (
        <div
            className="
            rounded-3xl
            border
            border-slate-800/80
            bg-slate-900/25
            backdrop-blur-xl
            p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
        >
            <div
                className="
                mb-8
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
                "
            >
                <div className="w-full max-w-md">
                    <input
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        placeholder="Search orders..."
                        className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-700
                        bg-slate-950/70
                        px-4
                        text-sm
                        text-white
                        outline-none
                        transition-all
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/20
                        "
                    />
                </div>

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
                    border-slate-700
                    px-4
                    py-3
                    text-slate-300
                    transition
                    hover:border-blue-500
                    hover:text-white
                    "
                >
                    <Filter size={16} />
                    Filters
                </button>
            </div>

            {filteredOrders.length ===
                0 ? (
                <OrderEmptyState />
            ) : (
                <DataTable
                    currentPage={
                        currentPage
                    }
                    totalPages={
                        totalPages
                    }
                    onPageChange={
                        setCurrentPage
                    }
                    columns={
                        <>
                            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Order ID
                            </th>

                            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Customer
                            </th>

                            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Date
                            </th>

                            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Items
                            </th>

                            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Total
                            </th>

                            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Payment
                            </th>

                            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Status
                            </th>

                            <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Actions
                            </th>
                        </>
                    }
                >
                    {paginatedOrders.map(
                        (order) => (
                            <OrderRow
                                key={
                                    order.id
                                }
                                order={order}
                                onView={
                                    handleViewOrder
                                }
                            />
                        )
                    )}
                </DataTable>
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