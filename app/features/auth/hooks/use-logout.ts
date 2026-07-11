"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/auth-context";

export function useLogout() {
    const router = useRouter();

    const { logout } =
        useAuth();

    return () => {
        logout();

        router.push("/login");
    };
}