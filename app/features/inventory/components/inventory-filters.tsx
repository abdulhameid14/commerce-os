"use client";

interface InventoryFiltersProps {
    status: string;
    onChange: (value: string) => void;
}

export function InventoryFilters({
    status,
    onChange,
}: InventoryFiltersProps) {
    return (
        <select
            value={status}
            onChange={(e) =>
                onChange(e.target.value)
            }
            className="
            h-11

            rounded-xl

            border
            border-slate-800

            bg-slate-950

            px-4

            text-white
            "
        >
            <option value="all">
                All Status
            </option>

            <option value="In Stock">
                In Stock
            </option>

            <option value="Low Stock">
                Low Stock
            </option>

            <option value="Out of Stock">
                Out of Stock
            </option>
        </select>
    );
}