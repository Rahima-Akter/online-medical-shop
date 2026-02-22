import { getAllCategory } from "@/services/category.service";
import AllProducts from "./allProducts";

export default async function AllProductsPage({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string };
}) {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  const allCategory = await getAllCategory(page, limit);

  return (
    <AllProducts allCategory={allCategory} initialPage={page} limit={limit} />
  );
}
