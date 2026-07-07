"use client";

import { PackageOpen } from "lucide-react";

import { AppButton } from "../../../components/ui/app-button";

interface Props {
    onAddProduct?: () => void;
}

export function EmptyState({
    onAddProduct,
}: Props) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="rounded-full bg-slate-800 p-5">
                <PackageOpen
                    size={40}
                    className="text-slate-400"
                />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">
                No products found
            </h3>

            <p className="mt-2 max-w-sm text-slate-400">
                Create your first product
                to start managing inventory
                inside CommerceOS.
            </p>

            <AppButton
                onClick={onAddProduct}
                className="mt-6 w-auto px-6"
            >
                Add Product
            </AppButton>
        </div>
    );
}