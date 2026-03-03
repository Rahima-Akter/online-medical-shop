import { env } from "@/env";
import { authClient } from "@/lib/auth-client";
import { User } from "@/types/userTypes";
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

export const updateUser = async (payLoad: Partial<User>) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) {
      return null;
    }

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
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
      body: JSON.stringify(updatableFields),
      credentials: "include",
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
