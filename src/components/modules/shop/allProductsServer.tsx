import { getAllMedicine } from "@/services/medicine.service";
import AllProducts from "./allProducts";
import { getAllCategory } from "@/services/category.service";

export default async function AllProductsPage() {
  const { medicines, total, currentPage, limit,totalPages } = await getAllMedicine();
  const allCategory = await getAllCategory()

  return (
    <AllProducts
      medicines={medicines}
      total={total}
      currentPage={currentPage}
      limit={limit}
      totalPages={totalPages}
      allCategory={allCategory}
    />
  );
}
