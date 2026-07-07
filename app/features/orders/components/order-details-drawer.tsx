"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Order } from "../types/order.types";

interface OrderDetailsDrawerProps {
    open: boolean;
    onClose: () => void;
    order: Order | null;
}

export function OrderDetailsDrawer({
    open,
    onClose,
    order,
}: OrderDetailsDrawerProps) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        exit={{ x: 500 }}
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
                        border-border-custom
                        bg-surface
                        shadow-2xl
                        "
                    >
                        {!order ? null : (
                            <div className="flex h-full flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-border-custom p-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white">
                                            {order.id}
                                        </h2>
                                        <p className="text-sm text-slate-400">
                                            Order Details
                                        </p>
                                    </div>

                                    <button
                                        onClick={onClose}
                                        className="rounded-lg p-2 text-slate-400 hover:bg-card hover:text-white transition-colors"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    {/* Customer */}
                                    <div className="rounded-2xl border border-border-custom bg-card/40 p-5">
                                        <h3 className="mb-4 text-sm font-semibold text-white">
                                            Customer
                                        </h3>
                                        <div className="space-y-2">
                                            <p className="text-white font-medium">
                                                {order.customer}
                                            </p>
                                            <p className="text-slate-400 text-sm">
                                                {order.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Shipping */}
                                    <div className="rounded-2xl border border-border-custom bg-card/40 p-5">
                                        <h3 className="mb-4 text-sm font-semibold text-white">
                                            Shipping Address
                                        </h3>
                                        {order.shippingAddress ? (
                                            <div className="space-y-1 text-slate-300 text-sm">
                                                <p>{order.shippingAddress.street}</p>
                                                <p>{order.shippingAddress.city}</p>
                                                <p>{order.shippingAddress.country}</p>
                                            </div>
                                        ) : (
                                            <p className="text-slate-500 text-sm italic">No shipping info available</p>
                                        )}
                                    </div>

                                    {/* Items */}
                                    <div className="rounded-2xl border border-border-custom bg-card/40 p-5">
                                        <h3 className="mb-4 text-sm font-semibold text-white">
                                            Order Items
                                        </h3>
                                        <div className="space-y-3">
                                            {order.orderItems?.map((item) => (
                                                <div key={item.id} className="flex justify-between text-sm">
                                                    <span className="text-slate-300">
                                                        {item.productName} <span className="text-slate-500 text-xs">x{item.quantity}</span>
                                                    </span>
                                                    <span className="text-white font-medium">
                                                        ${item.price * item.quantity}
                                                    </span>
                                                </div>
                                            )) || <p className="text-slate-500 text-sm italic">No items found</p>}
                                        </div>
                                    </div>

                                    {/* Summary */}
                                    <div className="rounded-2xl border border-border-custom bg-card/40 p-5">
                                        <h3 className="mb-4 text-sm font-semibold text-white">
                                            Payment Summary
                                        </h3>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Subtotal</span>
                                                <span className="text-white">${order.total}</span>
                                            </div>

                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Shipping</span>
                                                <span className="text-white">${order.shippingCost || 0}</span>
                                            </div>

                                            <div className="flex justify-between border-t border-border-custom pt-3">
                                                <span className="font-semibold text-white">Total</span>
                                                <span className="font-semibold text-white">
                                                    ${Number(order.total) + (order.shippingCost || 0)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}