"use client";

import { useMemo, useState } from "react";
import { Eye } from "lucide-react";


import { Pagination } from "../../../components/ui/pagination";
import { AppButton } from "../../../components/ui/app-button";

import { CreatePurchaseOrderModal } from "./create-purchase-order-modal";
import { PurchaseOrderDetails } from "./purchase-order-details";
import { usePurchaseOrders } from "../hooks/use-purchase-orders";

export function PurchaseOrdersTable() {
    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [openModal, setOpenModal] =
        useState(false);

    const [openDrawer, setOpenDrawer] =
        useState(false);

    const [selectedOrder, setSelectedOrder] =
        useState<any>(null);

    const ITEMS_PER_PAGE = 5;
    const {
        data: purchaseOrders = [],
    } = usePurchaseOrders();

    const filteredOrders =
        useMemo(() => {
            return purchaseOrders.filter(
                (order) =>
                    order.supplier
                        .toLowerCase()
                        .includes(search.toLowerCase())
            );
        }, [search]);

    const totalPages = Math.ceil(
        filteredOrders.length /
        ITEMS_PER_PAGE
    );

    const paginatedOrders =
        filteredOrders.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,
            currentPage *
            ITEMS_PER_PAGE
        );

    return (
        <div
            className="
            rounded-2xl
            border border-slate-800
            bg-slate-900/40
            p-6
            "
        >
            <div className="mb-6 flex items-center justify-between">
                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    placeholder="Search orders..."
                    className="
                    h-11 w-80
                    rounded-xl
                    border border-slate-800
                    bg-slate-950
                    px-4
                    text-white
                    "
                />

                <AppButton
                    onClick={() =>
                        setOpenModal(true)
                    }
                >
                    Add Purchase Order
                </AppButton>
            </div>

            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-800">
                        <th className="pb-4 text-left text-slate-400">
                            ID
                        </th>

                        <th className="pb-4 text-left text-slate-400">
                            Supplier
                        </th>

                        <th className="pb-4 text-left text-slate-400">
                            Total
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
                        (order) => (
                            <tr
                                key={
                                    order.id
                                }
                                className="border-b border-slate-800/50"
                            >
                                <td className="py-4 text-white">
                                    {order.id}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {
                                        order.supplier
                                    }
                                </td>

                                <td className="py-4 text-slate-300">
                                    $
                                    {
                                        order.total
                                    }
                                </td>

                                <td className="py-4 text-slate-300">
                                    {
                                        order.status
                                    }
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
                                            flex items-center gap-2
                                            rounded-lg
                                            border border-slate-800
                                            px-3 py-2
                                            text-slate-300
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

            <CreatePurchaseOrderModal
                open={openModal}
                onClose={() =>
                    setOpenModal(false)
                }
            />

            <PurchaseOrderDetails
                open={openDrawer}
                onClose={() =>
                    setOpenDrawer(false)
                }
                order={selectedOrder}
            />
        </div>
    );
}