"use client";

import { X } from "lucide-react";

interface SupplierDetailsDrawerProps {
    open: boolean;
    onClose: () => void;
    supplier: any;
}

export function SupplierDetailsDrawer({
    open,
    onClose,
    supplier,
}: SupplierDetailsDrawerProps) {
    if (!open || !supplier) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/60">
            <div className="absolute right-0 top-0 h-full w-full max-w-md border-l border-slate-800 bg-slate-950 p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">
                        Supplier Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-5">
                    <div>
                        <p className="text-xs text-slate-500">
                            Company
                        </p>

                        <p className="text-white">
                            {supplier.company}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Contact Person
                        </p>

                        <p className="text-white">
                            {supplier.contactPerson}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Email
                        </p>

                        <p className="text-white">
                            {supplier.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Phone
                        </p>

                        <p className="text-white">
                            {supplier.phone}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Status
                        </p>

                        <p className="text-white">
                            {supplier.status}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}