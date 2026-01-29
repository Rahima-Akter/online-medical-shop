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

import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ===== Dummy session =====
  const data = {
    role: "SELLER", // ADMIN | SELLER | CUSTOMER
    loggedIn: true, // Simulate logged in
  };

  const { role, loggedIn } = data;

  // ===== Not logged in? go to login =====
  if (!loggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ===== Admin routes =====
  if (role === "ADMIN") {
    // If admin tries to access seller or customer dashboards
    if (
      pathname.startsWith("/seller-dashboard") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }
    // Otherwise allow access (admin can go anywhere allowed)
    return NextResponse.next();
  }

  // ===== Seller routes =====
  if (role === "SELLER") {
    // If seller tries to access admin or customer dashboards
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
    // If customer tries to access admin or seller dashboards
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
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/seller-dashboard",
    "/seller-dashboard/:path*",
  ],
};
