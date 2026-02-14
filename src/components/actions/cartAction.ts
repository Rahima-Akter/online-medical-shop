"use server";
import {
  addToCart,
  deleteCartItem,
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

export async function deleteCartAction(medicineId: string) {
  return await deleteCartItem(medicineId);
}
