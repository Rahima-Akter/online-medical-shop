import { allOrders } from "@/services/order.service";
import { GetOrdersResponse } from "@/types/order";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MyOrdersProps {
  searchParams?: { page?: string; limit?: string };
}

export default async function MyOrders({ searchParams }: MyOrdersProps) {
  const params = await searchParams;
  const page = Number(params?.page || 1);
  const limit = Number(params?.limit || 10);

  const myAllOrders: GetOrdersResponse | null = await allOrders(page, limit);

  if (!myAllOrders || myAllOrders.data.length === 0)
    return <p>No orders found.</p>;

  const { data: myOrders, currentPage, totalPages, total } = myAllOrders;
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  return (
    <div className="min-h-screen bg-[#0A1416]">
      <header className="h-16 flex items-center justify-between px-8 bg-[#0A1416]/80 backdrop-blur-md sticky top-0 z-10 border-b border-[#1F363A]">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Customer Dashboard
          </h2>
        </div>
      </header>

      <div className="p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight">
            Order History
          </h1>
          <p className="text-gray-400 text-base max-w-xl">
            Review and track your medication history. Access detailed summaries
            for all past transactions.
          </p>
        </div>

        <div className="space-y-4">
          {myOrders.map((order) => (
            <div
              key={order.id}
              className="rounded-xl shadow-2xl border border-[#1F363A] p-6 transition-all hover:border-[#146875]/50 group bg-[#16282B]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-6 md:gap-16">
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Order ID
                    </p>
                    <p className="text-sm font-black text-white group-hover:text-[#EBBA92] transition-colors">
                      #MS-{order.id.slice(-3)}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Order Date
                    </p>
                    <p className="text-sm font-semibold text-gray-300">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Total Price
                    </p>
                    <p className="text-sm font-black text-[#EBBA92]">
                      {order.totalPrice}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Status
                    </p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border
                        ${
                          order.status === "DELIVERED"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : order.status === "CANCELLED"
                              ? "bg-red-500/10 text-red-400 border-red-500/20"
                              : order.status === "SHIPPED"
                                ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                : "bg-pink-500/10 text-pink-400 border-pink-500/20"
                        }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <Link href={`/my-orders/${order.id}`}>
                    <button className="w-full md:w-auto h-11 px-8 bg-[#146875]/20 hover:bg-[#146875] border border-[#146875]/50 text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all active:scale-95 shadow-lg cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#1F363A] pt-6 mt-4">
          <p className="text-sm font-medium text-gray-500">
            Showing{" "}
            <span className="text-gray-300">
              {start}-{end}
            </span>{" "}
            of <span className="text-gray-300">{total}</span> orders
          </p>

          <div className="flex gap-2">
            {currentPage > 1 && (
              <Link
                href={`/my-orders?page=${currentPage - 1}&limit=${limit}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all"
              >
                <ChevronLeft />
              </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => (
              <Link
                key={i}
                href={`/my-orders?page=${i + 1}&limit=${limit}`}
                className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                  currentPage === i + 1
                    ? "bg-[#146875] text-white font-black shadow-lg shadow-[#146875]/20"
                    : "border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all font-bold"
                }`}
              >
                {i + 1}
              </Link>
            ))}

            {currentPage < totalPages && (
              <Link
                href={`/my-orders?page=${currentPage + 1}&limit=${limit}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all"
              >
                <ChevronRight />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
