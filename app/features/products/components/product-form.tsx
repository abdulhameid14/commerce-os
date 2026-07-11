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

    errors?: Record<string, string>;

    onChange: (
        field: keyof ProductFormValues,
        value: any
    ) => void;
}

export function ProductForm({
    values,
    errors = {},
    onChange,
}: ProductFormProps) {
    return (
        <div className="space-y-4">
            <div>
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

                {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                        {errors.name}
                    </p>
                )}
            </div>

            <div>
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

                {errors.sku && (
                    <p className="mt-1 text-sm text-red-400">
                        {errors.sku}
                    </p>
                )}
            </div>

            <div>
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

                {errors.category && (
                    <p className="mt-1 text-sm text-red-400">
                        {errors.category}
                    </p>
                )}
            </div>

            <div>
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

                {errors.price && (
                    <p className="mt-1 text-sm text-red-400">
                        {errors.price}
                    </p>
                )}
            </div>

            <div>
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

                {errors.stock && (
                    <p className="mt-1 text-sm text-red-400">
                        {errors.stock}
                    </p>
                )}
            </div>

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