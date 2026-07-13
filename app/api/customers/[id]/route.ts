import { NextRequest, NextResponse } from "next/server";
import { customers } from "../_store";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const customer = customers.find(
        (c) => c.id === id
    );

    if (!customer) {
        return NextResponse.json(
            { message: "Customer not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(customer);
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const body = await request.json();

    const customer = customers.find(
        (c) => c.id === id
    );

    if (!customer) {
        return NextResponse.json(
            { message: "Customer not found" },
            { status: 404 }
        );
    }

    if (
        body.status === "active" ||
        body.status === "inactive"
    ) {
        customer.status = body.status;
    }

    if (body.notes !== undefined) {
        customer.notes = body.notes;
    }

    return NextResponse.json(customer);
}