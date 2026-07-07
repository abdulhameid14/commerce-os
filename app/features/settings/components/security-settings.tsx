"use client";

import { useState } from "react";

import { AppInput } from "../../../components/ui/app-input";
import { AppButton } from "../../../components/ui/app-button";

export function SecuritySettings() {
    const [password, setPassword] =
        useState("");

    const strength =
        password.length < 6
            ? {
                label: "Weak",
                width: "33%",
                color: "bg-red-500",
            }
            : password.length < 10
                ? {
                    label: "Medium",
                    width: "66%",
                    color: "bg-yellow-500",
                }
                : {
                    label: "Strong",
                    width: "100%",
                    color: "bg-green-500",
                };

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Security
            </h3>

            <div className="space-y-4">
                <AppInput
                    label="Current Password"
                    type="password"
                />

                <AppInput
                    label="New Password"
                    type="password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <AppInput
                    label="Confirm Password"
                    type="password"
                />
            </div>

            <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                        Password Strength
                    </span>

                    <span className="text-sm text-white">
                        {strength.label}
                    </span>
                </div>

                <div className="h-2 rounded-full bg-slate-800">
                    <div
                        className={`h-2 rounded-full ${strength.color}`}
                        style={{
                            width: strength.width,
                        }}
                    />
                </div>
            </div>

            <div className="mt-6">
                <AppButton className="w-auto px-6">
                    Change Password
                </AppButton>
            </div>
        </div>
    );
}