"use client";

import { useState } from "react";

export function NotificationSettings() {
    const [email, setEmail] =
        useState(true);

    const [orders, setOrders] =
        useState(true);

    const [marketing, setMarketing] =
        useState(false);

    const [stock, setStock] =
        useState(true);

    const Toggle = ({
        value,
        onChange,
    }: any) => (
        <button
            onClick={() =>
                onChange(!value)
            }
            className={`
            relative
            h-6
            w-11
            rounded-full
            transition-all

            ${value
                    ? "bg-blue-600"
                    : "bg-slate-700"
                }
            `}
        >
            <span
                className={`
                absolute
                top-1
                h-4
                w-4
                rounded-full
                bg-white
                transition-all

                ${value
                        ? "left-6"
                        : "left-1"
                    }
                `}
            />
        </button>
    );

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Notifications
            </h3>

            <div className="space-y-5">
                <SettingRow
                    title="Email Notifications"
                    toggle={
                        <Toggle
                            value={email}
                            onChange={setEmail}
                        />
                    }
                />

                <SettingRow
                    title="Order Notifications"
                    toggle={
                        <Toggle
                            value={orders}
                            onChange={setOrders}
                        />
                    }
                />

                <SettingRow
                    title="Marketing Emails"
                    toggle={
                        <Toggle
                            value={marketing}
                            onChange={
                                setMarketing
                            }
                        />
                    }
                />

                <SettingRow
                    title="Low Stock Alerts"
                    toggle={
                        <Toggle
                            value={stock}
                            onChange={setStock}
                        />
                    }
                />
            </div>
        </div>
    );
}

function SettingRow({
    title,
    toggle,
}: any) {
    return (
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-white">
                {title}
            </span>

            {toggle}
        </div>
    );
}