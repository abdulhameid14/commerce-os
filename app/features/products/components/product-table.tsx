"use client";

import { useState } from "react";

import {
    Plus,
    Pencil,
    Trash2,
} from "lucide-react";
import Link from "next/link";

import { AppButton } from "../../../components/ui/app-button";
import { Pagination } from "../../../components/ui/pagination";
import { AddProductModal } from "./add-product-modal";
import { EditProductModal } from "./edit-product-modal";
import { DeleteProductModal } from "./delete-product-modal";
import { EmptyState } from "./empty-state";

import { useProducts } from "../hooks/use-products";
import { useDeleteProduct } from "../hooks/use-delete-product";

import { LoadingState } from "../../../components/ui/loading-state";
import { ErrorState } from "../../../components/ui/error-state";
import { Product } from "../types/product.types";

export function ProductTable() {
    const [search, setSearch] =
        useState("");

    const [openAddModal, setOpenAddModal] =
        useState(false);

    const [openEditModal, setOpenEditModal] =
        useState(false);

    const [openDeleteModal, setOpenDeleteModal] =
        useState(false);

    const [selectedProduct, setSelectedProduct] =
        useState<Product | null>(null);

    const [currentPage, setCurrentPage] =
        useState(1);

    const {
        data: products = [],
        isLoading,
        error,
    } = useProducts();

    const deleteProductMutation =
        useDeleteProduct();

    if (isLoading) {
        return <LoadingState />;
    }

    if (error) {
        return (
            <ErrorState message="Failed to load products" />
        );
    }

    const filtered = products.filter(
        (product) =>
            product.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
    );

    const productsPerPage = 5;

    const indexOfLastProduct =
        currentPage *
        productsPerPage;

    const indexOfFirstProduct =
        indexOfLastProduct -
        productsPerPage;

    const currentProducts =
        filtered.slice(
            indexOfFirstProduct,
            indexOfLastProduct
        );

    const totalPages = Math.ceil(
        filtered.length /
        productsPerPage
    );

    if (filtered.length === 0) {
        return (
            <div
                className="
                rounded-2xl
                border
                border-slate-800
                bg-card
                p-6
                "
            >
                <EmptyState
                    onAddProduct={() =>
                        setOpenAddModal(
                            true
                        )
                    }
                />

                <AddProductModal
                    open={openAddModal}
                    onClose={() =>
                        setOpenAddModal(
                            false
                        )
                    }
                />
            </div>
        );
    }

    return (
        <div
            className="
            rounded-2xl
            border
            border-slate-800
            bg-card
            p-6
            "
        >
            <div
                className="
                mb-6
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
                "
            >
                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    placeholder="Search products..."
                    className="
                    h-11
                    rounded-xl
                    border
                    border-slate-800
                    bg-transparent
                    px-4
                    text-white
                    outline-none
                    "
                />

                <AppButton
                    className="w-auto px-6"
                    onClick={() =>
                        setOpenAddModal(
                            true
                        )
                    }
                >
                    <Plus size={16} />
                    Add Product
                </AppButton>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr
                            className="
                            border-b
                            border-slate-800
                            "
                        >
                            <th className="pb-4 text-left text-slate-400">
                                Product
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                SKU
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Category
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Price
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Stock
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Status
                            </th>

                            <th className="pb-4 text-right text-slate-400">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentProducts.map(
                            (product) => (
                                <tr
                                    key={
                                        product.id
                                    }
                                    className="
                                    border-b
                                    border-slate-800/50
                                    "
                                >
                                    <td className="py-4">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="text-white hover:text-primary"
                                        >
                                            {product.name}
                                        </Link>
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            product.sku
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            product.category
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        $
                                        {
                                            product.price
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            product.stock
                                        }
                                    </td>

                                    <td className="py-4">
                                        <span
                                            className={`
                                            inline-flex
                                            items-center
                                            rounded-full
                                            border
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium
                                            
                                            ${product.status ===
                                                    "active"
                                                    ? "border-green-500/20 bg-green-500/10 text-green-400"
                                                    : "border-slate-700 bg-slate-700/30 text-slate-400"
                                                }
                                            `}
                                        >
                                            {
                                                product.status
                                            }
                                        </span>
                                    </td>

                                    <td className="py-4">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedProduct(
                                                        product
                                                    );

                                                    setOpenEditModal(
                                                        true
                                                    );
                                                }}
                                                className="
                                                rounded-lg
                                                border
                                                border-slate-700
                                                p-2
                                                text-slate-300
                                                transition
                                                hover:bg-slate-800
                                                hover:text-white
                                                "
                                            >
                                                <Pencil
                                                    size={
                                                        16
                                                    }
                                                />
                                            </button>


                                            <button
                                                onClick={() => {

                                                    setSelectedProduct(
                                                        product
                                                    );

                                                    setOpenDeleteModal(
                                                        true
                                                    );
                                                }}
                                                className="
                                                rounded-lg
                                                border
                                                border-red-500/20
                                                p-2
                                                text-red-400
                                                transition
                                                hover:bg-red-500/10
                                                "
                                            >
                                                <Trash2
                                                    size={
                                                        16
                                                    }
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={
                    currentPage
                }
                totalPages={
                    totalPages
                }
                onPageChange={
                    setCurrentPage
                }
            />

            <AddProductModal
                open={openAddModal}
                onClose={() =>
                    setOpenAddModal(
                        false
                    )
                }
            />

            <EditProductModal
                open={
                    openEditModal
                }
                onClose={() =>
                    setOpenEditModal(
                        false
                    )
                }
                product={
                    selectedProduct
                }
            />

            <DeleteProductModal
                open={openDeleteModal}
                onClose={() =>
                    setOpenDeleteModal(false)
                }
                productName={
                    selectedProduct?.name
                }
                isDeleting={
                    deleteProductMutation.isPending
                }
                onDelete={() => {
                    if (!selectedProduct)
                        return;

                    deleteProductMutation.mutate(
                        selectedProduct.id,
                        {
                            onSuccess: () => {
                                setOpenDeleteModal(
                                    false
                                );
                            },
                        }
                    );
                }}
            />
        </div>
    );
}