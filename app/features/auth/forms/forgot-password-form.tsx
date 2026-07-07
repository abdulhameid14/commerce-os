"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { AppInput } from "../../../components/ui/app-input";
import { AppButton } from "../../../components/ui/app-button";
import { useState } from "react";
import { motion } from "framer-motion";

export function ForgotPasswordForm() {
    const { register, handleSubmit } = useForm();

    const router = useRouter();
    const [sent, setSent] =
        useState(false);

    const onSubmit = (
        data: any
    ) => {
        console.log(data);

        setSent(true);
    };

    if (sent) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-center"
            >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-2xl text-green-400">
                    ✓
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Reset Link Sent
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Check your inbox for password reset instructions.
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Reset Password
                </h1>

                <p className="mt-2 text-slate-400">
                    Enter your email address and we'll send reset instructions.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <AppInput
                    label="Email Address"
                    placeholder="name@company.com"
                    {...register("email")}
                />

                <AppButton type="submit">
                    Send Reset Link
                </AppButton>
            </form>

            <div className="text-center">
                <Link
                    href="/login"
                    className="text-sm text-blue-400 hover:text-blue-300"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
}