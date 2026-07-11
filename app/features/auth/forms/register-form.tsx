"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../schemas/register.schema";
import { RegisterFormData } from "../types/auth.types";

import { AppInput } from "../../../components/ui/app-input";
import { AppButton } from "../../../components/ui/app-button";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/auth.animation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const router = useRouter();

    const onSubmit = async (
        data: RegisterFormData
    ) => {
        try {
            const response =
                await fetch(
                    "/api/auth/register",
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
                    "Registration failed"
                );

                return;
            }

            toast.success(
                "Account created successfully"
            );

            router.push(
                "/login"
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
            <div className="space-y-5">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Create Workspace
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Create your CommerceOS account and start
                        managing products, orders and inventory.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <AppInput
                            label="Full Name"
                            placeholder="John Smith"
                            error={errors.fullName?.message}
                            {...register("fullName")}
                        />

                        <AppInput
                            label="Company Name"
                            placeholder="Acme Trading"
                            error={errors.companyName?.message}
                            {...register("companyName")}
                        />
                    </div>

                    <AppInput
                        label="Email Address"
                        placeholder="john@company.com"
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

                    <AppInput
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••"
                        error={errors.confirmPassword?.message}
                        {...register("confirmPassword")}
                    />

                    <label className="flex items-start gap-2 text-sm text-slate-400">
                        <input
                            type="checkbox"
                            className="mt-1"
                        />

                        <span>
                            I agree to the Terms &
                            Conditions
                        </span>
                    </label>

                    <AppButton loading={isSubmitting}>
                        Create Account
                    </AppButton>
                </form>

                <div className="text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}