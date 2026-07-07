"use client";

import {
    Bell,
    Search,
    Menu,
} from "lucide-react";

export function Header() {
    const openSidebar = () => {
        window.dispatchEvent(
            new CustomEvent("open-sidebar")
        );
    };

    return (
        <header className="sticky top-0 z-30 border-b border-slate-950 bg-[#030712]/70 backdrop-blur-md">
            <div className="flex items-center justify-between h-[72px] px-4 md:px-6 lg:px-8">

                {/* Left */}

                <div className="flex items-center gap-3">

                    <button
                        onClick={openSidebar}
                        className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900 bg-slate-950 text-slate-300"
                    >
                        <Menu size={18} />
                    </button>

                    <div className="hidden md:flex items-center gap-2.5 rounded-xl border border-slate-900 bg-slate-950 px-3.5 py-2 w-80">
                        <Search size={15} className="text-slate-500" />

                        <input
                            placeholder="Search analytics, products..."
                            className="bg-transparent outline-none text-xs text-white placeholder:text-slate-600 w-full"
                        />
                    </div>
                </div>

                {/* Right */}

                <div className="flex items-center gap-3 md:gap-4">
                    <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-slate-950 text-slate-400 hover:text-slate-200">
                        <Bell size={16} />
                    </button>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white">
                        AH
                    </div>
                </div>
            </div>
        </header>
    );
}