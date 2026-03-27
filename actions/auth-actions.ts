"use server";

import { actionClient } from "@/lib/safe-action";
import { phoneSchema, registerSchema, verifyOtpSchema } from "@/lib/validation";
import { ReturnActionType } from "@/types";
import { cookies } from "next/headers";

export const sendOtp = actionClient
  .schema(phoneSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch("http://localhost:8080/api/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: parsedInput.phone }),
    });

    const data = await res.json();
    return data;
  });

export const verifyOtpAc = actionClient
  .schema(verifyOtpSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch("http://localhost:8080/api/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedInput),
    });

    const data = await res.json();
    return data;
  });

export const register = actionClient
  .schema(registerSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedInput),
      credentials: "include",
    });

    const data = await res.json();

    if (data.token) {
      cookies().set("token", data.token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // maxAge: 60 * 60 * 1000,
      });
    }

    return data;
  });

export async function getMe(): Promise<ReturnActionType | null> {
  try {
    // const { cookies } = await import("next/headers");
    const token = cookies().get("token")?.value;

    if (!token) return null;

    const res = await fetch("http://localhost:8080/api/auth/me", {
      headers: { Cookie: `token=${token}` },
      cache: "no-store",
    });

    const data = await res.json();
    return data ?? null;
  } catch {
    return null; // ← har qanday xatoda null
  }
}

export async function logoutAction() {
  const { cookies } = await import("next/headers");
  cookies().delete("token");

  await fetch("http://localhost:8080/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });
}
