import { env } from "@/env";
import { cookies } from "next/headers";

export const getAllCategory = async (page: number, limit: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/category?page=${page}&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const response = await res.json();

    return {
      categories: response.data.Data || [],
      total: response.data.total || 0,
      limit: response.data.limit || limit,
      currentPage: response.data.currentPage || page,
      totalPage: response.data.totalPage || 1,
    };
  } catch (err) {
    console.log(err);
    return {
      categories: [],
      total: 0,
      currentPage: 1,
      limit: 10,
      totalPage: 0,
    };
  }
};

export const updateCategoryStatus = async (id: string, status: boolean) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return null;

    const res = await fetch(`${env.BACKEND_URL}/api/category/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
      body: JSON.stringify({ isActive: status }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const updateStatus = await res.json();

    return updateStatus.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return null;
    const res = await fetch(`${env.BACKEND_URL}/api/category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const category = await res.json();

    return category.data;
  } catch (err) {
    console.log(err);
  }
};
