import type { NextConfig } from "next";

/**
 * Do NOT add a rewrite like `/api/auth/*` → `backend/api/*` — that drops the
 * `auth` segment and breaks Better Auth (e.g. `/api/sign-in/email` instead of
 * `/api/auth/sign-in/email`). Auth is proxied by `src/app/api/auth/[...all]/route.ts`
 * using `BACKEND_URL`.
 */
const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;