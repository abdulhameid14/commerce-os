"use client";

import { Eye } from "lucide-react";

import { Customer } from "../types/customer.types";
import { CustomerStatusBadge } from "./customer-status-badge";

interface CustomerRowProps {
    customer: Customer;
    onView: (customer: Customer) => void;
}

export function CustomerRow({
    customer,
    onView,
}: CustomerRowProps) {
    return (
        <tr
            className="
            transition-colors
            hover:bg-slate-800/20
            "
        >
            <td className="px-6 py-4">
                <div>
                    <p className="font-medium text-white">
                        {customer.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                        {customer.email}
                    </p>
                </div>
            </td>

            <td className="px-6 py-4 text-slate-300">
                {customer.orders}
            </td>

            <td className="px-6 py-4 font-medium text-white">
                ${customer.spent}
            </td>

            <td className="px-6 py-4 text-slate-300">
                {customer.joinedAt}
            </td>

            <td className="px-6 py-4">
                <CustomerStatusBadge
                    status={customer.status}
                />
            </td>

            <td className="px-8 py-4 text-right">
                <button
                    onClick={() =>
                        onView(customer)
                    }
                    className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    border
                    border-slate-700

                    bg-slate-900/50

                    px-4
                    py-2

                    text-sm
                    font-medium
                    text-slate-300

                    transition-all

                    hover:border-blue-500
                    hover:bg-blue-500/10
                    hover:text-white
                    "
                >
                    <Eye size={15} />
                    View
                </button>
            </td>
        </tr>
    );
}