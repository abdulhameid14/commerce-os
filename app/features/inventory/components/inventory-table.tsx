"use client";

import { useState } from "react";

import { AppButton } from "../../../components/ui/app-button";
import { Pagination } from "../../../components/ui/pagination";

import { inventoryItems } from "../data/mock-inventory";

import { InventoryFilters } from "./inventory-filters";
import { InventoryEmptyState } from "./inventory-empty-state";
import { LowStockAlert } from "./low-stock-alert";
import { StockAdjustmentModal } from "./stock-adjustment-modal";

export function InventoryTable() {
    const [search, setSearch] =
        useState("");

    const [status, setStatus] =
        useState("all");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [openAdjustModal, setOpenAdjustModal] =
        useState(false);

    const filtered =
        inventoryItems.filter((item) => {
            const matchesSearch =
                item.productName
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const matchesStatus =
                status === "all"
                    ? true
                    : item.status === status;

            return (
                matchesSearch &&
                matchesStatus
            );
        });

    const lowStockCount =
        inventoryItems.filter(
            (item) =>
                item.status ===
                "Low Stock"
        ).length;

    const ITEMS_PER_PAGE = 5;

    const totalPages = Math.ceil(
        filtered.length /
        ITEMS_PER_PAGE
    );

    const paginatedItems =
        filtered.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,
            currentPage *
            ITEMS_PER_PAGE
        );

    return (
        <>
            <div className="space-y-6">
                <LowStockAlert
                    count={lowStockCount}
                />

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
                            placeholder="Search inventory..."
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
                            "
                        />

                        <div className="flex gap-3">
                            <InventoryFilters
                                status={status}
                                onChange={
                                    setStatus
                                }
                            />

                            <AppButton
                                className="w-auto px-6"
                                onClick={() =>
                                    setOpenAdjustModal(
                                        true
                                    )
                                }
                            >
                                Adjust Stock
                            </AppButton>
                        </div>
                    </div>

                    {!filtered.length ? (
                        <InventoryEmptyState />
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[900px]">
                                    <thead>
                                        <tr className="border-b border-slate-800">
                                            <th className="pb-4 text-left text-slate-400">
                                                Product
                                            </th>

                                            <th className="pb-4 text-left text-slate-400">
                                                SKU
                                            </th>

                                            <th className="pb-4 text-left text-slate-400">
                                                Stock
                                            </th>

                                            <th className="pb-4 text-left text-slate-400">
                                                Reserved
                                            </th>

                                            <th className="pb-4 text-left text-slate-400">
                                                Warehouse
                                            </th>

                                            <th className="pb-4 text-left text-slate-400">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {paginatedItems.map(
                                            (
                                                item
                                            ) => (
                                                <tr
                                                    key={
                                                        item.id
                                                    }
                                                    className="border-b border-slate-800/50"
                                                >
                                                    <td className="py-4 text-white">
                                                        {
                                                            item.productName
                                                        }
                                                    </td>

                                                    <td className="py-4 text-slate-300">
                                                        {
                                                            item.sku
                                                        }
                                                    </td>

                                                    <td className="py-4 text-slate-300">
                                                        {
                                                            item.stock
                                                        }
                                                    </td>

                                                    <td className="py-4 text-slate-300">
                                                        {
                                                            item.reserved
                                                        }
                                                    </td>

                                                    <td className="py-4 text-slate-300">
                                                        {
                                                            item.warehouse
                                                        }
                                                    </td>

                                                    <td className="py-4">
                                                        <span
                                                            className={`
                                                            rounded-full
                                                            px-3
                                                            py-1
                                                            text-xs

                                                            ${item.status ===
                                                                    "In Stock"
                                                                    ? "bg-green-500/10 text-green-400"
                                                                    : item.status ===
                                                                        "Low Stock"
                                                                        ? "bg-yellow-500/10 text-yellow-400"
                                                                        : "bg-red-500/10 text-red-400"
                                                                }
                                                        `}
                                                        >
                                                            {
                                                                item.status
                                                            }
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {totalPages >
                                1 && (
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
                                )}
                        </>
                    )}
                </div>
            </div>

            <StockAdjustmentModal
                open={openAdjustModal}
                onClose={() =>
                    setOpenAdjustModal(
                        false
                    )
                }
            />
        </>
    );
}