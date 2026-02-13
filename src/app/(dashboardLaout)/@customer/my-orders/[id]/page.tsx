import OrderDetails from "@/components/dashboard/customer/orders/singleOrderDetails";

export default async function OrderDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <OrderDetails id={id} />
    </div>
  );
}
