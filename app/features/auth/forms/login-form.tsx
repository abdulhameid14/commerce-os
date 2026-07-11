"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/login.schema";
import type { LoginFormData } from "../types/auth.types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AppInput } from "../../../components/ui/app-input";
import { AppButton } from "../../../components/ui/app-button";
import { SocialAuth } from "../../../components/ui/social-auth";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/auth.animation";
export function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const router = useRouter();

    const onSubmit = async (
        data: LoginFormData
    ) => {
        try {
            const response =
                await fetch(
                    "/api/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify(
                            data
                        ),
                    }
                );

            const result =
                await response.json();

            if (!response.ok) {
                toast.error(
                    result.message ||
                    "Login failed"
                );

                return;
            }

            toast.success(
                "Login successful"
            );

            router.push(
                "/dashboard"
            );
        } catch {
            toast.error(
                "Something went wrong"
            );
        }
    };
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"


            transition={{
                duration: 0.35,
            }}
        >
            <div className="space-y-6">
                <div>
                    <h1
                        className="
    text-3xl
    md:text-4xl

    font-bold
    text-white
    "
                    >
                        Welcome Back
                    </h1>

                    <p
                        className="
    mt-3

    text-slate-400
    leading-relaxed
    "
                    >
                        Access your CommerceOS dashboard
                        and manage your ecommerce operations.
                    </p>
                </div>


                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <AppInput
                        label="Email Address"
                        placeholder="name@company.com"
                        error={errors.email?.message}
                        {...register("email")}
                    />

                    <AppInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        error={errors.password?.message}
                        {...register("password")}
                    />

                    <div className="flex items-center justify-between">
                        <label
                            className="
                                flex items-center
                                gap-2

                                text-sm
                                text-slate-400
                                "
                        >
                            <input
                                type="checkbox"
                                className="accent-blue-500"
                            />

                            Remember me
                        </label>

                        <Link
                            href="/forgot-password"
                            className="
                            text-sm
                            text-blue-400

                            hover:text-blue-300
                            "
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <AppButton loading={isSubmitting}>
                        Sign In
                    </AppButton>
                </form>
                <SocialAuth />

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-800" />
                    </div>

                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#111827] px-3 text-slate-500">
                            Or continue with email
                        </span>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="text-blue-400"
                    >
                        Create Workspace
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}