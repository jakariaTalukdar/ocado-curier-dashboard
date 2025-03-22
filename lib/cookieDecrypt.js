"use server";
import {cookies} from "next/headers";
import {jwtVerify} from "jose";
import {redirect} from 'next/navigation'
import {pathURL} from "@/lib/pathURL";

export async function authUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!process.env.AUTH_SECRET) {
        throw new Error("AUTH_SECRET is not defined");
    }

    if (token) {
        try {
            const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

            const {payload} = await jwtVerify(token, secret);
            return payload;
        } catch (error) {
            console.error("Token verification failed:", error);
            if (error) {
                redirect(pathURL.SIGN_IN);
            }
        }
    }

    return null;
}