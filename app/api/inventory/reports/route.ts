import { NextResponse } from "next/server";

import { mockInventoryReports } from "../_store";

export async function GET() {
    return NextResponse.json(
        mockInventoryReports
    );
}