"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLogout } from "@/app/features/auth/hooks/use-logout";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Settings,
    FileText,
    BarChart3,
    Boxes,
    Megaphone,
    X,
} from "lucide-react";
import { useAuth } from "@/app/features/auth/context/auth-context";

const items = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Products", href: "/products", icon: Package },
    { label: "Orders", href: "/orders", icon: ShoppingCart },
    { label: "Reports", href: "/reports", icon: FileText },
    { label: "Analytics", href: "/analytics", icon: BarChart3 },
    { label: "Inventory", href: "/inventory", icon: Boxes },
    { label: "Customers", href: "/customers", icon: Users },
    { label: "Marketing", href: "/marketing", icon: Megaphone },
    { label: "Settings", href: "/settings", icon: Settings },
];

function SidebarContent() {
    const pathname = usePathname();
    const {
        user,
        loading,
    } = useAuth();

    const logout = useLogout();
    if (loading) {
        return null;
    }

    return (
        <>
            <div className="p-6 flex items-center h-[73px] border-b border-slate-900">
                <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">
                        C
                    </div>

                    <h1 className="text-base font-bold text-white">
                        CommerceOS
                    </h1>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
                {items.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all
                                ${active
                                    ? "bg-slate-900 border border-slate-800 text-white"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                                }
                            `}
                        >
                            {active && (
                                <div className="absolute left-0 w-1 h-5 bg-blue-500 rounded-r-full" />
                            )}

                            <Icon size={16} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="border-t border-slate-900 p-4">
                <p className="text-sm text-white">
                    {user?.fullName}
                </p>

                <p className="text-xs text-slate-500">
                    {user?.email}
                </p>

                <button
                    onClick={logout}
                    className="
                            mt-3
                            w-full
                            rounded-lg
                            bg-red-500/10
                            py-2
                            text-sm
                            text-red-400
                        "
                >
                    Logout
                </button>
            </div>

        </>
    );
}

export function Sidebar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handler = () => setOpen(true);

        window.addEventListener("open-sidebar", handler);

        return () =>
            window.removeEventListener("open-sidebar", handler);
    }, []);

    return (
        <>
            {/* Desktop */}

            <aside className="fixed left-0 top-0 hidden lg:flex h-screen w-72 flex-col border-r border-slate-950 bg-[#030712]">
                <SidebarContent />
            </aside>

            {/* Mobile Overlay */}

            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Drawer */}

            <aside
                className={`
                    fixed top-0 left-0 z-50 h-screen w-72
                    bg-[#030712]
                    border-r border-slate-950
                    flex flex-col
                    transition-transform duration-300
                    lg:hidden
                    ${open ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-5 right-5 text-slate-400"
                >
                    <X size={20} />
                </button>

                <SidebarContent />
            </aside>
        </>
    );
}