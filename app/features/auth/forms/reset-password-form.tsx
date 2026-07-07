"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { AppInput } from "../../../components/ui/app-input";
import { AppButton } from "../../../components/ui/app-button";

export function ResetPasswordForm() {
    const { register, handleSubmit } =
        useForm();

    const [password, setPassword] =
        useState("");

    const getStrength = (
        password: string
    ) => {
        if (password.length === 0) {
            return {
                label: "",
                width: "0%",
                color: "bg-transparent",
            };
        }

        if (password.length < 6) {
            return {
                label: "Weak",
                width: "33%",
                color: "bg-red-500",
            };
        }

        if (password.length < 10) {
            return {
                label: "Medium",
                width: "66%",
                color: "bg-yellow-500",
            };
        }

        return {
            label: "Strong",
            width: "100%",
            color: "bg-green-500",
        };
    };

    const strength =
        getStrength(password);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Create New Password
                </h1>

                <p className="mt-2 text-slate-400">
                    Enter a new password for your
                    CommerceOS account.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <AppInput
                    label="New Password"
                    type="password"
                    {...register("password")}
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                {password && (
                    <div className="space-y-2">
                        <div
                            className="
                            h-2
                            w-full
                            overflow-hidden
                            rounded-full
                            bg-slate-800
                            "
                        >
                            <div
                                className={`
                                h-full
                                transition-all
                                duration-300
                                ${strength.color}
                                `}
                                style={{
                                    width:
                                        strength.width,
                                }}
                            />
                        </div>

                        <p className="text-sm text-slate-400">
                            Password Strength:
                            <span className="ml-1 text-white">
                                {strength.label}
                            </span>
                        </p>
                    </div>
                )}

                <AppInput
                    label="Confirm Password"
                    type="password"
                    {...register(
                        "confirmPassword"
                    )}
                />

                <AppButton type="submit">
                    Update Password
                </AppButton>
            </form>
        </div>
    );
}