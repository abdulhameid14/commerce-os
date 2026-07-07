"use client";

import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: "primary" | "secondary" | "danger";
    fullWidth?: boolean;
}

export function AppButton({
    loading,
    children,
    disabled,
    className,
    variant = "primary",
    fullWidth = false,
    ...props
}: AppButtonProps) {

    // تم تكبير الخط هنا إلى text-[13px] وزودنا الـ font-semibold ليكون أوضح
    const baseStyles = "h-11 rounded-xl font-semibold text-[13px] tracking-wide transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 flex items-center justify-center gap-2 px-5 select-none whitespace-nowrap inline-flex";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-sm",
        secondary: "bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white",
        danger: "bg-red-600 text-white hover:bg-red-500 shadow-sm",
    };

    return (
        <button
            disabled={disabled || loading}
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? "w-full flex" : "w-auto"} 
        ${className || ""}
      `}
            {...props}
        >
            {loading ? (
                <Loader2 size={16} className="animate-spin text-current" />
            ) : (
                children
            )}
        </button>
    );
}