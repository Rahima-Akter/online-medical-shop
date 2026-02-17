// import { env } from "@/env";

import { cookies } from "next/headers";

// const url = env.BACKEND_URL;
const url = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

export const getAllMedicine = async (page: number, limit: number) => {
  try {
    const res = await fetch(`${url}/api/medicine?page=${page}&limit=${limit}`, {
      headers: {
        "content-type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }

    const medicines = await res.json();

    return {
      medicines: medicines.data.data,
      total: medicines.data.total,
      currentPage: medicines.data.currentPage,
      limit: medicines.data.limit,
      totalPages: medicines.data.totalPages,
    };
  } catch (err) {
    console.error(err);
    return { medicines: [], total: 0, currentPage: 1, limit: 10 };
  }
};

export const medcineById = async (id: string) => {
  try {
    const res = await fetch(`${url}/api/medicine/${id}`);
    const medDetails = res.json();
    return medDetails;
  } catch (err) {
    console.error(err);
  }
};

export const deleteMed = async (medId: string) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;
    if (!sessionToken) return [];

    const res = await fetch(`${url}/api/medicine/${medId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Faild to delete!");
    }
    const medicines = await res.json();

    return medicines;
  } catch (err) {
    console.error(err);
  }
};
