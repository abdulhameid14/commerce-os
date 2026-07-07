"use client";

export function CustomerLifetimeValue() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Customer Lifetime Value
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
                <div>
                    <p className="text-sm text-slate-400">
                        Average CLV
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        $1,240
                    </h4>
                </div>

                <div>
                    <p className="text-sm text-slate-400">
                        Avg Orders
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        8.2
                    </h4>
                </div>

                <div>
                    <p className="text-sm text-slate-400">
                        Avg Spend
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        $152
                    </h4>
                </div>
            </div>
        </div>
    );
}