import Orders from "@/components/dashboard/admin/orders/orders";

export default function OrderRoute({
  searchParams,
}: {
  searchParams: { page?: string; limit?: string };
}) {
  return (
    <div>
      <Orders searchParams={searchParams} />
    </div>
  );
}
