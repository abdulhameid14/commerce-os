"use client";

const devices = [
    { device: "Mobile", value: "64%" },
    { device: "Desktop", value: "28%" },
    { device: "Tablet", value: "8%" },
];

export function DeviceAnalytics() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-5 text-lg font-semibold text-white">
                Device Analytics
            </h3>

            <div className="space-y-4">
                {devices.map((item) => (
                    <div
                        key={item.device}
                        className="flex items-center justify-between"
                    >
                        <span className="text-slate-300">
                            {item.device}
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