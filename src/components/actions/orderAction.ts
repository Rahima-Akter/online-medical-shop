"use server";
import { allOrders, getAllOrdesByUserId } from "@/services/order.service";
import { ordersById } from "@/types/order";

export async function allOrdersAction(page: number, limit: number) {
  const allorders = await allOrders(page, limit);
  return allorders;
}

export async function allOrdersByIdAction(
  userId: string,
): Promise<ordersById[]> {
  return await getAllOrdesByUserId(userId);
}
