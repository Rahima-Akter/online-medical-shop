import { cookies } from "next/headers";
// import { toast } from "sonner";

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
    // console.log(res);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    // toast.success("Added to cart 🛒");

    return data;
  } catch (err) {
    // toast.error("Could not add to cart");
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
        next: { revalidate: 5 },
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;
  } catch (err) {
    // toast.error("Could not fetch cart");
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
    // toast.success("Item Deleted");

    return data;
  } catch (err) {
    // toast.error("Faild To Delete");
    console.error(err);
  }
};

export const updateQuantity = async (medicineId: string, quantity: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/cart/update-quantity`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
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
    // toast.error("Something went wrong! Please try again");
    console.error(err);
  }
};
