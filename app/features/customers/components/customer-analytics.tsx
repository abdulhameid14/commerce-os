"use client";

import {
    DollarSign,
    ShoppingBag,
    Users,
    TrendingUp,
} from "lucide-react";

const analytics = [
    {
        title: "Total Customers",
        value: "2,847",
        change: "+12.4%",
        icon: Users,
    },
    {
        title: "Revenue",
        value: "$84,320",
        change: "+18.2%",
        icon: DollarSign,
    },
    {
        title: "Orders",
        value: "5,624",
        change: "+9.1%",
        icon: ShoppingBag,
    },
    {
        title: "Growth Rate",
        value: "24.8%",
        change: "+3.5%",
        icon: TrendingUp,
    },
];

export function CustomerAnalytics() {
    return (
        <div
            className="
      grid
      gap-5
      md:grid-cols-2
      xl:grid-cols-4
      "
        >
            {analytics.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/40
            p-5
            "
                    >
                        <div className="flex items-center justify-between">
                            <div
                                className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-xl

                bg-blue-500/10
                text-blue-400
                "
                            >
                                <Icon size={20} />
                            </div>

                            <span
                                className="
                rounded-full
                bg-green-500/10
                px-2.5
                py-1
                text-xs
                text-green-400
                "
                            >
                                {item.change}
                            </span>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm text-slate-400">
                                {item.title}
                            </p>

                            <h3
                                className="
                mt-1
                text-2xl
                font-bold
                text-white
                "
                            >
                                {item.value}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}