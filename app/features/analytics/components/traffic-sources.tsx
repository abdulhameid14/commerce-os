"use client";

const traffic = [
    { source: "Google", value: "46%" },
    { source: "Direct", value: "28%" },
    { source: "Facebook", value: "15%" },
    { source: "Instagram", value: "11%" },
];

export function TrafficSources() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-5 text-lg font-semibold text-white">
                Traffic Sources
            </h3>

            <div className="space-y-4">
                {traffic.map((item) => (
                    <div
                        key={item.source}
                        className="flex items-center justify-between"
                    >
                        <span className="text-slate-300">
                            {item.source}
                        </span>

                        <span className="font-semibold text-white">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}