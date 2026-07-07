"use client";

import { AppButton } from "../../../components/ui/app-button";

interface Props {
    open: boolean;
    onClose: () => void;
}

export function MarketingExportModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="mb-6 text-xl font-semibold text-white">
                    Export Marketing Data
                </h2>

                <div className="space-y-3">
                    <button className="w-full rounded-xl border border-slate-800 p-3 text-left text-white">
                        PDF
                    </button>

                    <button className="w-full rounded-xl border border-slate-800 p-3 text-left text-white">
                        Excel
                    </button>

                    <button className="w-full rounded-xl border border-slate-800 p-3 text-left text-white">
                        CSV
                    </button>
                </div>

                <div className="mt-6 flex justify-end">
                    <AppButton
                        onClick={onClose}
                    >
                        Close
                    </AppButton>
                </div>
            </div>
        </div>
    );
}