"use client";

import { useState } from "react";

import { ProfileSettings } from "./profile-settings";
import { StoreSettings } from "./store-settings";
import { NotificationSettings } from "./notification-settings";
import { SecuritySettings } from "./security-settings";
import { BillingSettings } from "./billing-settings";
import { TeamSettings } from "./team-settings";
import { DangerZone } from "./danger-zone";

const tabs = [
    {
        id: "profile",
        label: "Profile",
    },
    {
        id: "store",
        label: "Store",
    },
    {
        id: "notifications",
        label: "Notifications",
    },
    {
        id: "security",
        label: "Security",
    },
    {
        id: "billing",
        label: "Billing",
    },
    {
        id: "team",
        label: "Team",
    },
    {
        id: "danger",
        label: "Danger Zone",
    },
];

export function SettingsTabs() {
    const [tab, setTab] =
        useState("profile");

    return (
        <div className="space-y-6">
            <div
                className="
                overflow-x-auto

                rounded-2xl
                border
                border-slate-800

                bg-slate-900/40

                p-2
                "
            >
                <div className="flex min-w-max gap-2">
                    {tabs.map((item) => (
                        <button
                            key={item.id}
                            onClick={() =>
                                setTab(item.id)
                            }
                            className={`
                rounded-xl
                px-5
                py-2.5

                text-sm
                font-medium

                whitespace-nowrap

                transition-all
                duration-200

                ${tab === item.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                }
              `}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {tab === "profile" && (
                <ProfileSettings />
            )}

            {tab === "store" && (
                <StoreSettings />
            )}

            {tab === "notifications" && (
                <NotificationSettings />
            )}

            {tab === "security" && (
                <SecuritySettings />
            )}

            {tab === "billing" && (
                <BillingSettings />
            )}

            {tab === "team" && (
                <TeamSettings />
            )}

            {tab === "danger" && (
                <DangerZone />
            )}
        </div>
    );
}