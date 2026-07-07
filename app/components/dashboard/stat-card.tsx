"use client";

import { motion } from "framer-motion";

interface StatCardProps {
    title: string;
    value: string;
    trend: string;
}

export function StatCard({ title, value, trend }: StatCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative group overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-md p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-colors hover:border-slate-700/80"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {title}
                </p>
                <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/10 tracking-wide">
                    {trend}
                </span>
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-bold tracking-tight text-white font-mono">
                    {value}
                </h3>
            </div>
        </motion.div>
    );
}