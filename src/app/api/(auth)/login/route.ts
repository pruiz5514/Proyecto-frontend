import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const user = await request.json()

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/api/auth/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const data = await response.json();
    const nextResponse = NextResponse.json(data, { status: response.status });

    nextResponse.cookies.set("servToken", data.data.token, {
        httpOnly: true,
        path: '/',
    })

    return nextResponse
}