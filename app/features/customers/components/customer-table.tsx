"use client";

import { useMemo, useState } from "react";
import { Eye } from "lucide-react";
import { CustomerProfileDrawer } from "./customer-profile-drawer";
import { mockCustomers } from "../data/mock-customers";

import { CustomerStatusBadge } from "./customer-status-badge";
import { CustomerEmptyState } from "./customer-empty-state";

import { Pagination } from "../../../components/ui/pagination";

export function CustomerTable() {
    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const ITEMS_PER_PAGE = 5;
    const [openDrawer, setOpenDrawer] =
        useState(false);

    const [selectedCustomer, setSelectedCustomer] =
        useState<any>(null);

    const filteredCustomers =
        useMemo(() => {
            return mockCustomers.filter(
                (customer) =>
                    customer.name
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        ) ||
                    customer.email
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
        }, [search]);

    const totalPages = Math.ceil(
        filteredCustomers.length /
        ITEMS_PER_PAGE
    );

    const paginatedCustomers =
        filteredCustomers.slice(
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
            <div className="mb-6">
                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    placeholder="Search customers..."
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

            {filteredCustomers.length ===
                0 ? (
                <CustomerEmptyState />
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-225">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="pb-4 text-left text-slate-400">
                                        Customer
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Orders
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Total Spent
                                    </th>

                                    <th className="pb-4 text-left text-slate-400">
                                        Joined
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
                                {paginatedCustomers.map(
                                    (
                                        customer
                                    ) => (
                                        <tr
                                            key={
                                                customer.id
                                            }
                                            className="border-b border-slate-800/50"
                                        >
                                            <td className="py-4">
                                                <div>
                                                    <p className="text-white">
                                                        {
                                                            customer.name
                                                        }
                                                    </p>

                                                    <p className="text-xs text-slate-500">
                                                        {
                                                            customer.email
                                                        }
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="py-4 text-slate-300">
                                                {
                                                    customer.orders
                                                }
                                            </td>

                                            <td className="py-4 text-slate-300">
                                                $
                                                {
                                                    customer.spent
                                                }
                                            </td>

                                            <td className="py-4 text-slate-300">
                                                {
                                                    customer.joinedAt
                                                }
                                            </td>

                                            <td className="py-4">
                                                <CustomerStatusBadge
                                                    status={
                                                        customer.status
                                                    }
                                                />
                                            </td>
                                            <td className="py-4">
                                                <div className="flex justify-end">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedCustomer(customer);
                                                            setOpenDrawer(true);
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
                                                        <Eye size={15} />
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
                        <CustomerProfileDrawer
                            open={openDrawer}
                            onClose={() =>
                                setOpenDrawer(false)
                            }
                            customer={selectedCustomer}
                        />
                    </div>
                </>

            )}
        </div>

    );
}