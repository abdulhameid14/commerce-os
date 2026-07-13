import { NextResponse } from "next/server";
import { customers } from "./_store";

export async function GET() {
    return NextResponse.json(customers);
}