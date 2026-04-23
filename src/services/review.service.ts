import { Review } from "@/types/medicine";
import { getCookieHeader } from "@/lib/server-cookie";

const BACKEND = process.env.BACKEND_URL;

export const submitReview = async (
  id: string,
  review: string,
  rating: number,
): Promise<Review | null> => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify({ medicineId: id, rating, comment: review }),
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const data = await res.json();
    return data.data as Review;
  } catch (err) {
    console.log(err);
    return null;
  }
};
