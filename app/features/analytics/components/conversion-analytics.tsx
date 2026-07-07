"use client";

export function ConversionAnalytics() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                Conversion Metrics
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
                <div>
                    <p className="text-sm text-slate-400">
                        Conversion Rate
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        4.8%
                    </h4>
                </div>

                <div>
                    <p className="text-sm text-slate-400">
                        Cart Abandonment
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        28%
                    </h4>
                </div>

                <div>
                    <p className="text-sm text-slate-400">
                        Checkout Success
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-white">
                        82%
                    </h4>
                </div>
            </div>
        </div>
    );
}