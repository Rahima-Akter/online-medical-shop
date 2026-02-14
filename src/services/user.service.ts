import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) {
      return null;
    }
    const { data: session, error } = await authClient.getSession({
      fetchOptions: {
        headers: {
          Cookie: `better-auth.session_token=${sessionToken}`,
        },
      },
    });

    if (error || !session) {
      return null;
    }
    return session;
  } catch (err) {
    console.error("Failed to get session:", err);
    return null;
  }
}

export const logout = async() => {
  const cookieStore =  await cookies();
  cookieStore.delete("better-auth.session_token")
}
