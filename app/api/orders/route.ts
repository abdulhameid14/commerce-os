import { NextResponse } from "next/server";
import { orders } from "./_store";

export async function GET() {
    return NextResponse.json(orders);
}