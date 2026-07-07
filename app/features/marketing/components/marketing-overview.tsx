export function MarketingOverview() {
    return (
        <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Active Coupons
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    24
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Running Campaigns
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    8
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Discounts
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    12
                </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-slate-400">
                    Conversion Rate
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                    4.8%
                </h3>
            </div>
        </div>
    );
}