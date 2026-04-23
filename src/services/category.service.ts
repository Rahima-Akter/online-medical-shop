import { env } from "@/env";
import { getCookieHeader } from "@/lib/server-cookie";

const BACKEND = env.BACKEND_URL;

export const getAllCategory = async (page: number, limit: number) => {
  try {
    const res = await fetch(
      `${BACKEND}/api/category?page=${page}&limit=${limit}`,
      {
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      },
    );
    console.log("API RESPONSE:", res);

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const response = await res.json();

    return {
      categories: response.data.data || [],
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
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/category/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify({ isActive: status }),
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addCategory = async (categoryName: string) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify({ name: categoryName }),
    });

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/category/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
    });

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
