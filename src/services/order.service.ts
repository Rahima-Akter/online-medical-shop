import { GetOrdersResponse } from "@/types/order";
import { cookies } from "next/headers";

interface CartItem {
  medicineId: string;
  sellerId: string;
  quantity: number;
  price: number;
}

interface OrderPayload {
  customerId: string;
  shippingAddress: string;
  items: CartItem[];
}

export const placeOrder = async (order: OrderPayload) => {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("better-auth.session_token")?.value;

  if (!sessionToken) {
    console.error("No session token found");
    throw new Error("User is not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `better-auth.session_token=${sessionToken}`,
      },
      credentials: "include",
      body: JSON.stringify(order),
    }
  );

  if (!res.ok) {
    const text = res.statusText;
    console.error("Order request failed:", text);
    throw new Error(`Checkout failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data;
};

export const allOrders = async (
  page: number,
  limit: number,
): Promise<GetOrdersResponse | null> => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return null;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/order?page=${page}&limit=${limit}`,
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
      throw new Error(`Fetching orders failed: ${res.statusText}`);
    }

    const data: GetOrdersResponse = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateOrder = async (status: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/order`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        next: { revalidate: 5 },
        body: JSON.stringify({ status }),
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    // toast.success("Order Cancelled");

    return data;
  } catch (err) {
    // toast.error("Something Went Wrong!");
    console.error(err);
  }
};

export const getSingleOrder = async (id: string) => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/order/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `better-auth.session_token=${sessionToken}`,
        },
        cache: "no-store",
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
