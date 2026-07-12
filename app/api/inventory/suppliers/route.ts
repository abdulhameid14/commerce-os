import { NextResponse } from "next/server";

import { mockSuppliers } from "../_store";

export async function GET() {
    return NextResponse.json(
        mockSuppliers
    );
}