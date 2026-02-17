import Link from "next/link";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PaymentsIcon from "@mui/icons-material/Payments";
import InventoryIcon from "@mui/icons-material/Inventory";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WarningIcon from "@mui/icons-material/Warning";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { allOrders } from "@/services/order.service";
import { GetOrdersResponse } from "@/types/order";
import {
  ChevronLeft,
  ChevronRight,
  HourglassDisabled,
} from "@mui/icons-material";
import { getAllMedicine } from "@/services/medicine.service";
import { Medicine } from "@/types/medicine";
import { UserAction } from "@/components/actions/userAction";
import { UserRoles } from "@/roles/roles";

interface IsearchParams {
  searchParams?: { page?: string; limit?: string };
}

export default async function Orders({ searchParams }: IsearchParams) {
  const role = await UserAction();
  const params = await searchParams;
  const page = Number(params?.page ?? 1);
  const limit = Number(params?.limit ?? 10);

  const medicine = await getAllMedicine(page, limit);
  const stock: Medicine[] = medicine.medicines;
  const finishedStock = stock.filter((m) => m.stock <= 0);
  const leftStock = stock.filter((m) => m.stock > 0 && m.stock < 10);
  const lowStock = stock.filter((m) => m.stock >= 10 && m.stock < 50);

  const myAllOrders: GetOrdersResponse | null = await allOrders(page, limit);

  if (!myAllOrders || myAllOrders.data.length === 0)
    return <p>No orders found.</p>;

  const { data: orders, currentPage, totalPages, total } = myAllOrders;
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  const today = new Date();
  const selectedMonth = today.getMonth();
  const selectedYear = today.getFullYear();
  const monthlyRevenue = orders
    .filter((order) => {
      const orderDate = new Date(order.createdAt);
      return (
        orderDate.getMonth() === selectedMonth &&
        orderDate.getFullYear() === selectedYear
      );
    })
    .reduce((total, order) => total + order.totalPrice, 0);

  return (
    <div className="p-8 space-y-8">
      {/* Breadcrumbs & Heading */}
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-5">
          <span className="text-[#146976] font-medium">Orders</span>
        </div>
        <div className="flex items-center justify-between -mb-2">
          <h2 className="text-3xl font-black text-slate-100 tracking-tight">
            Orders Overview
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#ECE3DA] border border-black/5 rounded-lg text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-xl">
              <EventNoteIcon />
            </span>
            <span>
              {new Date().toLocaleString("en-US", { month: "long" })}{" "}
              {new Date().getDate()}
            </span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Orders */}
        <div className="bg-[#ECE3DA] p-6 rounded-xl border border-black/5 shadow-sm overflow-hidden group">
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                Total Orders
              </p>
              <h3 className="text-3xl font-bold text-slate-900">
                {orders.length}
              </h3>
              <p className="text-sm font-bold text-emerald-600 flex items-center gap-1 mt-2">
                <TrendingUpIcon fontSize="small" /> +12.5%{" "}
                <span className="font-normal text-slate-500 ml-1">
                  vs last month
                </span>
              </p>
            </div>
            <div className="w-12 h-12 bg-[#EBBA92] rounded-lg flex items-center justify-center text-[#1E3F45]">
              <ShoppingBagIcon fontSize="large" />
            </div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-[#ECE3DA] p-6 rounded-xl border border-black/5 shadow-sm overflow-hidden group">
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                Monthly Revenue
              </p>
              <h3 className="text-3xl font-bold text-slate-900">
                <span className="font-extrabold">৳</span>
                {monthlyRevenue}
              </h3>
              <p className="text-sm font-bold text-emerald-600 flex items-center gap-1 mt-2">
                <TrendingUpIcon fontSize="small" /> +8.2%{" "}
                <span className="font-normal text-slate-500 ml-1">
                  vs last month
                </span>
              </p>
            </div>
            <div className="w-12 h-12 bg-[#EBBA92] rounded-lg flex items-center justify-center text-[#1E3F45]">
              <PaymentsIcon fontSize="large" />
            </div>
          </div>
        </div>

        {/* Stock Alerts */}
        <div className="bg-[#ECE3DA] p-6 rounded-xl border border-black/5 shadow-sm overflow-hidden group">
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                Stock Alerts
              </p>
              <h3 className="text-3xl font-bold text-slate-900">
                {finishedStock.length}
              </h3>
              <p className="text-sm font-bold text-rose-500 flex items-center gap-1 mt-2">
                <WarningIcon fontSize="small" /> Critical{" "}
                <span className="font-normal text-slate-500 ml-1">
                  items Finished!
                </span>
              </p>
            </div>
            <div className="w-12 h-12 bg-[#EBBA92] rounded-lg flex items-center justify-center text-[#1E3F45]">
              <InventoryIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table Section */}
      <div className="bg-[#ECE3DA] rounded-xl border border-black/5 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-400 bg-[#e3cfb9]">
          <h4 className="text-lg font-bold text-slate-900">Recent Orders</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#d1a57c] border-b border-gray-400">
                <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Total Items
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {orders?.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-bold text-[#146976]">
                    #ORD-{order.id.slice(-3)}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">
                    {order?.customer?.name}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-600">
                    {order?.items?.length}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(order?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">
                    <span className="font-extrabold">৳</span>
                    {order?.totalPrice}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${order.status === "DELIVERED" ? "bg-emerald-200 text-emerald-800" : order.status === "PLACED" ? "bg-pink-200 text-pink-800" : order.status === "SHIPPED" ? "bg-yellow-200 text-yellow-700" : order.status === "CANCELLED" ? "bg-red-200 text-red-700" : "bg-green-200 text-green-800"}`}
                    >
                      {order?.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/orders/${order.id}`}>
                      <button className="text-slate-400 hover:text-[#146976] transition-colors cursor-pointer">
                        <VisibilityIcon />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              href={`/orders?page=${currentPage - 1}&limit=${limit}`}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all"
            >
              <ChevronLeft />
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              href={`/orders?page=${i + 1}&limit=${limit}`}
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
              href={`/orders?page=${currentPage + 1}&limit=${limit}`}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all"
            >
              <ChevronRight />
            </Link>
          )}
        </div>
      </div>

      {/* Footer Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {/* Stock Alerts */}
        <div className="bg-[#ECE3DA] p-6 rounded-xl border border-black/5 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 mb-4">
            Stock Alerts
          </h4>

          <div className="space-y-4">
            {/* Finished Stock Cards */}
            {finishedStock.map((medicine) => (
              <div
                key={medicine.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-red-200"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-600">
                    <HourglassDisabled />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">
                      {medicine.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {medicine.stock} units left
                    </p>
                  </div>
                </div>

                <button
                  disabled={role === UserRoles.ADMIN}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all 
                    ${role === UserRoles.ADMIN ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" : "bg-white border border-red-200 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer"}`}
                >
                  Restock
                </button>
              </div>
            ))}

            {/* Critical Stock Cards */}
            {leftStock.map((medicine) => (
              <div
                key={medicine.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-rose-100"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-rose-500">
                    <WarningIcon />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">
                      {medicine.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {medicine.stock} units left
                    </p>
                  </div>
                </div>

                <button
                  disabled={role === UserRoles.ADMIN}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all 
                    ${role === UserRoles.ADMIN ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" : "bg-white border border-red-200 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer"}`}
                >
                  Restock
                </button>
              </div>
            ))}

            {/* Low Stock Cards */}
            {lowStock.map((medicine) => (
              <div
                key={medicine.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-yellow-100"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-yellow-500">
                    <Inventory2Icon />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">
                      {medicine.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {medicine.stock} units left
                    </p>
                  </div>
                </div>

                <button
                  disabled={role === UserRoles.ADMIN}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all 
                    ${role === UserRoles.ADMIN ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" : "bg-white border border-red-200 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer"}`}
                >
                  Restock
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-[#ECE3DA] p-6 rounded-xl border border-black/5 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 mb-4">
            Performance Insights
          </h4>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-600">
                  Order Fulfillment Rate
                </span>
                <span className="font-bold text-slate-900">98%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#146976] h-full"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-600">
                  Customer Satisfaction
                </span>
                <span className="font-bold text-slate-900">4.8/5.0</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#EBBA92] h-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
