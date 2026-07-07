"use client";

import { AppButton } from "../../../components/ui/app-button";

interface StockAdjustmentModalProps {
    open: boolean;
    onClose: () => void;
}

export function StockAdjustmentModal({
    open,
    onClose,
}: StockAdjustmentModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div
                className="
                w-full
                max-w-md

                rounded-2xl

                border
                border-slate-800

                bg-slate-950

                p-6
                "
            >
                <h2 className="text-xl font-semibold text-white">
                    Adjust Stock
                </h2>

                <div className="mt-6 space-y-4">
                    <input
                        type="number"
                        placeholder="Quantity"
                        className="
                        h-11
                        w-full

                        rounded-xl

                        border
                        border-slate-800

                        bg-transparent

                        px-4

                        text-white
                        "
                    />

                    <select
                        className="
                        h-11
                        w-full

                        rounded-xl

                        border
                        border-slate-800

                        bg-slate-950

                        px-4

                        text-white
                        "
                    >
                        <option>
                            Increase
                        </option>

                        <option>
                            Decrease
                        </option>
                    </select>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <AppButton
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </AppButton>

                    <AppButton>
                        Save
                    </AppButton>
                </div>
            </div>
        </div>
    );
}