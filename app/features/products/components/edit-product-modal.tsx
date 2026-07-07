"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { AppButton } from "../../../components/ui/app-button";

import {
    ProductForm,
    ProductFormValues,
} from "./product-form";

interface Props {
    open: boolean;
    onClose: () => void;
    product: ProductFormValues | null;
}

export function EditProductModal({
    open,
    onClose,
    product,
}: Props) {
    const [values, setValues] =
        useState<ProductFormValues>(
            product || {
                name: "",
                sku: "",
                category: "",
                price: 0,
                stock: 0,
                status: "active",
                image: null,
            }
        );

    if (!open) return null;

    const handleChange = (
        field: keyof ProductFormValues,
        value: any
    ) => {
        setValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleUpdate = () => {
        console.log(values);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-[#111827] p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">
                        Edit Product
                    </h2>

                    <button onClick={onClose}>
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                <ProductForm
                    values={values}
                    onChange={handleChange}
                />

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-xl border border-slate-700 px-4 py-2 text-white"
                    >
                        Cancel
                    </button>

                    <AppButton
                        onClick={handleUpdate}
                        className="w-auto px-6"
                    >
                        Update Product
                    </AppButton>
                </div>
            </div>
        </div>
    );
}