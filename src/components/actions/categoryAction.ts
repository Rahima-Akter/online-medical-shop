"use server";
import { getAllCategory } from "@/services/category.service";

export async function allCategoryAction(page: number, limit: number) {
  return await getAllCategory(page, limit);
}