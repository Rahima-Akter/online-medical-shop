import { IAddMed } from "@/types/medicine";
import { getCookieHeader } from "@/lib/server-cookie";
import { revalidatePath } from "next/cache";

const BACKEND = process.env.BACKEND_URL;

export const getAllMedicine = async (page: number, limit: number) => {
  try {
    const res = await fetch(
      `${BACKEND}/api/medicine?page=${page}&limit=${limit}`,
      {
        headers: { "content-type": "application/json" },
        cache: "no-store",
      },
    );

    if (!res.ok) throw new Error("Failed to fetch data");
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

export const medicineById = async (id: string) => {
  try {
    const res = await fetch(`${BACKEND}/api/medicine/${id}`);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const addMedicine = async (payLoad: IAddMed) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/medicine`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify(payLoad),
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to add medicine");
    const data = await res.json();
    revalidatePath("/shop");
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const updateMedicine = async (id: string, payLoad: IAddMed) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/medicine/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify(payLoad),
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data?.msg || "Failed to update medicine");
    revalidatePath("/shop");
    return data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
