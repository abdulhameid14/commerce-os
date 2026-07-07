"use client";

const products = [
    {
        name: "iPhone 17 Pro",
        sales: 420,
    },

    {
        name: "MacBook Pro",
        sales: 310,
    },

    {
        name: "AirPods Pro",
        sales: 270,
    },
];

export function TopProducts() {
    return (
        <div
            className="
            rounded-2xl
            border
            border-slate-800
           bg-slate-900/40
            p-6
            "
        >
            <h3 className="mb-5 text-lg font-semibold text-white">
                Top Products
            </h3>

            <div className="space-y-4">
                {products.map((product) => (
                    <div
                        key={product.name}
                        className="
                        flex
                        items-center
                        justify-between
                        "
                    >
                        <span className="text-slate-300">
                            {product.name}
                        </span>

                        <span className="text-white font-semibold">
                            {product.sales}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}