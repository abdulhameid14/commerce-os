import { useState } from "react";

export function useInventoryPagination() {
    const [currentPage, setCurrentPage] =
        useState(1);

    return {
        currentPage,
        setCurrentPage,
    };
}