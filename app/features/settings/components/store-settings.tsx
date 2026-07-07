"use client";

import { AppInput } from "../../../components/ui/app-input";
import { AppButton } from "../../../components/ui/app-button";

export function StoreSettings() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Store Settings
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
                <AppInput
                    label="Store Name"
                    placeholder="CommerceOS Store"
                />

                <AppInput
                    label="Store Email"
                    placeholder="store@example.com"
                />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <select
                    className="
                    h-12
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950
                    px-4
                    text-white
                    "
                >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>EGP</option>
                </select>

                <select
                    className="
                    h-12
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950
                    px-4
                    text-white
                    "
                >
                    <option>Africa/Cairo</option>
                    <option>UTC</option>
                    <option>Europe/London</option>
                </select>
            </div>

            <div className="mt-6">
                <label className="mb-2 block text-sm text-slate-400">
                    Store Logo
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
                    Save Store
                </AppButton>
            </div>
        </div>
    );
}