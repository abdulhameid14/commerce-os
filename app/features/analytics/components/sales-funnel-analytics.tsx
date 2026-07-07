"use client";

const funnel = [
    {
        stage: "Visitors",
        value: 12000,
    },
    {
        stage: "Product Views",
        value: 7800,
    },
    {
        stage: "Add To Cart",
        value: 3200,
    },
    {
        stage: "Checkout",
        value: 1800,
    },
    {
        stage: "Purchases",
        value: 1248,
    },
];

export function SalesFunnelAnalytics() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Sales Funnel
            </h3>

            <div className="space-y-4">
                {funnel.map((item) => (
                    <div
                        key={item.stage}
                        className="flex items-center justify-between rounded-xl border border-slate-800 p-4"
                    >
                        <span className="text-slate-300">
                            {item.stage}
                        </span>

                        <span className="font-semibold text-white">
                            {item.value.toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}