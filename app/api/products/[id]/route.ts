import { NextResponse } from "next/server";

export async function DELETE() {
    return NextResponse.json({
        success: true,
    });
}
export async function PUT(
    request: Request,
    { params }: {
        params: Promise<{ id: string }>
    }
) {
    const body =
        await request.json();

    const { id } =
        await params;

    return NextResponse.json({
        id,
        ...body,
    });
}