import { NextRequest, NextResponse } from "next/server";

export async function POST(
    request: NextRequest
) {
    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json(
            {
                message:
                    "Email and password are required",
            },
            { status: 400 }
        );
    }

    const response =
        NextResponse.json({
            user: {
                id: "1",
                name: "Admin User",
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