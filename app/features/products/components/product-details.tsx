"use client";

import { useParams } from "next/navigation";

import { useProducts } from "../hooks/use-products";

import { LoadingState } from "../../../components/ui/loading-state";
import { ErrorState } from "../../../components/ui/error-state";

export function ProductDetails() {
    const params = useParams();

    const {
        data: products = [],
        isLoading,
        error,
    } = useProducts();

    if (isLoading) {
        return <LoadingState />;
    }

    if (error) {
        return (
            <ErrorState message="Failed to load product" />
        );
    }

    const product = products.find(
        (p) => p.id === params.id
    );

    if (!product) {
        return (
            <div className="p-6 text-white">
                Product not found
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="rounded-2xl border border-slate-800 bg-card p-6">
                <h1 className="mb-6 text-3xl font-bold text-white">
                    {product.name}
                </h1>

                <div className="space-y-4">
                    <p className="text-slate-300">
                        <span className="font-semibold text-white">
                            SKU:
                        </span>{" "}
                        {product.sku}
                    </p>

                    <p className="text-slate-300">
                        <span className="font-semibold text-white">
                            Category:
                        </span>{" "}
                        {product.category}
                    </p>

                    <p className="text-slate-300">
                        <span className="font-semibold text-white">
                            Price:
                        </span>{" "}
                        ${product.price}
                    </p>

                    <p className="text-slate-300">
                        <span className="font-semibold text-white">
                            Stock:
                        </span>{" "}
                        {product.stock}
                    </p>

                    <p className="text-slate-300">
                        <span className="font-semibold text-white">
                            Status:
                        </span>{" "}
                        {product.status}
                    </p>
                </div>
            </div>
        </div>
    );
}