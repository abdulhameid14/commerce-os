"use client";

import { Discount } from "../types/discount.types";

interface Props {
    open: boolean;
    onClose: () => void;
    discount: Discount | null;
}

export function DiscountDetailsDrawer({
    open,
    onClose,
    discount,
}: Props) {
    if (!open || !discount) return null;

    return (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-slate-800 bg-slate-950 p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Discount Details
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
                    Title: {discount.title}
                </p>

                <p className="text-slate-300">
                    Type: {discount.type}
                </p>

                <p className="text-slate-300">
                    Value: {discount.value}%
                </p>

                <p className="text-slate-300">
                    Start: {discount.startDate}
                </p>

                <p className="text-slate-300">
                    End: {discount.endDate}
                </p>
            </div>
        </div>
    );
}