import { cookies } from "next/headers";
const url = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

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
      cache: "no-store",
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
