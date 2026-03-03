import AdminOrderDetails from "@/components/dashboard/admin/orders/orderDetails";

export default async function OrderDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <AdminOrderDetails id={id} />
    </div>
  );
}
