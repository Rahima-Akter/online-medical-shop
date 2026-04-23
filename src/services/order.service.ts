import {
  GetOrdersResponse,
  orderResponseById,
  ordersById,
} from "@/types/order";
import { getCookieHeader } from "@/lib/server-cookie";

const BACKEND = process.env.BACKEND_URL;

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
  const cookieHeader = await getCookieHeader();

  const res = await fetch(`${BACKEND}/api/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json", cookie: cookieHeader },
    body: JSON.stringify(order),
  });

  if (!res.ok)
    throw new Error(`Checkout failed: ${res.status} ${res.statusText}`);
  return res.json();
};

export const allOrders = async (
  page: number,
  limit: number,
): Promise<GetOrdersResponse | null> => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(
      `${BACKEND}/api/order?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json", cookie: cookieHeader },
        cache: "no-store",
      },
    );

    if (!res.ok) throw new Error(`Fetching orders failed: ${res.statusText}`);
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getAllOrdesByUserId = async (
  userId: string,
): Promise<ordersById[]> => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/order/all-orders/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Fetching failed");
    const data: orderResponseById = await res.json();
    return data.data ?? [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const updateOrder = async (orderId: string, status: string) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/order/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const getSingleOrder = async (id: string) => {
  try {
    const cookieHeader = await getCookieHeader();

    const res = await fetch(`${BACKEND}/api/order/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", cookie: cookieHeader },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};
