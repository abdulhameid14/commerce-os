"use client";

import { useState } from "react";

export function useTableState() {
    const [search, setSearch] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [openFilters, setOpenFilters] =
        useState(false);

    return {
        search,
        setSearch,

        currentPage,
        setCurrentPage,

        openFilters,
        setOpenFilters,
    };
}