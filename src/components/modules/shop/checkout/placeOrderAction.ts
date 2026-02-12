"use server";
import { placeOrder } from "@/services/order.service";
import { CreateOrderPayload, PlaceOrderPayload } from "@/types/order";

export async function serverPlaceOrder(order: CreateOrderPayload): Promise<PlaceOrderPayload> {
  const result = await placeOrder(order);
  if (!result) {
    throw new Error("Order was not created");
  }
  return result;
}
