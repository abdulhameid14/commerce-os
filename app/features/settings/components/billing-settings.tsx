"use client";

import { AppButton } from "../../../components/ui/app-button";

export function BillingSettings() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                    Billing & Subscription
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                    Manage your current subscription and payment details.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-blue-500 bg-blue-500/5 p-5">
                    <p className="text-sm text-slate-400">Current Plan</p>

                    <h4 className="mt-2 text-xl font-bold text-white">
                        Professional
                    </h4>

                    <p className="mt-2 text-sm text-blue-400">
                        $49/month
                    </p>
                </div>

                <div className="rounded-xl border border-slate-800 p-5">
                    <p className="text-sm text-slate-400">
                        Next Billing Date
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-white">
                        July 30, 2026
                    </h4>
                </div>

                <div className="rounded-xl border border-slate-800 p-5">
                    <p className="text-sm text-slate-400">
                        Payment Method
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-white">
                        Visa •••• 4242
                    </h4>
                </div>
            </div>

            <div className="mt-6 flex gap-3">
                <AppButton className="w-auto px-6">
                    Upgrade Plan
                </AppButton>

                <AppButton className="w-auto px-6 bg-slate-800 hover:bg-slate-700">
                    Download Invoice
                </AppButton>
            </div>
        </div>
    );
}