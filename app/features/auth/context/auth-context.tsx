"use client";

import { createContext, useContext, useState } from "react";

import { User } from "../types/user.types";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const storedUser = localStorage.getItem("commerce-user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const loading = false;

  const login = (user: User) => {
    localStorage.setItem("commerce-user", JSON.stringify(user));

    setUser(user);
  };

  const logout = async () => {
    localStorage.removeItem("commerce-user");

    setUser(null);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
    const context =
        useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used within AuthProvider"
        );
    }

    return context;
}