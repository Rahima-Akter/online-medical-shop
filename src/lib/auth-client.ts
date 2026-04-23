import { createAuthClient } from "better-auth/react";

function betterAuthBaseUrl() {
  const raw =
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");
  const trimmed = raw.replace(/\/$/, "");
  if (!trimmed) {
    return typeof window !== "undefined"
      ? `${window.location.origin}/api/auth`
      : "http://localhost:3000/api/auth";
  }
  if (trimmed.endsWith("/api/auth")) {
    return trimmed;
  }
  return `${trimmed}/api/auth`;
}

export const authClient = createAuthClient({
  baseURL: betterAuthBaseUrl(),
  fetchOptions: {
    credentials: "include",
  },
});