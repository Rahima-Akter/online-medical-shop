"use server";
import { deleteMed, getAllMedicine } from "@/services/medicine.service";
import { MedResponse } from "@/types/medicine";

export async function getMedicineAction(page: number, limit: number) {
  const allMed = (await getAllMedicine(page, limit)) as MedResponse;
  return allMed;
}

export async function deleteMedicineAction(medId: string) {
  return await deleteMed(medId);
}
