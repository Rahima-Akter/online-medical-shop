"use server";
import {
  addToCart,
  getAllCartItems,
  updateQuantity,
} from "@/services/cart.service";

export async function addToCartAction(medicineId: string, quantity: number) {
  return await addToCart(medicineId, quantity);
}

export async function updateCartAction(medicineId: string, quantity: number) {
  return await updateQuantity(medicineId, quantity);
}

export async function allCartItemsAction() {
  return await getAllCartItems();
}
