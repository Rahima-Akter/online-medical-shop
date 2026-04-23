export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

async function handler(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  const backendUrl = `${BACKEND_URL}${path}${search}`;

  // Forward request safely
  const backendResponse = await fetch(backendUrl, {
    method: request.method,
    headers: {
      "content-type": request.headers.get("content-type") || "",
      cookie: request.headers.get("cookie") || "",
      origin: request.headers.get("origin") || "",
      referer: request.headers.get("referer") || "",
    },
    body:
      request.method !== "GET" && request.method !== "HEAD"
        ? await request.text()
        : undefined,
    cache: "no-store",
  });

  const responseBody = await backendResponse.text();

  // Create response
  const response = new NextResponse(responseBody, {
    status: backendResponse.status,
    headers: {
      "content-type":
        backendResponse.headers.get("content-type") || "application/json",
    },
  });

  // Proper cookie forwarding
  const setCookie = backendResponse.headers.get("set-cookie");

  if (setCookie) {
    response.headers.append("set-cookie", setCookie);
  }

  return response;
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;