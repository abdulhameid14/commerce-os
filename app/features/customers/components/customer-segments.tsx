"use client";

import {
    Crown,
    RefreshCcw,
    UserPlus,
    UserX,
} from "lucide-react";

const segments = [
    {
        title: "VIP Customers",
        value: 124,
        icon: Crown,
        color:
            "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
        title: "Repeat Customers",
        value: 892,
        icon: RefreshCcw,
        color:
            "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
        title: "New Customers",
        value: 248,
        icon: UserPlus,
        color:
            "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
        title: "Inactive Customers",
        value: 76,
        icon: UserX,
        color:
            "bg-red-500/10 text-red-400 border-red-500/20",
    },
];

export function CustomerSegments() {
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
                    Customer Segments
                </h3>

                <p className="text-sm text-slate-400">
                    Categorize customers based on activity
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {segments.map((segment) => {
                    const Icon = segment.icon;

                    return (
                        <div
                            key={segment.title}
                            className={`
              rounded-xl
              border
              p-4
              transition-all
              hover:scale-[1.02]

              ${segment.color}
              `}
                        >
                            <div className="flex items-center justify-between">
                                <Icon size={20} />

                                <span className="text-2xl font-bold">
                                    {segment.value}
                                </span>
                            </div>

                            <p className="mt-3 text-sm font-medium">
                                {segment.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}