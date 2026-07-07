"use client";

import { mockEmailCampaigns } from "../data/mock-email-campaigns";

export function EmailMarketingTable() {
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
                    Email Campaigns
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                    Monitor email marketing performance.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="pb-4 text-left text-slate-400">
                                Subject
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Recipients
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Open Rate
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {mockEmailCampaigns.map((campaign) => (
                            <tr
                                key={campaign.id}
                                className="border-b border-slate-800/50"
                            >
                                <td className="py-4 text-white">
                                    {campaign.subject}
                                </td>

                                <td className="py-4 text-slate-300">
                                    {campaign.recipients}
                                </td>

                                <td className="py-4 text-green-400">
                                    {campaign.openRate}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}