"use client";

const categories = [
    { name: "Phones", value: "42%" },
    { name: "Laptops", value: "31%" },
    { name: "Accessories", value: "18%" },
    { name: "Tablets", value: "9%" },
];

export function TopCategoriesAnalytics() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-5 text-lg font-semibold text-white">
                Top Categories
            </h3>

            <div className="space-y-4">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="flex items-center justify-between"
                    >
                        <span className="text-slate-300">
                            {category.name}
                        </span>

                        <span className="font-semibold text-white">
                            {category.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}