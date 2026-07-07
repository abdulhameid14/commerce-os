"use client";

import { SettingsTabs } from "../../features/settings/components/settings-tabs";

export default function SettingsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Settings
                </h1>

                <p className="mt-2 text-slate-400">
                    Manage your CommerceOS workspace.
                </p>
            </div>

            <SettingsTabs />
        </div>
    );
}