import { CustomerTable } from "../../features/customers/components/customer-table";
import { CustomerSegments } from "../../features/customers/components/customer-segments";

import { CustomerAnalytics } from "../../features/customers/components/customer-analytics";
export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <CustomerAnalytics />
            <CustomerSegments />

            <div>
                <h1 className="text-3xl font-bold text-white">
                    Customers
                </h1>

                <p className="mt-2 text-slate-400">
                    Manage customer accounts and activity.
                </p>
            </div>

            <CustomerTable />
        </div>
    );
}