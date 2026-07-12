import { NextResponse } from "next/server";

import { movements } from "../_store";

export async function GET() {
    return NextResponse.json(
        movements
    );
}