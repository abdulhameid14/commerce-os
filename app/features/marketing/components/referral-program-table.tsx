"use client";

import { mockReferrals } from "../data/mock-referrals";

export function ReferralProgramTable() {
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
                    Referral Program
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                    Referral rewards and invited users.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="pb-4 text-left text-slate-400">
                                Referred Users
                            </th>

                            <th className="pb-4 text-left text-slate-400">
                                Rewards Paid
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {mockReferrals.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b border-slate-800/50"
                            >
                                <td className="py-4 text-white">
                                    {item.referredUsers}
                                </td>

                                <td className="py-4 text-slate-300">
                                    ${item.rewardsPaid}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}