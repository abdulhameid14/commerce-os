"use client";

import { Coupon } from "../types/coupon.types";

interface Props {
    open: boolean;
    onClose: () => void;
    coupon: Coupon | null;
}

export function CouponDetailsDrawer({
    open,
    onClose,
    coupon,
}: Props) {
    if (!open || !coupon) return null;

    return (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-slate-800 bg-slate-950 p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Coupon Details
                </h2>

                <button
                    onClick={onClose}
                    className="text-slate-400"
                >
                    ✕
                </button>
            </div>

            <div className="mt-6 space-y-4">
                <p className="text-slate-300">
                    Code: {coupon.code}
                </p>

                <p className="text-slate-300">
                    Discount: {coupon.discount}%
                </p>

                <p className="text-slate-300">
                    Usage: {coupon.usage}
                </p>

                <p className="text-slate-300">
                    Expiry: {coupon.expiryDate}
                </p>

                <p className="text-slate-300">
                    Status: {coupon.status}
                </p>
            </div>
        </div>
    );
}