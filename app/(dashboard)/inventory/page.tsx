import { InventoryTable } from "@/app/features/inventory/components/inventory-table";
import { InventoryAnalytics } from "@/app/features/inventory/components/inventory-analytics";
import { InventoryMovementsTable } from "@/app/features/inventory/components/inventory-movements-table";
import { WarehouseGrid } from "@/app/features/inventory/components/warehouse-grid";
import { SuppliersTable } from "@/app/features/inventory/components/suppliers-table";
import { PurchaseOrdersTable } from "@/app/features/inventory/components/purchase-orders-table";
import { InventoryReportTable } from "../../../app/features/inventory/components/inventory-report-table";
export default function InventoryPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Inventory
                </h1>

                <p className="mt-2 text-slate-400">
                    Track stock levels and inventory status.
                </p>
            </div>

            <InventoryTable />

            <WarehouseGrid />

            <InventoryMovementsTable />

            <SuppliersTable />

            <PurchaseOrdersTable />

            <InventoryReportTable />

            <InventoryAnalytics />
        </div>
    );
}