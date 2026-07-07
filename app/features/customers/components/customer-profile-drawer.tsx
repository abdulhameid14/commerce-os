"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { CustomerActivityTimeline } from "./customer-activity-timeline";
import { CustomerOrdersTab } from "./customer-orders-tab";

interface CustomerProfileDrawerProps {
    open: boolean;
    onClose: () => void;
    customer: any;
}

export function CustomerProfileDrawer({
    open,
    onClose,
    customer,
}: CustomerProfileDrawerProps) {
    const [activeTab, setActiveTab] =
        useState<"profile" | "orders">(
            "profile"
        );

    const customerOrders = [
        {
            id: "#1024",
            total: "$240",
            status: "Delivered",
            date: "Jun 20, 2026",
        },
        {
            id: "#1025",
            total: "$480",
            status: "Processing",
            date: "Jun 18, 2026",
        },
        {
            id: "#1026",
            total: "$190",
            status: "Pending",
            date: "Jun 12, 2026",
        },
    ];

    const activities = [
        {
            id: "1",
            title: "Placed Order #1025",
            date: "Today",
        },
        {
            id: "2",
            title: "Updated Profile",
            date: "Yesterday",
        },
        {
            id: "3",
            title: "Purchased iPhone 17 Pro",
            date: "3 days ago",
        },
        {
            id: "4",
            title: "Joined Store",
            date: "1 week ago",
        },
    ];

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={onClose}
                        className="
              fixed inset-0 z-40
              bg-black/60
              backdrop-blur-sm
            "
                    />

                    <motion.div
                        initial={{
                            x: 500,
                        }}
                        animate={{
                            x: 0,
                        }}
                        exit={{
                            x: 500,
                        }}
                        transition={{
                            type: "spring",
                            damping: 28,
                            stiffness: 220,
                        }}
                        className="
              fixed
              right-0
              top-0
              z-50

              h-screen
              w-full
              max-w-xl

              border-l
              border-slate-800

              bg-[#030712]

              shadow-2xl
            "
                    >
                        {customer && (
                            <div className="flex h-full flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-slate-800 p-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white">
                                            {customer.name}
                                        </h2>

                                        <p className="text-sm text-slate-400">
                                            Customer Profile
                                        </p>
                                    </div>

                                    <button
                                        onClick={onClose}
                                        className="
                      rounded-lg
                      p-2
                      text-slate-400
                      hover:bg-slate-900
                      hover:text-white
                    "
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    {/* Customer Info */}
                                    <div className="rounded-2xl border border-slate-800 p-5">
                                        <h3 className="mb-4 text-sm font-semibold text-white">
                                            Customer Information
                                        </h3>

                                        {/* Tabs */}
                                        <div
                                            className="
                        mb-6
                        flex
                        rounded-xl
                        border
                        border-slate-800
                        p-1
                      "
                                        >
                                            <button
                                                onClick={() =>
                                                    setActiveTab(
                                                        "profile"
                                                    )
                                                }
                                                className={`
                          flex-1
                          rounded-lg
                          px-4
                          py-2
                          text-sm
                          transition-all

                          ${activeTab ===
                                                        "profile"
                                                        ? "bg-blue-600 text-white"
                                                        : "text-slate-400"
                                                    }
                        `}
                                            >
                                                Profile
                                            </button>

                                            <button
                                                onClick={() =>
                                                    setActiveTab(
                                                        "orders"
                                                    )
                                                }
                                                className={`
                          flex-1
                          rounded-lg
                          px-4
                          py-2
                          text-sm
                          transition-all

                          ${activeTab ===
                                                        "orders"
                                                        ? "bg-blue-600 text-white"
                                                        : "text-slate-400"
                                                    }
                        `}
                                            >
                                                Orders
                                            </button>
                                        </div>

                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Name
                                                </p>

                                                <p className="text-white">
                                                    {
                                                        customer.name
                                                    }
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Email
                                                </p>

                                                <p className="text-white">
                                                    {
                                                        customer.email
                                                    }
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Customer
                                                    ID
                                                </p>

                                                <p className="text-white">
                                                    {
                                                        customer.id
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Statistics */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl border border-slate-800 p-5">
                                            <p className="text-xs text-slate-500">
                                                Orders
                                            </p>

                                            <h3 className="mt-2 text-2xl font-bold text-white">
                                                {
                                                    customer.orders
                                                }
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl border border-slate-800 p-5">
                                            <p className="text-xs text-slate-500">
                                                Total
                                                Spent
                                            </p>

                                            <h3 className="mt-2 text-2xl font-bold text-white">
                                                $
                                                {
                                                    customer.spent
                                                }
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    {activeTab ===
                                        "profile" ? (
                                        <>
                                            <CustomerActivityTimeline
                                                activities={
                                                    activities
                                                }
                                            />

                                            <div className="rounded-2xl border border-slate-800 p-5">
                                                <h3 className="mb-4 text-sm font-semibold text-white">
                                                    Notes
                                                </h3>

                                                <textarea
                                                    rows={
                                                        5
                                                    }
                                                    placeholder="Add customer notes..."
                                                    className="
                            w-full
                            rounded-xl
                            border
                            border-slate-800
                            bg-slate-950
                            p-4
                            text-white
                            outline-none
                            focus:border-blue-500
                          "
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <CustomerOrdersTab
                                            orders={
                                                customerOrders
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}