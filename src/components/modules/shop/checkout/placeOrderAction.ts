"use server";
import { placeOrder } from "@/services/order.service";
import { PlaceOrderPayload } from "@/types/order";

export async function serverPlaceOrder(order: PlaceOrderPayload) {
  return await placeOrder(order);
}
