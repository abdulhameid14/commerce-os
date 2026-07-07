"use client";

import { AlertTriangle } from "lucide-react";

import { AppButton } from "../../../components/ui/app-button";

interface Props {
    open: boolean;
    onClose: () => void;
    onDelete: () => void;
    productName?: string;
}

export function DeleteProductModal({
    open,
    onClose,
    onDelete,
    productName,
}: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#111827] p-6">
                <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-red-500/10 p-4">
                        <AlertTriangle
                            size={28}
                            className="text-red-400"
                        />
                    </div>
                </div>

                <h2 className="text-center text-xl font-semibold text-white">
                    Delete Product
                </h2>

                <p className="mt-3 text-center text-slate-400">
                    Are you sure you want to delete
                    <span className="font-medium text-white">
                        {" "}
                        {productName}
                    </span>
                    ?
                </p>

                <p className="mt-1 text-center text-sm text-slate-500">
                    This action cannot be undone.
                </p>

                <div className="mt-6 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-slate-700 py-3 text-white"
                    >
                        Cancel
                    </button>

                    <AppButton
                        onClick={onDelete}
                        className="flex-1 bg-red-600 hover:bg-red-700"
                    >
                        Delete
                    </AppButton>
                </div>
            </div>
        </div>
    );
}