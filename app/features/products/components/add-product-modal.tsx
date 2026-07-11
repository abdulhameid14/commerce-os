"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { AppButton } from "../../../components/ui/app-button";
import { useCreateProduct } from "../hooks/use-create-product";
import { productSchema } from "../schemas/product.schema";
import {
    ProductForm,
    ProductFormValues,
} from "../../../features/products/components/product-form";

interface Props {
    open: boolean;
    onClose: () => void;
}

const initialValues: ProductFormValues = {
    name: "",
    sku: "",
    category: "",
    price: 0,
    stock: 0,
    status: "active",
    image: null,
};

export function AddProductModal({
    open,
    onClose,
}: Props) {
    const [values, setValues] =
        useState<ProductFormValues>(
            initialValues
        );

    const createProductMutation =
        useCreateProduct();
    const [errors, setErrors] =
        useState<
            Record<string, string>
        >({});

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
        const result =
            productSchema.safeParse(
                values
            );

        if (!result.success) {
            const fieldErrors =
                result.error.flatten()
                    .fieldErrors;

            setErrors({
                name:
                    fieldErrors.name?.[0] ||
                    "",
                sku:
                    fieldErrors.sku?.[0] ||
                    "",
                category:
                    fieldErrors.category?.[0] ||
                    "",
                price:
                    fieldErrors.price?.[0] ||
                    "",
                stock:
                    fieldErrors.stock?.[0] ||
                    "",
            });

            return;
        }

        setErrors({});

        createProductMutation.mutate(
            {
                id: crypto.randomUUID(),
                ...result.data,
            },
            {
                onSuccess: () => {
                    setValues({
                        name: "",
                        sku: "",
                        category: "",
                        price: 0,
                        stock: 0,
                        status: "active",
                        image: null,
                    });

                    onClose();
                },
            }
        );
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
                            size={20}
                            className="text-slate-400"
                        />
                    </button>
                </div>

                <ProductForm
                    values={values}
                    errors={errors}
                    onChange={handleChange}
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
                        disabled={
                            createProductMutation.isPending
                        }
                        className="w-auto px-6"
                    >
                        {createProductMutation.isPending
                            ? "Saving..."
                            : "Save Product"}
                    </AppButton>
                </div>
            </div>
        </div>
    );
}