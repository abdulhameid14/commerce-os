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
            <div className="overflow-x-auto">
                <table className="w-full min-w-225">
                    <thead>
                        <tr className="border-b border-slate-800">
                            {columns}
                        </tr>
                    </thead>

                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>

            {currentPage &&
                totalPages &&
                onPageChange && (
                    <div className="mt-6">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={onPageChange}
                        />
                    </div>
                )}
        </>
    );
}