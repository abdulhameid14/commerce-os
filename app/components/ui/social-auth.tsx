"use client";

import { Apple } from "lucide-react";

interface SocialAuthProps {
    onGoogle?: () => void;
    onApple?: () => void;
}

export function SocialAuth({ onGoogle, onApple }: SocialAuthProps) {
    return (
        // وزعناهم جنب بعض grid-cols-2 عشان نكسب مساحة في الكارد الكلي
        <div className="grid grid-cols-2 gap-3 w-full">
            <button
                type="button"
                onClick={onGoogle}
                className="
          flex h-11 items-center justify-center gap-2.5 rounded-xl border border-slate-800/80
          bg-slate-900/40 text-sm font-medium text-slate-200 backdrop-blur-md
          transition-all duration-200
          hover:bg-slate-800/60 hover:border-slate-700 hover:text-white
          active:scale-[0.97]
        "
            >
                {/* أيقونة Google الرسمية ملونة بتنطق في الـ Dark Mode */}
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                        fill="#EA4335"
                        d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.273 0 3.19 2.7 1.223 6.636l4.043 3.129z"
                    />
                    <path
                        fill="#4285F4"
                        d="M23.49 12.275c0-.796-.073-1.564-.205-2.307H12v4.37h6.46a5.523 5.523 0 01-2.395 3.62l3.745 2.904c2.19-2.02 3.454-4.996 3.454-8.587z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M5.266 14.235L1.223 17.364A11.934 11.934 0 010 12c0-1.923.455-3.74 1.223-5.364l4.043 3.129a7.015 7.015 0 000 4.47z"
                    />
                    <path
                        fill="#34A853"
                        d="M12 24c3.245 0 5.973-1.08 7.964-2.913l-3.745-2.904c-1.04.695-2.364 1.11-4.219 1.11-3.218 0-5.945-2.173-6.918-5.1L1.04 17.323C3.008 21.3 7.155 24 12 24z"
                    />
                </svg>
                <span className="text-xs tracking-wide">Google</span>
            </button>

            <button
                type="button"
                onClick={onApple}
                className="
          flex h-11 items-center justify-center gap-2.5 rounded-xl border border-slate-800/80
          bg-slate-900/40 text-sm font-medium text-slate-200 backdrop-blur-md
          transition-all duration-200
          hover:bg-slate-800/60 hover:border-slate-700 hover:text-white
          active:scale-[0.97]
        "
            >
                <Apple size={16} className="text-white fill-white" />
                <span className="text-xs tracking-wide">Apple</span>
            </button>
        </div>
    );
}