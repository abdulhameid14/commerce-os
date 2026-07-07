"use client";

import { mockCampaigns } from "../data/mock-campaigns";

export function CampaignsTable() {
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
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                    Marketing Campaigns
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                    Manage active and paused campaigns.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="pb-4 text-left text-slate-400">
                                Campaign
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Channel
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Budget
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {mockCampaigns.map((campaign) => (
                            <tr
                                key={campaign.id}
                                className="border-b border-slate-800/50"
                            >
                                <td className="py-4 text-white">
                                    {campaign.name}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {campaign.channel}
                                </td>

                                <td className="py-4 text-slate-300">
                                    ${campaign.budget}
                                </td>

                                <td className="py-4">
                                    <span
                                        className={`
                                        rounded-full
                                        px-3
                                        py-1
                                        text-xs
                                        ${campaign.status === "Active"
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-yellow-500/10 text-yellow-400"
                                            }
                                        `}
                                    >
                                        {campaign.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}