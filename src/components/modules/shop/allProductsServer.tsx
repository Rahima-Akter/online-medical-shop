import { getAllCategory } from "@/services/category.service";
import AllProducts from "./allProducts";

export default async function AllProductsPage({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string };
}) {
  
  const allCategory = await getAllCategory();

  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  return <AllProducts allCategory={allCategory} initialPage={page} limit={limit} />;
}
