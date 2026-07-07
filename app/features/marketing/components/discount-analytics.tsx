export function DiscountAnalytics() {
    return (
        <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Active Discounts
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    12
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Revenue Impact
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    $48K
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Usage Rate
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    32%
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Conversions
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    1,240
                </h3>
            </div>
        </div>
    );
}