"use client";

import { movements } from "../data/mock-movements";

export function InventoryMovementsTable() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-5 text-lg font-semibold text-white">
                Inventory Movements
            </h3>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="pb-4 text-left text-slate-400">
                                Product
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Type
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Quantity
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Warehouse
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Date
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {movements.map((movement) => (
                            <tr
                                key={movement.id}
                                className="border-b border-slate-800/50"
                            >
                                <td className="py-4 text-white">
                                    {movement.productName}
                                </td>

                                <td className="py-4">
                                    <span
                                        className={`
                                        rounded-full
                                        px-3
                                        py-1
                                        text-xs

                                        ${movement.type === "IN"
                                                ? "bg-green-500/10 text-green-400"
                                                : movement.type === "OUT"
                                                    ? "bg-red-500/10 text-red-400"
                                                    : "bg-blue-500/10 text-blue-400"
                                            }
                                    `}
                                    >
                                        {movement.type}
                                    </span>
                                </td>

                                <td className="py-4 text-slate-300">
                                    {movement.quantity}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {movement.warehouse}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {movement.createdAt}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}