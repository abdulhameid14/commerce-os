"use client";

export function LoadingState() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="animate-pulse space-y-4">
                <div className="h-10 w-64 rounded bg-slate-800" />
                <div className="h-72 rounded bg-slate-800" />
            </div>
        </div>
    );
}