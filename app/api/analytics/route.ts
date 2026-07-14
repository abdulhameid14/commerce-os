import { NextResponse } from "next/server";
import { analyticsCards } from "./_store";

export async function GET() {
    return NextResponse.json(analyticsCards);
}