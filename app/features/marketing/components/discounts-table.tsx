"use client";

import { useMemo, useState } from "react";
import { Eye } from "lucide-react";

import { mockDiscounts } from "../data/mock-discounts";

import { Pagination } from "../../../components/ui/pagination";
import { AppButton } from "../../../components/ui/app-button";

import { CreateDiscountModal } from "./create-discount-modal";
import { DiscountDetailsDrawer } from "./discount-details-drawer";

export function DiscountsTable() {
    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [openModal, setOpenModal] =
        useState(false);

    const [openDrawer, setOpenDrawer] =
        useState(false);

    const [selectedDiscount, setSelectedDiscount] =
        useState<any>(null);

    const ITEMS_PER_PAGE = 5;

    const filteredDiscounts =
        useMemo(() => {
            return mockDiscounts.filter(
                (discount) =>
                    discount.title
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
        }, [search]);

    const totalPages = Math.ceil(
        filteredDiscounts.length /
        ITEMS_PER_PAGE
    );

    const paginatedDiscounts =
        filteredDiscounts.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,
            currentPage *
            ITEMS_PER_PAGE
        );

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="mb-6 flex items-center justify-between">
                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    placeholder="Search discounts..."
                    className="h-11 w-80 rounded-xl border border-slate-800 bg-slate-950 px-4 text-white"
                />

                <AppButton
                    onClick={() =>
                        setOpenModal(true)
                    }
                >
                    Add Discount
                </AppButton>
            </div>

            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-800">
                        <th className="pb-4 text-left text-slate-400">
                            Title
                        </th>

                        <th className="pb-4 text-left text-slate-400">
                            Type
                        </th>

                        <th className="pb-4 text-left text-slate-400">
                            Value
                        </th>

                        <th className="pb-4 text-left text-slate-400">
                            Start
                        </th>

                        <th className="pb-4 text-left text-slate-400">
                            End
                        </th>

                        <th className="pb-4 text-right text-slate-400">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {paginatedDiscounts.map(
                        (discount) => (
                            <tr
                                key={
                                    discount.id
                                }
                                className="border-b border-slate-800/50"
                            >
                                <td className="py-4 text-white">
                                    {discount.title}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {discount.type}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {discount.value}%
                                </td>

                                <td className="py-4 text-slate-300">
                                    {discount.startDate}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {discount.endDate}
                                </td>

                                <td className="py-4">
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => {
                                                setSelectedDiscount(discount);
                                                setOpenDrawer(true);
                                            }}
                                            className="flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-slate-300"
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
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>

            <CreateDiscountModal
                open={openModal}
                onClose={() =>
                    setOpenModal(false)
                }
            />

            <DiscountDetailsDrawer
                open={openDrawer}
                onClose={() =>
                    setOpenDrawer(false)
                }
                discount={selectedDiscount}
            />
        </div>
    );
}