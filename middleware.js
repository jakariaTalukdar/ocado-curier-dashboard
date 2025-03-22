import { NextRequest, NextResponse } from 'next/server'
import {cookies} from "next/headers";


const protectedRoutes = ['/dashboard']
const publicRoutes = ["/login"];

export default async function middleware(req) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    if (isProtectedRoute && !token ) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        token &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}