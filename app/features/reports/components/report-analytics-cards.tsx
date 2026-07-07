"use client";

const cards = [
    {
        title: "Total Revenue",
        value: "$124,580",
        growth: "+12.4%",
    },
    {
        title: "Total Orders",
        value: "8,421",
        growth: "+8.2%",
    },
    {
        title: "New Customers",
        value: "1,248",
        growth: "+15.6%",
    },
];

export function ReportAnalyticsCards() {
    return (
        <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/40
                    p-6
                    "
                >
                    <p className="text-sm text-slate-400">
                        {card.title}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                        {card.value}
                    </h3>

                    <span
                        className="
                        mt-3
                        inline-flex

                        rounded-full

                        bg-green-500/10

                        px-2
                        py-1

                        text-xs
                        text-green-400
                        "
                    >
                        {card.growth}
                    </span>
                </div>
            ))}
        </div>
    );
}