import { env } from "@/env";

export const getAllMedicine = async () => {
  try {
    const res = await fetch(`${env.BACKEND_URL}/api/medicine`, {
      headers: {
        "content-type": "application/json",
      },
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }

    const medicines = await res.json();
    // console.log(medicines)

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
