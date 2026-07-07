"use client";

import { AppButton } from "../../../components/ui/app-button";

interface AnalyticsExportModalProps {
    open: boolean;
    onClose: () => void;
}

export function AnalyticsExportModal({
    open,
    onClose,
}: AnalyticsExportModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h2 className="text-xl font-semibold text-white">
                    Export Analytics
                </h2>

                <div className="mt-6 space-y-3">
                    <label className="flex items-center gap-3 text-slate-300">
                        <input type="radio" name="format" />
                        PDF
                    </label>

                    <label className="flex items-center gap-3 text-slate-300">
                        <input type="radio" name="format" />
                        CSV
                    </label>

                    <label className="flex items-center gap-3 text-slate-300">
                        <input type="radio" name="format" />
                        Excel
                    </label>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <AppButton
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </AppButton>

                    <AppButton>
                        Export
                    </AppButton>
                </div>
            </div>
        </div>
    );
}