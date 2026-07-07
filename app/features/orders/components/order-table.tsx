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
            (order: Order) =>
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
        filteredOrders.length / ITEMS_PER_PAGE
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
                        setSearch(
                            e.target.value
                        )
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
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/30
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
                <DataTable
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={
                        setCurrentPage
                    }
                    columns={
                        <>
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
                        </>
                    }
                >
                    {paginatedOrders.map(
                        (order) => (
                            <OrderRow
                                key={order.id}
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