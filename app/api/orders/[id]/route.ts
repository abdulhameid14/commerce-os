import { NextRequest, NextResponse } from "next/server";
import { orders } from "../_store";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const order = orders.find(
        (o) => o.id === id
    );

    if (!order) {
        return NextResponse.json(
            { message: "Order not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(order);
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const body = await request.json();

    const order = orders.find(
        (o) => o.id === id
    );

    if (!order) {
        return NextResponse.json(
            { message: "Order not found" },
            { status: 404 }
        );
    }

    order.status = body.status;

    return NextResponse.json(order);
}