import { env } from "@/env";
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

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("better-auth.session_token");
};

export const allUsers = async (page: number, limit: number) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) {
      return null;
    }

    const res = await fetch(
      `${env.BACKEND_URL}/api/user?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Cookie: `better-auth.session_token=${sessionToken}`,
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

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
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) {
      return null;
    }

    const res = await fetch(`${env.BACKEND_URL}/api/user/${userId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
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
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) {
      return null;
    }

    const res = await fetch(`${env.BACKEND_URL}/api/user/${userId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const userData = await res.json();

    return userData;
  } catch (err) {
    console.log(err);
  }
};
