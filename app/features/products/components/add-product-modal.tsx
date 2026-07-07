"use client";

import { useState } from "react";

import { X } from "lucide-react";

import { AppButton } from "../../../components/ui/app-button";

import {
    ProductForm,
    ProductFormValues,
} from "../../../features/products/components/product-form";

interface Props {
    open: boolean;
    onClose: () => void;
}

export function AddProductModal({
    open,
    onClose,
}: Props) {
    const [values, setValues] =
        useState<ProductFormValues>({
            name: "",
            sku: "",
            category: "",
            price: 0,
            stock: 0,
            status: "active",
            image: null,
        });

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

    const handleSave = () => {
        console.log(values);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-[#111827] p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">
                        Add Product
                    </h2>

                    <button
                        onClick={onClose}
                    >
                        <X
                            className="text-slate-400"
                            size={20}
                        />
                    </button>
                </div>

                <ProductForm
                    values={values}
                    onChange={
                        handleChange
                    }
                />

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="
                        rounded-xl
                        border
                        border-slate-700
                        px-4
                        py-2
                        text-white
                        "
                    >
                        Cancel
                    </button>

                    <AppButton
                        onClick={
                            handleSave
                        }
                        className="w-auto px-6"
                    >
                        Save Product
                    </AppButton>
                </div>
            </div>
        </div>
    );
}