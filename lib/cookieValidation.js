"use server";

import {cookies} from "next/headers";
import {SignJWT} from "jose";
import {redirect} from "next/navigation";

export async function cookieValidation(data) {

    const cookieStore = await cookies();

    // cookieStore.set('biolink-api-token', data.token);

    if (!process.env.AUTH_SECRET) {
        throw new Error("AUTH_SECRET is not defined");
    }

    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

    // Create the JWT token
    const tokenValue = await new SignJWT({
        email: data?.email,
        token: data?.token,
    })
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(secret);

    // Store the token in cookies
    cookieStore.set("token", tokenValue, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 day
        secure: true,
        path: "/",
    });
    redirect("/dashboard");
}