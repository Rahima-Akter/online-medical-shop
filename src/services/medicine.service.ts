import { IAddMed } from "@/types/medicine";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

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
    const medDetails = await res.json();
    return medDetails;
  } catch (err) {
    console.error(err);
  }
};

export const addMedicine = async (payLoad: IAddMed) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;
    if (!sessionToken) return null;

    const res = await fetch(`${url}/api/medicine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
      body: JSON.stringify(payLoad),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to add medicine");
    }

    const medData = await res.json();
    revalidatePath("/shop");

    return medData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const updateMedicine = async (id: string, payLoad: IAddMed) => {
  try {
    const cookieStore = await cookies();
    const sessionToken =
      cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) {
      throw new Error("Unauthorized");
    }

    const res = await fetch(`${url}/api/medicine/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
      body: JSON.stringify(payLoad),
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.msg || "Failed to update medicine");
    }

    revalidatePath("/shop");

    return data.data;
  } catch (err) {
    console.error("Update medicine error:", err);
    throw err;
  }
};
