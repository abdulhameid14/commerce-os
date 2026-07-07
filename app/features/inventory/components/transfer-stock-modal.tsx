"use client";

import { AppButton } from "../../../components/ui/app-button";

interface Props {
    open: boolean;
    onClose: () => void;
}

export function TransferStockModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h2 className="text-xl font-semibold text-white">
                    Transfer Stock
                </h2>

                <div className="mt-5 space-y-4">
                    <input
                        placeholder="Product"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-transparent px-4 text-white"
                    />

                    <input
                        type="number"
                        placeholder="Quantity"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-transparent px-4 text-white"
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
                        Transfer
                    </AppButton>
                </div>
            </div>
        </div>
    );
}