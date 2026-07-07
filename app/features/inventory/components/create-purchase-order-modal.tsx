"use client";

import { AppButton } from "../../../components/ui/app-button";

interface Props {
    open: boolean;
    onClose: () => void;
}

export function CreatePurchaseOrderModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div
            className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/60
            "
        >
            <div
                className="
                w-full max-w-lg
                rounded-2xl
                border border-slate-800
                bg-slate-900
                p-6
                "
            >
                <h2 className="mb-6 text-xl font-semibold text-white">
                    Create Purchase Order
                </h2>

                <div className="space-y-4">
                    <input
                        placeholder="Supplier"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-white"
                    />

                    <input
                        placeholder="Total Amount"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 text-white"
                    />
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <AppButton
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </AppButton>

                    <AppButton>
                        Create Order
                    </AppButton>
                </div>
            </div>
        </div>
    );
}