"use client";
import { useState, useEffect } from "react";
import PaymentsIcon from "@mui/icons-material/Payments";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HistoryIcon from "@mui/icons-material/History";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PackageIcon from "@mui/icons-material/Inventory2";
import VerifiedIcon from "@mui/icons-material/Verified";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { PlaceOrderPayload, GetOrdersResponse } from "@/types/order";
import {
  loggedInUserAction,
  singleUserAction,
} from "@/components/actions/userAction";
import { allOrdersAction } from "@/components/actions/orderAction";
import { User } from "@/types/userTypes";
import { Person } from "@mui/icons-material";
import { UserRoles } from "@/roles/roles";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function UserDetails() {
  const [orders, setOrders] = useState<PlaceOrderPayload[]>([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const params = useParams();
  const userId = params.id as string;

  useEffect(() => {
    async function fetchData() {
      if (userId) {
        const userInfo = await singleUserAction(userId);
        if (userInfo) setUser(userInfo);

        const response: GetOrdersResponse | null = await allOrdersAction(1, 50);
        if (response && response.data) {
          setOrders(response.data);
          setTotalOrders(response.total);
          setTotalSpent(
            response.data.reduce((acc, order) => acc + order.totalPrice, 0),
          );
        }
      }
    }

    fetchData();
  }, [userId]);

  function calculateAccountAge(createdAt?: string | Date) {
    if (!createdAt) return "—";

    const createdDate = new Date(createdAt); // always convert
    const now = new Date();

    const diffInMs = now.getTime() - createdDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);

    return diffInYears.toFixed(1) + " Years";
  }

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8">
      {/* User Profile Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex items-start gap-6">
          <div className="">
            <img
              className="size-32 rounded-[0.75rem] border-2 border-[#146875]/30 object-cover shadow-2xl shadow-[#146875]/20"
              alt="Detailed user profile portrait"
              src={user?.image || "https://via.placeholder.com/150"}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {user?.name || "Alexander Wright"}
              </h2>
            </div>
            <p className="text-[#146875]/60 font-medium mb-4">
              ID: <span className="text-[#EBBA92]/80">{user?.id}</span>
            </p>

            {/* Active & Verification Badges */}
            <div className="flex gap-2">
              {user?.status === "ACTIVE" && (
                <span className="bg-[#EBBA92]/10 text-[#EBBA92] border border-[#EBBA92]/20 px-3 py-1 rounded text-xs font-semibold">
                  Active
                </span>
              )}

              {user && (
                <div className="flex justify-center items-center gap-2">
                  <span className=" bg-[#146875]/10 text-[#146875] border border-[#146875]/20 px-3 py-1 rounded text-xs font-semibold">
                    {user.role === UserRoles.ADMIN
                      ? "ADMIN"
                      : user.role === UserRoles.SELLER
                        ? "SELLER"
                        : "CUSTOMER"}
                  </span>
                  <span
                    className={`${
                      user.emailVerified === true
                        ? "bg-[#146875]/10 text-[#146875] border border-[#146875]/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    } px-3 py-1 rounded text-xs font-semibold`}
                  >
                    {user.emailVerified === true ? "Verified" : "Unverified"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-[0.75rem] relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <PaymentsIcon className="text-[96px]" />
          </div>
          <p className="text-[#146875] text-xs font-bold uppercase tracking-widest mb-2">
            Total Life-time Spend
          </p>
          <h3 className="text-4xl font-bold text-white tabular-nums">
            ${totalSpent.toFixed(2)}
          </h3>
          <div className="mt-4 flex items-center text-xs text-green-400 font-medium">
            <TrendingUpIcon className="text-[14px] mr-1" /> Lifetime
          </div>
        </div>

        <div className="glass-card p-6 rounded-[0.75rem] relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <PackageIcon className="text-[96px]" />
          </div>
          <p className="text-[#146875] text-xs font-bold uppercase tracking-widest mb-2">
            Total Orders Placed
          </p>
          <h3 className="text-4xl font-bold text-white tabular-nums">
            {totalOrders}
          </h3>
          <div className="mt-4 flex items-center text-xs text-[#146875] font-medium">
            <PackageIcon className="text-[14px] mr-1" /> Orders
          </div>
        </div>

        <div className="glass-card p-6 rounded-[0.75rem] relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <CalendarTodayIcon className="text-[96px]" />
          </div>
          <p className="text-[#146875] text-xs font-bold uppercase tracking-widest mb-2">
            Account Longevity
          </p>
          <h3 className="text-4xl font-bold text-white tabular-nums">
            {calculateAccountAge(user?.createdAt)}
          </h3>
          <div className="mt-4 flex items-center text-xs text-[#EBBA92] font-medium">
            <VerifiedIcon className="text-[14px] mr-1" /> Joined{" "}
            {user?.createdAt ? new Date(user.createdAt).toDateString() : "—"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section className="glass-card rounded-[0.75rem] p-8">
            <div className="flex items-center justify-between mb-8 border-b border-[#146875]/10 pb-4">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <Person className="text-[#146875]" />
                <span className="text-white">Personal Details</span>
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div>
                <label className="text-xs font-bold text-[#146875] uppercase block mb-1">
                  Email Address
                </label>
                <p className="text-[#F5F5F0] font-medium">
                  {user?.email || "-"}
                </p>
              </div>
              <div>
                <label className="text-xs font-bold text-[#146875] uppercase block mb-1">
                  Phone Number
                </label>
                <p className="text-[#F5F5F0] font-medium">
                  {user?.phone_number || "-"}
                </p>
              </div>
              <div>
                <label className="text-xs font-bold text-[#146875] uppercase block mb-1">
                  Billing Address
                </label>
                <p className="text-[#F5F5F0] font-medium">
                  {user?.default_shipping_address || "-"}
                </p>
              </div>
              <div>
                <label className="text-xs font-bold text-[#146875] uppercase block mb-1">
                  Blood Group
                </label>
                <p className="text-[#F5F5F0] font-medium">
                  {user?.blood_type || "N/A"}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Recent Orders Table */}
      <section className="glass-card rounded-[0.75rem] overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-[#146875]/10">
          <h4 className="text-lg font-bold flex items-center gap-2">
            <HistoryIcon className="text-[#146875]" />
            <span className="text-white">Recent Order Activity</span>
          </h4>
          <button className="bg-[#146875]/10 hover:bg-[#146875]/20 text-[#146875] px-3 py-1 rounded text-xs font-bold transition-all">
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#146875]/5 text-[#318491] text-[10px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#146875]/5 text-sm">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-[#146875]/5 transition-colors"
                >
                  <td className="px-6 py-4 font-bold text-white">
                    #MS-{order.id.slice(-3)}
                  </td>
                  <td className="px-6 py-4 text-[#338b98]/80">
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 text-[#F5F5F0] font-medium">
                    ${order.totalPrice}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${
                        order.status === "DELIVERED"
                          ? "bg-green-500/10 text-green-400"
                          : order.status === "PROCESSING" ||
                              order.status === "PLACED"
                            ? "bg-[#EBBA92]/10 text-[#EBBA92]"
                            : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/orders/${order.id}`}>
                      <button className="text-[#146875] hover:text-[#EBBA92] cursor-pointer">
                        <VisibilityIcon className="text-[20px]" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
