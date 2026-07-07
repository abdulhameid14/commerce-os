"use client";

import { AppInput } from "../../../components/ui/app-input";

export interface ProductFormValues {
    name: string;
    sku: string;
    category: string;
    price: number;
    stock: number;
    status: "active" | "inactive";
    image?: File | null;
}

interface ProductFormProps {
    values: ProductFormValues;
    onChange: (
        field: keyof ProductFormValues,
        value: any
    ) => void;
}

export function ProductForm({
    values,
    onChange,
}: ProductFormProps) {
    return (
        <div className="space-y-4">
            <AppInput
                label="Product Name"
                value={values.name}
                onChange={(e) =>
                    onChange(
                        "name",
                        e.target.value
                    )
                }
            />

            <AppInput
                label="SKU"
                value={values.sku}
                onChange={(e) =>
                    onChange(
                        "sku",
                        e.target.value
                    )
                }
            />

            <AppInput
                label="Category"
                value={values.category}
                onChange={(e) =>
                    onChange(
                        "category",
                        e.target.value
                    )
                }
            />

            <AppInput
                label="Price"
                type="number"
                value={values.price}
                onChange={(e) =>
                    onChange(
                        "price",
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <AppInput
                label="Stock"
                type="number"
                value={values.stock}
                onChange={(e) =>
                    onChange(
                        "stock",
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <div>
                <label className="mb-2 block text-sm text-slate-300">
                    Status
                </label>

                <select
                    value={values.status}
                    onChange={(e) =>
                        onChange(
                            "status",
                            e.target.value
                        )
                    }
                    className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-900
                    px-4
                    text-white
                    "
                >
                    <option value="active">
                        Active
                    </option>

                    <option value="inactive">
                        Inactive
                    </option>
                </select>
            </div>

            <div>
                <label className="mb-2 block text-sm text-slate-300">
                    Product Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        onChange(
                            "image",
                            e.target.files?.[0]
                        )
                    }
                    className="
                    block
                    w-full
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-3
                    text-sm
                    text-slate-300
                    "
                />
            </div>
        </div>
    );
}