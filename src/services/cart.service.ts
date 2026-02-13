import { cookies } from "next/headers";

export const addToCart = async (medicineId: string, quantity: number) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `better-auth.session_token=${sessionToken}`,
        },
        next: { revalidate: 5 },
        body: JSON.stringify({ medicineId, quantity }),
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getAllCartItems = async () => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/cart`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `better-auth.session_token=${sessionToken}`,
        },
        credentials: "include",
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const deleteCartItem = async (medicineId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/cart/remove`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ medicineId }),
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateQuantity = async (medicineId: string, quantity: number) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/cart/update-quantity`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Cookie: `better-auth.session_token=${sessionToken}`,
        },
        credentials: "include",
        body: JSON.stringify({ medicineId, quantity }),
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
