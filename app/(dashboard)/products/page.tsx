import { ProductTable } from "../../features/products/components/product-table";

export default function ProductsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Products
                </h1>

                <p className="mt-2 text-slate-400">
                    Manage your store inventory.
                </p>
            </div>

            <ProductTable />
        </div>
    );
}