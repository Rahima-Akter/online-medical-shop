import AllProductsPage from "@/components/modules/shop/allProductsServer";

export default function Shop({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string };
}) {
  return (
    <div className="bg-[#121e20]">
      <AllProductsPage searchParams={searchParams} />
    </div>
  );
}