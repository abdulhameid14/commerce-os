"use client";

export function CustomerAnalytics() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-5 text-lg font-semibold text-white">
                Customer Analytics
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
                <div>
                    <p className="text-sm text-slate-400">
                        New Customers
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        248
                    </h4>
                </div>

                <div>
                    <p className="text-sm text-slate-400">
                        Returning Customers
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        642
                    </h4>
                </div>

                <div>
                    <p className="text-sm text-slate-400">
                        Retention Rate
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        71%
                    </h4>
                </div>
            </div>
        </div>
    );
}