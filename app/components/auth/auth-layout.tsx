"use client";

import { ReactNode } from "react";
import { AuthBranding } from "./auth-branding";

export function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main
            className="
      min-h-screen

      bg-[#0B1220]

      relative
      overflow-hidden
    "
        >
            {/* Background Glow */}
            <div
                className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%)]
      "
            />

            <div
                className="
        relative
        z-10

        mx-auto

        flex
        min-h-screen
        max-w-7xl

        items-center
        justify-between

        gap-16

        px-6
        py-10
      "
            >
                <AuthBranding />

                {children}
            </div>
        </main>
    );
}