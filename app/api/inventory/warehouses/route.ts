import { NextResponse } from "next/server";

import { warehouses } from "../_store";

export async function GET() {
    return NextResponse.json(
        warehouses
    );
}