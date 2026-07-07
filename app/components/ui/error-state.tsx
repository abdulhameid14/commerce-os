"use client";

interface ErrorStateProps {
    message?: string;
}

export function ErrorState({
    message = "Something went wrong",
}: ErrorStateProps) {
    return (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-red-400">
            {message}
        </div>
    );
}