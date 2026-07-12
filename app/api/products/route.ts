import { NextRequest, NextResponse } from "next/server";
import { products } from "./_store";

export async function GET() {
    return NextResponse.json(products);
}

export async function POST(
    request: NextRequest
) {
    const body = await request.json();

    const product = {
        id: crypto.randomUUID(),
        ...body,
    };

    products.push(product);

    return NextResponse.json(
        product,
        {
            status: 201,
        }
    );
}