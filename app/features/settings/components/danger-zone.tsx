"use client";

import { AppButton } from "../../../components/ui/app-button";

export function DangerZone() {
    return (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <h3 className="text-lg font-semibold text-red-400">
                Danger Zone
            </h3>

            <p className="mt-2 text-sm text-slate-400">
                These actions are irreversible. Please proceed carefully.
            </p>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-red-500/20 p-4">
                    <div>
                        <p className="font-medium text-white">
                            Export Store Data
                        </p>

                        <p className="text-sm text-slate-400">
                            Download all store information.
                        </p>
                    </div>

                    <AppButton className="w-auto px-5">
                        Export
                    </AppButton>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-red-500/20 p-4">
                    <div>
                        <p className="font-medium text-white">
                            Delete Store
                        </p>

                        <p className="text-sm text-slate-400">
                            Permanently remove your store.
                        </p>
                    </div>

                    <button
                        className="
                        rounded-xl
                        border
                        border-red-500/30
                        px-5
                        py-2.5
                        text-red-400
                        transition
                        hover:bg-red-500/10
                    "
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}