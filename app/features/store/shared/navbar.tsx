"use client";

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

import { Container } from "./container";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight"
                    >
                        CommerceOS
                    </Link>

                    <nav className="hidden gap-8 md:flex">
                        <Link href="/products">
                            Shop
                        </Link>

                        <Link href="/collections">
                            Collections
                        </Link>

                        <Link href="/products">
                            New Arrivals
                        </Link>

                        <Link href="/products">
                            Sale
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button>
                            <Search size={20} />
                        </button>

                        <button>
                            <User size={20} />
                        </button>

                        <button className="relative">
                            <ShoppingBag size={20} />

                            <span
                                className="
                                absolute
                                -right-2
                                -top-2
                                flex
                                h-5
                                w-5
                                items-center
                                justify-center
                                rounded-full
                                bg-black
                                text-[10px]
                                text-white
                                "
                            >
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
}