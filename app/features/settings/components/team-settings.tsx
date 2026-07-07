"use client";

import { AppButton } from "../../../components/ui/app-button";

const members = [
    {
        id: 1,
        name: "Abdul Hameid",
        email: "owner@commerceos.com",
        role: "Owner",
    },
    {
        id: 2,
        name: "Sarah Ahmed",
        email: "admin@commerceos.com",
        role: "Admin",
    },
];

export function TeamSettings() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Team Members
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                        Manage workspace access.
                    </p>
                </div>

                <AppButton className="w-auto px-6">
                    Invite Member
                </AppButton>
            </div>

            <div className="space-y-3">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="flex items-center justify-between rounded-xl border border-slate-800 p-4"
                    >
                        <div>
                            <p className="font-medium text-white">
                                {member.name}
                            </p>

                            <p className="text-sm text-slate-400">
                                {member.email}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                                {member.role}
                            </span>

                            <button className="text-sm text-red-400 hover:text-red-300">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}