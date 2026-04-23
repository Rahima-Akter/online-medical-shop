import { env } from "@/env";
import { User } from "@/types/userTypes";
import { cookies } from "next/headers";

type CookieStore = Awaited<ReturnType<typeof cookies>>;

// Forward ALL cookies exactly as they are to the backend
// This is the only reliable way — picking individual cookies causes mismatch
function buildCookieHeader(cookieStore: CookieStore): string {
  return cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
}

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const cookieHeader = buildCookieHeader(cookieStore);

    if (!cookieHeader) return null;

    const res = await fetch(`${env.BACKEND_URL}/api/auth/get-session`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const session = await res.json();

    if (!session?.user) return null;

    return session;
  } catch (err) {
    console.error("Failed to get session:", err);
    return null;
  }
}

// user.service.ts
export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.set("__Secure-better-auth.session_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  cookieStore.set("better-auth.session_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
};

export const allUsers = async (page: number, limit: number) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = buildCookieHeader(cookieStore);
    if (!cookieHeader) return null;

    const res = await fetch(
      `${env.BACKEND_URL}/api/user?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          cookie: cookieHeader,
        },
        cache: "no-store",
      },
    );

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const userData = await res.json();

    return {
      user: userData.data.users,
      total: userData.data.total,
      currentPage: userData.data.currentPage,
      limit: userData.data.limit,
      totalPages: userData.data.totalPages,
    };
  } catch (err) {
    console.log(err);
  }
};

export const singleUser = async (userId: string) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = buildCookieHeader(cookieStore);
    if (!cookieHeader) return null;

    const res = await fetch(`${env.BACKEND_URL}/api/user/${userId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const userData = await res.json();
    return userData.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (payLoad: Partial<User>) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = buildCookieHeader(cookieStore);
    if (!cookieHeader) return null;

    const updatableFields: Partial<User> = {
      name: payLoad.name,
      image: payLoad.image,
      date_of_birth: payLoad.date_of_birth,
      blood_type: payLoad.blood_type,
      phone_number: payLoad.phone_number,
      default_shipping_address: payLoad.default_shipping_address,
    };

    const res = await fetch(`${env.BACKEND_URL}/api/user/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        cookie: cookieHeader,
      },
      body: JSON.stringify(updatableFields),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend error response:", errorText);
      throw new Error(`Error: ${res.statusText}`);
    }

    const userData = await res.json();
    return userData.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = buildCookieHeader(cookieStore);
    if (!cookieHeader) return null;

    const res = await fetch(`${env.BACKEND_URL}/api/user/${userId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const userData = await res.json();
    return userData;
  } catch (err) {
    console.log(err);
  }
};