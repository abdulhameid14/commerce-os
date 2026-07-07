"use client";

const countries = [
    { name: "USA", orders: 5420 },
    { name: "UK", orders: 2810 },
    { name: "Germany", orders: 1740 },
    { name: "Canada", orders: 1320 },
];

export function GeographicAnalytics() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Geographic Analytics
            </h3>

            <div className="space-y-4">
                {countries.map((country) => (
                    <div
                        key={country.name}
                        className="flex items-center justify-between"
                    >
                        <span className="text-slate-300">
                            {country.name}
                        </span>

                        <span className="font-semibold text-white">
                            {country.orders}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}