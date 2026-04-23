import { getCookieHeader } from "@/lib/server-cookie";

const BACKEND = process.env.BACKEND_URL;
export const deleteMed = async (medId: string) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/medicine/${medId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json", cookie: cookieHeader },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to delete!");
    return res.json();
  } catch (err) {
    console.error(err);
  }
};