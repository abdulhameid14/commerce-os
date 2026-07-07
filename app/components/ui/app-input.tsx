"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    success?: boolean;
}

export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
    ({ label, error, success, type, className, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        const isPassword = type === "password";
        const actualType = isPassword && showPassword ? "text" : type;

        return (
            <div className="w-full space-y-2 text-left">
                <label className="block text-xs font-medium text-slate-300 tracking-wide px-0.5">
                    {label}
                </label>

                <div className="relative">
                    <input
                        ref={ref}
                        type={actualType}
                        className={`
              w-full h-12 rounded-xl text-[14px] outline-none text-white px-4
              bg-slate-900/40 backdrop-blur-md
              border border-slate-800/80 transition-all duration-200
              placeholder:text-slate-600
              hover:border-slate-700
              ${error
                                ? "border-red-500/50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                : success
                                    ? "border-emerald-500/50 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    : "focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:bg-slate-900/80"
                            }
              ${className || ""}
            `}
                        {...props}
                    />

                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    )}

                    {!isPassword && success && !error && (
                        <CheckCircle2
                            size={16}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400"
                        />
                    )}
                </div>

                {error && (
                    <div className="flex items-center gap-1.5 px-1 text-xs text-red-400 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle size={13} />
                        <span>{error}</span>
                    </div>
                )}
            </div>
        );
    }
);

AppInput.displayName = "AppInput";