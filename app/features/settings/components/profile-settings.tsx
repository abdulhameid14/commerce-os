"use client";

import { AppInput } from "../../../components/ui/app-input";
import { AppButton } from "../../../components/ui/app-button";

export function ProfileSettings() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Profile Settings
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
                <AppInput
                    label="Full Name"
                    placeholder="Abdul Hameid"
                />

                <AppInput
                    label="Email"
                    placeholder="abdul@example.com"
                />

                <AppInput
                    label="Phone Number"
                    placeholder="+20 100 000 0000"
                />
            </div>

            <div className="mt-6">
                <label className="mb-2 block text-sm text-slate-400">
                    Avatar
                </label>

                <input
                    type="file"
                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950
                    p-3
                    text-slate-300
                    "
                />
            </div>

            <div className="mt-6">
                <AppButton className="w-auto px-6">
                    Save Changes
                </AppButton>
            </div>
        </div>
    );
}