import { NextResponse } from "next/server";

import { mockPurchaseOrders } from "../_store";

export async function GET() {
    return NextResponse.json(
        mockPurchaseOrders
    );
}