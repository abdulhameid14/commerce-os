"use client";

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (
        page: number
    ) => void;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: Props) {
    const pages = Array.from(
        { length: totalPages },
        (_, i) => i + 1
    );

    return (
        <div className="mt-6 flex items-center justify-center gap-2">
            <button
                disabled={currentPage === 1}
                onClick={() =>
                    onPageChange(
                        currentPage - 1
                    )
                }
                className="
                rounded-lg
                border
                border-slate-800
                px-3
                py-2
                text-sm
                text-slate-300
                disabled:opacity-50
                "
            >
                Previous
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() =>
                        onPageChange(page)
                    }
                    className={`
                    h-10
                    w-10
                    rounded-lg
                    text-sm
                    transition

                    ${currentPage === page
                            ? "bg-blue-600 text-white"
                            : "border border-slate-800 text-slate-300 hover:bg-slate-800"
                        }
                    `}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    onPageChange(
                        currentPage + 1
                    )
                }
                className="
                rounded-lg
                border
                border-slate-800
                px-3
                py-2
                text-sm
                text-slate-300
                disabled:opacity-50
                "
            >
                Next
            </button>
        </div>
    );
}