"use server";
import { Category } from "@/types/category";
import { Medicine } from "@/types/medicine";
import AllProductsClient from "./allProductsClient";
import { getAllMedicine } from "@/services/medicine.service";
import { getAllCategory } from "@/services/category.service";

interface IMedicineProps {
  searchParams: { page?: string; limit?: string };
}

export default async function AllProductsPage({
  searchParams,
}: IMedicineProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 10;

  // Fetch medicines
  const medicinesData = await getAllMedicine(page, limit);
  const medicines: Medicine[] = medicinesData?.medicines;
  const total: number = medicinesData.total;
  const totalPages: number = medicinesData.totalPages ?? 1;

  // Fetch all categories
  const { categories: allCategory }: { categories: Category[] } = await getAllCategory(
    1,
    1000,
  );

  return (
    <AllProductsClient
      allCategory={allCategory}
      medicines={medicines}
      total={total}
      totalPages={totalPages}
      initialPage={page}
      limit={limit}
    />
  );
}
