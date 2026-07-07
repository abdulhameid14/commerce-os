import { ReactNode } from "react";

interface AuthCardProps {
    children: ReactNode;
}

export function AuthCard({
    children,
}: AuthCardProps) {
    return (
        <div
            className="
      w-full

      max-w-[460px]

      rounded-3xl

      border
      border-slate-800

      bg-[#0F172A]

      p-8
      md:p-10

      shadow-[0_20px_80px_rgba(0,0,0,.45)]
      "
        >
            {children}
        </div>
    );
}