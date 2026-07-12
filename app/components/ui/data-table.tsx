"use client";

import { ReactNode } from "react";
import { Pagination } from "./pagination";

interface DataTableProps {
    columns: ReactNode;
    children: ReactNode;

    currentPage?: number;
    totalPages?: number;

    onPageChange?: (
        page: number
    ) => void;
}

export function DataTable({
    columns,
    children,
    currentPage,
    totalPages,
    onPageChange,
}: DataTableProps) {
    return (
        <>
            <div
                className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-950/30
                "
            >
                <div className="overflow-x-auto">
                    <table
                        className="
                        w-full
                        min-w-[900px]
                        table-auto
                        "
                    >
                        <thead>
                            <tr
                                className="
                                bg-slate-950/80
                                border-b
                                border-slate-800
                                "
                            >
                                {columns}
                            </tr>
                        </thead>

                        <tbody
                            className="
                            divide-y
                            divide-slate-800/60
                            "
                        >
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>

            {
                currentPage !== undefined &&
                totalPages !== undefined &&
                onPageChange !== undefined &&
                totalPages > 1 && (
                    <div className="mt-6">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={onPageChange}
                        />
                    </div>
                )
            }
        </>
    );
}