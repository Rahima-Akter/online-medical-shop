import { getCookieHeader } from "@/lib/server-cookie";

const BACKEND = process.env.BACKEND_URL;

export const addToCart = async (medicineId: string, quantity: number) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify({ medicineId, quantity }),
    });

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const getAllCartItems = async () => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/cart`, {
      method: "GET",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error: ${res.statusText}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const deleteCartItem = async (medicineId: string) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/cart/remove`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify({ medicineId }),
    });

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const updateQuantity = async (medicineId: string, quantity: number) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/cart/update-quantity`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify({ medicineId, quantity }),
    });

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};