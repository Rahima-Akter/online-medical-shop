import MyOrders from "@/components/dashboard/customer/orders/myOrders";

export default function OrdersPage({ searchParams }: { searchParams?: { page?: string; limit?: string } }) {
  return <MyOrders searchParams={searchParams} />;
}
