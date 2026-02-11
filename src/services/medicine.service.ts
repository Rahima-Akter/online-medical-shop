import { env } from "@/env";

const url = env.BACKEND_URL;

export const getAllMedicine = async () => {
  try {
    const res = await fetch(`${url}/api/medicine`, {
      headers: {
        "content-type": "application/json",
      },
      next: { revalidate: 10 },
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
