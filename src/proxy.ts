// import { NextRequest, NextResponse } from "next/server";

// export function proxy(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   let isLoggedIn = false;
//   let isAdmin = false;
//   let isSeller = false;

//   const data = { role: "ADMIN" }; // actual loggedin users session data will be fetched here

//   if (data.role === "ADMIN") {
//     isAdmin = true;
//   } else if (data.role === "SELLER") {
//     isSeller = true;
//   } else {
//     isLoggedIn = true; // For any other role or regular logged-in user
//   }

//   if (!isAdmin && !isSeller && !isLoggedIn) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (isAdmin && isSeller && pathname.startsWith("/dashboard")) {
//     if (isAdmin) {
//       return NextResponse.redirect(new URL("/admin-dashboard", request.url));
//     } else {
//       return NextResponse.redirect(new URL("/seller-dashboard", request.url));
//     }
//   }

//   if (
//     isLoggedIn &&
//     !isAdmin &&
//     !isSeller &&
//     pathname.startsWith("/admin-dashboard") &&
//     pathname.startsWith("/seller-dashboard")
//   ) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/profile",
//     "/dashboard",
//     "/dashboard/:path*",
//     "/admin-dashboard",
//     "/admin-dashboard/:path*",
//     "/seller-dashboard",
//     "/seller-dashboard/:path*",
//   ],
// };

// import { NextRequest, NextResponse } from "next/server";

// export function proxy(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   // ===== Dummy session =====
//   const data = {
//     role: "CUSTOMER", // ADMIN | SELLER | CUSTOMER
//     loggedIn: true, // Simulate logged in
//   };

//   const { role, loggedIn } = data;

//   // ===== Not logged in? go to login =====
//   if (!loggedIn) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // ===== Admin routes =====
//   if (role === "ADMIN") {
//     // If admin tries to access seller or customer dashboards
//     if (
//       pathname.startsWith("/seller-dashboard") ||
//       pathname.startsWith("/dashboard")
//     ) {
//       return NextResponse.redirect(new URL("/admin-dashboard", request.url));
//     }
//     // Otherwise allow access (admin can go anywhere allowed)
//     return NextResponse.next();
//   }

//   // ===== Seller routes =====
//   if (role === "SELLER") {
//     // If seller tries to access admin or customer dashboards
//     if (
//       pathname.startsWith("/admin-dashboard") ||
//       pathname.startsWith("/dashboard")
//     ) {
//       return NextResponse.redirect(new URL("/seller-dashboard", request.url));
//     }
//     return NextResponse.next();
//   }

//   // ===== Customer routes =====
//   if (role === "CUSTOMER") {
//     // If customer tries to access admin or seller dashboards
//     if (
//       pathname.startsWith("/admin-dashboard") ||
//       pathname.startsWith("/seller-dashboard")
//     ) {
//       return NextResponse.redirect(new URL("/dashboard", request.url));
//     }

//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/profile",
//     "/profile/:path*",
//     "/dashboard",
//     "/dashboard/:path*",
//     "/admin-dashboard",
//     "/admin-dashboard/:path*",
//     "/seller-dashboard",
//     "/seller-dashboard/:path*",
//   ],
// };

import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Get the session token from cookie
  const sessionToken = request.cookies.get("better-auth.session_token")?.value;

  // ===== Not logged in? redirect to login =====
  if (!sessionToken) {
    const loginUrl = new URL("/login", request.url);

    // Save the page the user was trying to visit
    loginUrl.searchParams.set(
      "redirect",
      request.nextUrl.pathname + request.nextUrl.search
    );

    return NextResponse.redirect(loginUrl);
  }

  // ===== Fetch real session from auth backend =====
  const { data: session, error } = await authClient.getSession({
    fetchOptions: {
      headers: {
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
    },
  });

  if (error || !session) {
    const loginUrl = new URL("/login", request.url);

    // Save the page the user was trying to visit
    loginUrl.searchParams.set(
      "redirect",
      request.nextUrl.pathname + request.nextUrl.search
    );

    return NextResponse.redirect(loginUrl);
  }

  const role = session.user?.role; // assume your session.user.role exists
  const loggedIn = true; // session exists so user is logged in

  if (!loggedIn) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set(
      "redirect",
      request.nextUrl.pathname + request.nextUrl.search
    );

    return NextResponse.redirect(loginUrl);
  }

  // ===== Admin routes =====
  if (role === "ADMIN") {
    if (
      pathname.startsWith("/seller-dashboard") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }
    return NextResponse.next();
  }

  // ===== Seller routes =====
  if (role === "SELLER") {
    if (
      pathname.startsWith("/admin-dashboard") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/seller-dashboard", request.url));
    }
    return NextResponse.next();
  }

  // ===== Customer routes =====
  if (role === "CUSTOMER") {
    if (
      pathname.startsWith("/admin-dashboard") ||
      pathname.startsWith("/seller-dashboard")
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/shop/checkout",
    "/shop/checkout/:path*",
    "/dashboard",
    "/my-orders",
    "/my-orders/:path",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/seller-dashboard",
    "/seller-dashboard/:path*",
  ],
};

