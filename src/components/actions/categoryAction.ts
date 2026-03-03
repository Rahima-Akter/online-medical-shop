"use server";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategoryStatus,
} from "@/services/category.service";

export async function allCategoryAction(page: number, limit: number) {
  return await getAllCategory(page, limit);
}

export async function updateCategoryStatusAction(id: string, status: boolean) {
  return await updateCategoryStatus(id, status);
}

export async function deleteCategoryStatusAction(id: string) {
  return await deleteCategory(id);
}

export async function addCategoryAction(categoryName: string) {
  return await addCategory(categoryName);
}
