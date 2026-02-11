import { cookies } from "next/headers";
// import { toast } from "sonner";

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
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (!sessionToken) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `better-auth.session_token=${sessionToken}`,
        },
        credentials: "include",
        next: { revalidate: 5 },
        body: JSON.stringify(order),
      },
    );

    console.log(res);
    if (!res.ok) {
      throw new Error(`Checkout failed: ${res.statusText}`);
    }
    const data = await res.json();
    // toast.success("Order placed successfully");

    return data;
  } catch (err) {
    // toast.error("Could not place order");
    console.error(err);
  }
};

export const allOrders = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/order`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        next: { revalidate: 5 },
      },
    );

    if (!res.ok) {
      throw new Error(`fetching orders failed: ${res.status}`);
    }

    const data = await res.json();
    // toast.success("Order fetched successfully");

    return data;
  } catch (err) {
    // toast.error("Could not fetch order");
    console.error(err);
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/order`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        next: { revalidate: 5 },
        body: JSON.stringify({ id }),
      },
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    // toast.success("Order Fetched");

    return data;
  } catch (err) {
    // toast.error("Something Went Wrong!");
    console.error(err);
  }
};
