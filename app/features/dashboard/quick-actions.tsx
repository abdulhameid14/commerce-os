"use client";

import {
    Package,
    ShoppingCart,
    Users,
} from "lucide-react";

export function QuickActions() {
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
            <h3 className="mb-5 text-lg font-semibold text-white">
                Quick Actions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                    className="
                    rounded-xl
                    border
                    border-slate-800
                    p-4
                    hover:border-blue-500
                    "
                >
                    <Package
                        size={20}
                        className="mx-auto mb-2"
                    />

                    <span className="text-sm text-white">
                        Product
                    </span>
                </button>

                <button
                    className="
                    rounded-xl
                    border
                    border-slate-800
                    p-4
                    hover:border-blue-500
                    "
                >
                    <ShoppingCart
                        size={20}
                        className="mx-auto mb-2"
                    />

                    <span className="text-sm text-white">
                        Order
                    </span>
                </button>

                <button
                    className="
                    rounded-xl
                    border
                    border-slate-800
                    p-4
                    hover:border-blue-500
                    "
                >
                    <Users
                        size={20}
                        className="mx-auto mb-2"
                    />

                    <span className="text-sm text-white">
                        Customer
                    </span>
                </button>
            </div>
        </div>
    );
}