"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { AppButton } from "../../../components/ui/app-button";

export function OtpForm() {
    const [otp, setOtp] = useState(
        new Array(6).fill("")
    );

    const [timer, setTimer] =
        useState(60);

    const inputRefs = useRef<
        HTMLInputElement[]
    >([]);

    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () =>
            clearInterval(interval);
    }, [timer]);

    const handleChange = (
        value: string,
        index: number
    ) => {
        if (!/^\d*$/.test(value))
            return;

        const updatedOtp = [...otp];

        updatedOtp[index] =
            value.slice(-1);

        setOtp(updatedOtp);

        if (
            value &&
            index < 5
        ) {
            inputRefs.current[
                index + 1
            ]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[
                index - 1
            ]?.focus();
        }
    };

    const handlePaste = (
        e: React.ClipboardEvent<HTMLInputElement>
    ) => {
        e.preventDefault();

        const pasted =
            e.clipboardData
                .getData("text")
                .slice(0, 6);

        if (!/^\d+$/.test(pasted))
            return;

        const values =
            pasted.split("");

        const updated = [
            ...otp,
        ];

        values.forEach(
            (value, index) => {
                updated[index] =
                    value;
            }
        );

        setOtp(updated);

        inputRefs.current[
            Math.min(
                values.length,
                5
            )
        ]?.focus();
    };

    const handleSubmit = () => {
        const code =
            otp.join("");

        console.log(code);
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            className="space-y-8"
        >
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Verify Email
                </h1>

                <p className="mt-2 text-slate-400">
                    Enter the 6-digit
                    verification code.
                </p>
            </div>

            <div className="flex justify-between gap-3">
                {otp.map(
                    (digit, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                if (el)
                                    inputRefs.current[
                                        index
                                    ] = el;
                            }}
                            value={digit}
                            maxLength={1}
                            onPaste={
                                handlePaste
                            }
                            onChange={(e) =>
                                handleChange(
                                    e.target.value,
                                    index
                                )
                            }
                            onKeyDown={(e) =>
                                handleKeyDown(
                                    e,
                                    index
                                )
                            }
                            className="
              h-14
              w-14

              rounded-xl

              border
              border-slate-700

              bg-[#0B1220]

              text-center
              text-xl
              text-white

              outline-none

              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              "
                        />
                    )
                )}
            </div>

            <AppButton
                onClick={
                    handleSubmit
                }
            >
                Verify Code
            </AppButton>

            <div className="text-center">
                {timer > 0 ? (
                    <p className="text-sm text-slate-400">
                        Resend code in{" "}
                        <span className="text-white">
                            {timer}s
                        </span>
                    </p>
                ) : (
                    <button
                        onClick={() =>
                            setTimer(60)
                        }
                        className="
            text-sm
            text-blue-400

            hover:text-blue-300
            "
                    >
                        Resend Code
                    </button>
                )}
            </div>
        </motion.div>
    );
}