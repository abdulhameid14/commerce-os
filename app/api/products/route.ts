import { NextRequest, NextResponse } from "next/server";

const products = [
    {
        id: "1",
        name: "iPhone 17 Pro",
        sku: "IP17P",
        category: "Phones",
        price: 1200,
        stock: 15,
        status: "active",
    },
    {
        id: "2",
        name: "MacBook Pro",
        sku: "MBP",
        category: "Laptops",
        price: 2500,
        stock: 8,
        status: "active",
    },
];

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
        { status: 201 }
    );
}