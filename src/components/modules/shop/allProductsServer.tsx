import { getAllCategory } from "@/services/category.service";
import AllProducts from "./allProducts";

export default async function AllProductsPage({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string };
}) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const limit = Number(params?.limit) || 8;
  const allCategory = await getAllCategory(page, 30);

  return (
    <AllProducts
      allCategory={allCategory.categories}
      initialPage={page}
      limit={limit}
    />
  );
}
