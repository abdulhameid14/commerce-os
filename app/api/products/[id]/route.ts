import { NextResponse } from "next/server";
import { products } from "../_store";
export async function GET(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;

    const product = products.find(
        (product) => product.id === id
    );

    if (!product) {
        return NextResponse.json(
            {
                message: "Product not found",
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.json(product);
}
export async function DELETE(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;

    const index = products.findIndex(
        (product) => product.id === id
    );

    if (index === -1) {
        return NextResponse.json(
            {
                message: "Product not found",
            },
            {
                status: 404,
            }
        );
    }

    products.splice(index, 1);

    return NextResponse.json({
        success: true,
    });
}

export async function PUT(
    request: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const body = await request.json();

    const { id } = await params;

    const index = products.findIndex(
        (product) => product.id === id
    );

    if (index === -1) {
        return NextResponse.json(
            {
                message: "Product not found",
            },
            {
                status: 404,
            }
        );
    }

    products[index] = {
        ...products[index],
        ...body,
    };

    return NextResponse.json(
        products[index]
    );
}