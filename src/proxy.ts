import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Step 1: Get the session by calling our route handler
  // We use the absolute backend URL directly here because
  // proxy.ts cannot call its own Next.js routes reliably in production
  let session = null;

  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/api/auth/get-session`,
      {
        method: "GET",
        headers: {
          // Forward the user's cookies to the backend
          cookie: request.headers.get("cookie") || "",
          origin: "https://online-medical-shop-frontend.vercel.app",
        },
        cache: "no-store",
      },
    );

    if (res.ok) {
      session = await res.json();
    }
  } catch (e) {
    // If the fetch fails, treat as logged out
    session = null;
  }

  // Step 2: No logged in user → send to login
  if (!session?.user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Step 3: Role-based access control
  const role = session.user.role; // "ADMIN", "SELLER", or "CUSTOMER"

  if (role === "ADMIN") {
    if (
      pathname.startsWith("/seller-dashboard") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }
  }

  if (role === "SELLER") {
    if (
      pathname.startsWith("/admin-dashboard") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/seller-dashboard", request.url));
    }
  }

  if (role === "CUSTOMER") {
    if (
      pathname.startsWith("/admin-dashboard") ||
      pathname.startsWith("/seller-dashboard")
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Step 4: All good — let the user through
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/shop/checkout",
    "/shop/checkout/:path*",
    "/dashboard*",
    "/dashboard/:path*",
    "/cart",
    "/cart/:path*",
    "/my-orders",
    "/my-orders/:path*",
    "/add-medicine",
    "/add-medicine/:path*",
    "/medicine-management",
    "/medicine-management/:path*",
    "/order-management",
    "/order-management/:path*",
    "/seller-dashboard",
    "/seller-dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/category",
    "/category/:path*",
    "/inventory",
    "/inventory/:path*",
    "/manage-users",
    "/manage-users/:path*",
    "/orders",
    "/orders/:path*",
  ],
};