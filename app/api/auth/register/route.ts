import { NextRequest, NextResponse } from "next/server";

export async function POST(
    request: NextRequest
) {
    const body = await request.json();

    const {
        fullName,
        companyName,
        email,
        password,
    } = body;

    if (
        !fullName ||
        !companyName ||
        !email ||
        !password
    ) {
        return NextResponse.json(
            {
                message:
                    "All fields are required",
            },
            { status: 400 }
        );
    }

    const response =
        NextResponse.json({
            user: {
                id: crypto.randomUUID(),
                fullName,
                companyName,
                email,
            },
        });

    response.cookies.set(
        "token",
        "mock-jwt-token",
        {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24,
        }
    );

    return response;
}