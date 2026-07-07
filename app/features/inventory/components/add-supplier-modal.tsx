"use client";

import { AppButton } from "../../../components/ui/app-button";

interface AddSupplierModalProps {
    open: boolean;
    onClose: () => void;
}

export function AddSupplierModal({
    open,
    onClose,
}: AddSupplierModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h2 className="mb-6 text-xl font-semibold text-white">
                    Add Supplier
                </h2>

                <div className="space-y-4">
                    <input
                        placeholder="Company Name"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-transparent px-4 text-white"
                    />

                    <input
                        placeholder="Contact Person"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-transparent px-4 text-white"
                    />

                    <input
                        placeholder="Email"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-transparent px-4 text-white"
                    />

                    <input
                        placeholder="Phone Number"
                        className="h-11 w-full rounded-xl border border-slate-800 bg-transparent px-4 text-white"
                    />

                    <textarea
                        placeholder="Address"
                        rows={4}
                        className="w-full rounded-xl border border-slate-800 bg-transparent p-4 text-white"
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
                        Save Supplier
                    </AppButton>
                </div>
            </div>
        </div>
    );
}