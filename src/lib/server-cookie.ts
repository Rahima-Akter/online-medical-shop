import { cookies } from "next/headers";

// Forwards ALL cookies to the backend exactly as they are
// This is the only reliable approach — the cookie name changes between
// development (better-auth.session_token) and
// production (__Secure-better-auth.session_token)
export async function getCookieHeader(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
}
