import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        stats: [
            {
                title: "Revenue",
                value: "$24,580",
                trend: "+12.3%",
            },
            {
                title: "Orders",
                value: "1,248",
                trend: "+8.1%",
            },
            {
                title: "Products",
                value: "324",
                trend: "+4.2%",
            },
            {
                title: "Customers",
                value: "842",
                trend: "+15.6%",
            },
        ],

        revenue: [
            { name: "Mon", revenue: 1200 },
            { name: "Tue", revenue: 1800 },
            { name: "Wed", revenue: 1400 },
            { name: "Thu", revenue: 2600 },
            { name: "Fri", revenue: 2200 },
            { name: "Sat", revenue: 3200 },
            { name: "Sun", revenue: 2800 },
        ],

        recentOrders: [
            {
                id: "#1024",
                customer: "John Smith",
                amount: "$240",
                status: "Delivered",
            },
            {
                id: "#1025",
                customer: "Sarah",
                amount: "$480",
                status: "Processing",
            },
        ],

        topProducts: [
            {
                name: "iPhone 17 Pro",
                sales: 420,
            },
            {
                name: "MacBook Pro",
                sales: 310,
            },
        ],
    });
}