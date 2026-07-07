"use client";

import { useMemo, useState } from "react";
import { Eye } from "lucide-react";

import { mockCoupons } from "../data/mock-coupons";

import { Pagination } from "../../../components/ui/pagination";
import { AppButton } from "../../../components/ui/app-button";

import { CouponStatusBadge } from "./coupon-status-badge";
import { CreateCouponModal } from "./create-coupon-modal";
import { CouponDetailsDrawer } from "./coupon-details-drawer";

export function CouponsTable() {
    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [openModal, setOpenModal] =
        useState(false);

    const [openDrawer, setOpenDrawer] =
        useState(false);

    const [selectedCoupon, setSelectedCoupon] =
        useState<any>(null);

    const ITEMS_PER_PAGE = 5;

    const filteredCoupons =
        useMemo(() => {
            return mockCoupons.filter(
                (coupon) =>
                    coupon.code
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
        }, [search]);

    const totalPages = Math.ceil(
        filteredCoupons.length /
        ITEMS_PER_PAGE
    );

    const paginatedCoupons =
        filteredCoupons.slice(
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
                    placeholder="Search coupons..."
                    className="h-11 w-80 rounded-xl border border-slate-800 bg-slate-950 px-4 text-white"
                />

                <AppButton
                    onClick={() =>
                        setOpenModal(true)
                    }
                >
                    Add Coupon
                </AppButton>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="pb-4 text-left text-slate-400">
                                Code
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Discount
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Usage
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Expiry
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
                        {paginatedCoupons.map(
                            (coupon) => (
                                <tr
                                    key={
                                        coupon.id
                                    }
                                    className="border-b border-slate-800/50"
                                >
                                    <td className="py-4 text-white">
                                        {
                                            coupon.code
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            coupon.discount
                                        }
                                        %
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            coupon.usage
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            coupon.expiryDate
                                        }
                                    </td>

                                    <td className="py-4">
                                        <CouponStatusBadge
                                            status={
                                                coupon.status
                                            }
                                        />
                                    </td>

                                    <td className="py-4">
                                        <div className="flex justify-end">
                                            <button
                                                onClick={() => {
                                                    setSelectedCoupon(
                                                        coupon
                                                    );

                                                    setOpenDrawer(
                                                        true
                                                    );
                                                }}
                                                className="flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-slate-300 hover:border-blue-500 hover:text-white"
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

            {totalPages > 1 && (
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

            <CreateCouponModal
                open={openModal}
                onClose={() =>
                    setOpenModal(false)
                }
            />

            <CouponDetailsDrawer
                open={openDrawer}
                onClose={() =>
                    setOpenDrawer(false)
                }
                coupon={selectedCoupon}
            />
        </div>
    );
}