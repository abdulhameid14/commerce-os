"use client";

interface EmptyStateProps {
    title: string;
    description?: string;
}

export function EmptyState({
    title,
    description,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <h3 className="text-lg font-semibold text-white">
                {title}
            </h3>

            {description && (
                <p className="mt-2 text-sm text-slate-400">
                    {description}
                </p>
            )}
        </div>
    );
}