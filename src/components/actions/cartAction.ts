"use server";
import { addToCart } from "@/services/cart.service";

export default async function addToCartAction(
  medicineId: string,
  quantity: number,
) {
  return await addToCart(medicineId, quantity);
}
