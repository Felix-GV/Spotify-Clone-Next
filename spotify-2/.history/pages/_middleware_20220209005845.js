import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl;
    // allow request on conditions
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    // redirect to login if conditions arnt met

    if (!token && pathname !== '/Login') {
        return NextResponse.redirect('/Login')
    }

}