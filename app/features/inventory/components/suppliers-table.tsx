"use client";

import { useMemo, useState } from "react";
import { Eye } from "lucide-react";


import { Pagination } from "../../../components/ui/pagination";
import { AppButton } from "../../../components/ui/app-button";

import { AddSupplierModal } from "./add-supplier-modal";
import { SupplierDetailsDrawer } from "./supplier-details-drawer";
import { useSuppliers } from "../hooks/use-suppliers";

export function SuppliersTable() {
    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);
    const {
        data: suppliers = [],
    } = useSuppliers();
    const [openAddModal, setOpenAddModal] =
        useState(false);

    const [openDrawer, setOpenDrawer] =
        useState(false);

    const [selectedSupplier, setSelectedSupplier] =
        useState<any>(null);

    const ITEMS_PER_PAGE = 5;

    const filteredSuppliers =
        useMemo(() => {
            return suppliers.filter(
                (supplier) =>
                    supplier.company
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        ) ||
                    supplier.contactPerson
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );

        }, [search]);

    const totalPages =
        Math.ceil(
            filteredSuppliers.length /
            ITEMS_PER_PAGE
        );

    const paginatedSuppliers =
        filteredSuppliers.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,
            currentPage *
            ITEMS_PER_PAGE
        );

    return (
        <div
            className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/40
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
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Suppliers
                    </h3>

                    <p className="text-sm text-slate-400">
                        Manage supplier partners.
                    </p>
                </div>

                <AppButton
                    className="w-auto px-6"
                    onClick={() =>
                        setOpenAddModal(true)
                    }
                >
                    Add Supplier
                </AppButton>
            </div>

            <div className="mb-6">
                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    placeholder="Search suppliers..."
                    className="
                    h-11
                    w-full
                    md:w-80

                    rounded-xl

                    border
                    border-slate-800

                    bg-slate-950

                    px-4

                    text-white

                    outline-none

                    focus:border-blue-500
                    "
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="pb-4 text-left text-slate-400">
                                Company
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Contact
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Email
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Phone
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
                        {paginatedSuppliers.map(
                            (supplier) => (
                                <tr
                                    key={
                                        supplier.id
                                    }
                                    className="border-b border-slate-800/50"
                                >
                                    <td className="py-4 text-white">
                                        {
                                            supplier.company
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            supplier.contactPerson
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            supplier.email
                                        }
                                    </td>

                                    <td className="py-4 text-slate-300">
                                        {
                                            supplier.phone
                                        }
                                    </td>

                                    <td className="py-4">
                                        <span
                                            className={`
                                            rounded-full
                                            px-3
                                            py-1
                                            text-xs

                                            ${supplier.status ===
                                                    "Active"
                                                    ? "bg-green-500/10 text-green-400"
                                                    : "bg-red-500/10 text-red-400"
                                                }
                                        `}
                                        >
                                            {
                                                supplier.status
                                            }
                                        </span>
                                    </td>

                                    <td className="py-4">
                                        <div className="flex justify-end">
                                            <button
                                                onClick={() => {
                                                    setSelectedSupplier(
                                                        supplier
                                                    );

                                                    setOpenDrawer(
                                                        true
                                                    );
                                                }}
                                                className="
                                                flex
                                                items-center
                                                gap-2

                                                rounded-lg

                                                border
                                                border-slate-800

                                                px-3
                                                py-2

                                                text-slate-300

                                                hover:border-blue-500
                                                hover:text-white
                                                "
                                            >
                                                <Eye
                                                    size={
                                                        15
                                                    }
                                                />
                                                View
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="mt-6">
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
                </div>
            )}

            <AddSupplierModal
                open={openAddModal}
                onClose={() =>
                    setOpenAddModal(false)
                }
            />

            <SupplierDetailsDrawer
                open={openDrawer}
                onClose={() =>
                    setOpenDrawer(false)
                }
                supplier={selectedSupplier}
            />
        </div>
    );
}