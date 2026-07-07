import { useState } from "react";

export function useInventoryFilters() {
    const [search, setSearch] =
        useState("");

    const [status, setStatus] =
        useState("all");

    return {
        search,
        setSearch,
        status,
        setStatus,
    };
}