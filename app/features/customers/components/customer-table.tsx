"use client";

import { useMemo, useState } from "react";
import { useTableState } from "../../../hooks/use-table-state";
import { useDebounce } from "../../../hooks/use-debounce";
import { useCustomers } from "../hooks/use-customers";
import { Customer } from "../types/customer.types";
import { DataTable } from "../../../components/ui/data-table";
import { CustomerRow } from "./customer-row";
import { CustomerProfileDrawer } from "./customer-profile-drawer";
import { CustomerEmptyState } from "./customer-empty-state";
import { LoadingState } from "@/app/components/ui/loading-state";
import { ErrorState } from "@/app/components/ui/error-state";


export function CustomerTable() {
    const {
        search,
        setSearch,
        currentPage,
        setCurrentPage,
    } = useTableState();

    const [openDrawer, setOpenDrawer] =
        useState(false);
    const debouncedSearch = useDebounce(search, 500);

    const [selectedCustomer, setSelectedCustomer] =
        useState<Customer | null>(null);

    const ITEMS_PER_PAGE = 5;

    const {
        data: customers = [],
        isLoading,
        error,
    } = useCustomers();

    const filteredCustomers =
        useMemo(() => {
            return customers.filter(
                (customer) =>
                    customer.name
                        .toLowerCase()
                        .includes(
                            debouncedSearch.toLowerCase()
                        ) ||
                    customer.email
                        .toLowerCase()
                        .includes(
                            debouncedSearch.toLowerCase()
                        )
            );
        }, [customers, debouncedSearch]);

    const totalPages = Math.ceil(
        filteredCustomers.length /
        ITEMS_PER_PAGE
    );

    const paginatedCustomers = useMemo(
        () =>
            filteredCustomers.slice(
                (currentPage - 1) *
                ITEMS_PER_PAGE,
                currentPage *
                ITEMS_PER_PAGE
            ),
        [filteredCustomers, currentPage]
    );

    if (isLoading) {
        return <LoadingState />;
    }

    if (error) {
        return (
            <ErrorState
                message="Failed to load customers"
            />
        );
    }

    return (
        <div
            className="
    rounded-3xl
    border
    border-slate-800/80
    bg-slate-900/25
    backdrop-blur-xl
    p-8
    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        ">
            <div className="mb-8 flex items-center justify-between">
                <div className="w-full max-w-md">
                    <input
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search customers..."
                        className="
            h-12
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-950/70
            px-4
            text-sm
            text-white
            outline-none
            transition-all
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            "
                    />
                </div>
            </div>

            {filteredCustomers.length ===
                0 ? (
                <CustomerEmptyState />
            ) : (
                <>
                    <DataTable
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        columns={
                            <>
                                <th className="
    px-6
    py-4
    text-left
    text-xs
    font-semibold
    uppercase
    tracking-wider
    text-slate-500
    ">
                                    Customer
                                </th>

                                <th className="
    px-6
    py-4
    text-left
    text-xs
    font-semibold
    uppercase
    tracking-wider
    text-slate-500
    ">
                                    Orders
                                </th>

                                <th className="
    px-6
    py-4
    text-left
    text-xs
    font-semibold
    uppercase
    tracking-wider
    text-slate-500
    ">
                                    Total Spent
                                </th>

                                <th className="
    px-6
    py-4
    text-left
    text-xs
    font-semibold
    uppercase
    tracking-wider
    text-slate-500
    ">
                                    Joined
                                </th>

                                <th className="
    px-6
    py-4
    text-left
    text-xs
    font-semibold
    uppercase
    tracking-wider
    text-slate-500
    ">
                                    Status
                                </th>

                                <th className="
    px-6
    py-4
    text-right
    text-xs
    font-semibold
    uppercase
    tracking-wider
    text-slate-500
    ">
                                    Actions
                                </th>
                            </>
                        }
                    >
                        {paginatedCustomers.map(
                            (customer) => (
                                <CustomerRow
                                    key={customer.id}
                                    customer={customer}
                                    onView={(customer) => {
                                        setSelectedCustomer(
                                            customer
                                        );
                                        setOpenDrawer(
                                            true
                                        );
                                    }}
                                />
                            )
                        )}
                    </DataTable>


                </>
            )}

            <CustomerProfileDrawer
                open={openDrawer}
                onClose={() =>
                    setOpenDrawer(false)
                }
                customer={selectedCustomer}
            />
        </div>
    );
}