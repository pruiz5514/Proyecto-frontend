import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const token = request.headers.get('Authorization');

    const url = new URL(request.url);
    const params = url.searchParams.get('params');
    const response = await fetch(`https://backend-parkingnow-fuyg.onrender.com/api/users?${params}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}