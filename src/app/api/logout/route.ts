import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Delete both cookie variants — production uses __Secure- prefix, dev uses plain name
  response.cookies.set("__Secure-better-auth.session_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0, // ← tells the browser to delete the cookie immediately
  });

  response.cookies.set("better-auth.session_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return response;
}