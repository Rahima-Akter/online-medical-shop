"use server";
import { allOrders } from "@/services/order.service";

export async function allOrdersAction(page: number, limit: number) {
  const allorders = await allOrders(page, limit);
  return allorders;
}
