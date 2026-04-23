"use server";
import { deleteMed } from "@/services/deleteMed.service";
import {
  addMedicine,
  getAllMedicine,
  medicineById,
  updateMedicine,
} from "@/services/medicine.service";
import { IAddMed, MedResponse } from "@/types/medicine";

export async function getMedicineAction(page: number, limit: number) {
  const allMed = (await getAllMedicine(page, limit)) as MedResponse;
  return allMed;
}

export async function addMedicineAction(payLoad: IAddMed) {
  return await addMedicine(payLoad);
}

export async function updateMedicineAction(id: string, payLoad: IAddMed) {
  return await updateMedicine(id, payLoad);
}

export async function medicineByIdAction(medId: string) {
  return await medicineById(medId);
}

export async function deleteMedicineAction(medId: string) {
  return await deleteMed(medId);
}
