"use client";

import { Download } from "lucide-react";

interface ExportReportModalProps {
    open: boolean;
    onClose: () => void;
}

export function ExportReportModal({
    open,
    onClose,
}: ExportReportModalProps) {
    if (!open) return null;

    return (
        <div
            className="
            fixed
            inset-0
            z-50

            flex
            items-center
            justify-center

            bg-black/60
            backdrop-blur-sm
            "
        >
            <div
                className="
                w-full
                max-w-md

                rounded-2xl
                border
                border-slate-800

                bg-[#0F172A]

                p-6
                "
            >
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-white">
                        Export Report
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                        Choose export format.
                    </p>
                </div>

                <div className="space-y-3">
                    {["PDF", "CSV", "Excel"].map(
                        (format) => (
                            <label
                                key={format}
                                className="
                                flex
                                cursor-pointer
                                items-center
                                gap-3

                                rounded-xl
                                border
                                border-slate-800

                                p-4

                                hover:border-blue-500
                                "
                            >
                                <input
                                    type="radio"
                                    name="format"
                                />

                                <span className="text-white">
                                    {format}
                                </span>
                            </label>
                        )
                    )}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="
                        rounded-xl
                        border
                        border-slate-800

                        px-4
                        py-2

                        text-slate-300
                        "
                    >
                        Cancel
                    </button>

                    <button
                        className="
                        flex
                        items-center
                        gap-2

                        rounded-xl
                        bg-blue-600

                        px-4
                        py-2

                        text-white
                        "
                    >
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>
        </div>
    );
}