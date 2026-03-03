import { UserRoles } from "@/roles/roles";
import { allOrders } from "@/services/order.service";
import { allUsers } from "@/services/user.service";
import { GetOrdersResponse } from "@/types/order";
import { User } from "@/types/userTypes";
import { Group, Payment, Storefront, TrendingUp } from "@mui/icons-material";
import TodayIcon from "@mui/icons-material/Today";

export default async function Dashboard() {
  const userData = await allUsers(1, 1000);
  const users: User[] = userData?.user ?? [];
  const totalSellers = users.filter((user) => user.role === UserRoles.SELLER);

  const myAllOrders: GetOrdersResponse | null = await allOrders(1, 1000);
  const orders = myAllOrders?.data ?? [];

  const totalRevenue = orders.reduce(
    (total, order) => total + order.totalPrice,
    0,
  );

  // Monthly Revenue
  const monthlyRevenue = new Array(12).fill(0);
  orders.forEach((order) => {
    const month = new Date(order.createdAt).getMonth();
    monthlyRevenue[month] += order.totalPrice;
  });

  const currentMonth = new Date().getMonth();
  const last6Months = [];
  for (let i = 5; i >= 0; i--) {
    const monthIndex = (currentMonth - i + 12) % 12;
    last6Months.push({
      index: monthIndex,
      revenue: monthlyRevenue[monthIndex],
      label: new Date(2026, monthIndex).toLocaleDateString("en-US", {
        month: "short",
      }),
    });
  }
  const maxRevenue = Math.max(...last6Months.map((m) => m.revenue), 1);

  // Seller Performance
  const sellerPerformance: Record<string, number> = {};

  orders.forEach((order) => {
    const numItems = order.items.length || 1; // fallback to 1 to avoid division by zero
    const revenuePerItem = order.totalPrice / numItems; // split totalPrice equally

    order.items.forEach((item) => {
      // @ts-expect-error seller does not exits in type
      const sellerName = item.seller?.name || "Unknown Seller";
      sellerPerformance[sellerName] =
        (sellerPerformance[sellerName] || 0) + revenuePerItem;
    });
  });

  const sellerNames = Object.keys(sellerPerformance);
  const maxSellerRevenue = Math.max(...Object.values(sellerPerformance), 1);
  const colors = ["#146976", "#EBBA92", "#7BCFAE", "#FF7F50", "#9F5FBB"];

  return (
    <div className="bg-[#1E3F45] h-full overflow-y-auto px-8 py-6 space-y-8">
      <header className="flex items-center justify-between border-b border-[#416a71] pb-6">
        <h2 className="md:text-2xl text-xl font-bold tracking-tight text-white">
          Admin Dashboard
        </h2>
        <div className="flex items-center gap-2 bg-[#122b2f] px-3 py-1.5 rounded-lg border border-[#2a4d53]">
          <span className="material-symbols-outlined text-white">
            <TodayIcon />
          </span>
          <span className="text-xs font-semibold text-[#9fb3b7]">
            {new Date().toLocaleDateString("en-US", { month: "long" })}{" "}
            {new Date().getMonth()}, {new Date().getFullYear()}
          </span>
        </div>
      </header>

      {/* Dashboard Content */}
      <div>
        {/* KPI Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* KPI 1: Total Users */}
          <div className="bg-[#d9f3f7] rounded-xl p-6 shadow-xl flex flex-col justify-between min-h-[140px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#146976] text-sm font-bold uppercase tracking-wider">
                  Total Users
                </p>
                <h3 className="text-[#1E3F45] text-3xl font-extrabold mt-1">
                  {users.length}
                </h3>
              </div>
              <div className="bg-[#146976]/10 p-2 rounded-lg text-[#146976]">
                <span className="material-symbols-outlined">
                  <Group />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-emerald-600 text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-sm">
                  <TrendingUp />
                </span>{" "}
                +12.5%
              </span>
              <span className="text-slate-500 text-xs font-medium">
                vs last month
              </span>
            </div>
          </div>

          {/* KPI 2: Total Sellers */}
          <div className="bg-[#d9f3f7] rounded-xl p-6 shadow-xl flex flex-col justify-between min-h-[140px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#146976] text-sm font-bold uppercase tracking-wider">
                  Total Sellers
                </p>
                <h3 className="text-[#1E3F45] text-3xl font-extrabold mt-1">
                  {totalSellers.length}
                </h3>
              </div>
              <div className="bg-[#146976]/10 p-2 rounded-lg text-[#146976]">
                <span className="material-symbols-outlined">
                  <Storefront />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-emerald-600 text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-sm">
                  <TrendingUp />
                </span>{" "}
                +3.2%
              </span>
              <span className="text-slate-500 text-xs font-medium">
                vs last month
              </span>
            </div>
          </div>

          {/* KPI 3: Platform Revenue */}
          <div className="bg-[#d9f3f7] rounded-xl p-6 shadow-xl flex flex-col justify-between min-h-[140px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#146976] text-sm font-bold uppercase tracking-wider">
                  Platform Revenue
                </p>
                <h3 className="text-[#1E3F45] text-3xl font-extrabold mt-1">
                  <span className="font-extrabold">৳</span>
                  {totalRevenue}
                </h3>
              </div>
              <div className="bg-[#146976]/10 p-2 rounded-lg text-[#146976]">
                <span className="material-symbols-outlined">
                  <Payment />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-emerald-600 text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>{" "}
                +8.7%
              </span>
              <span className="text-slate-500 text-xs font-medium">
                vs last month
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Line Chart Card */}
        <div className="bg-[#122b2f] border border-[#2a4d53] rounded-xl p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-bold text-lg">
                Monthly Sales Revenue
              </h4>
              <p className="text-[#9fb3b7] text-sm">
                Performance tracking across the current fiscal year
              </p>
            </div>
          </div>
          <div className="relative h-[240px] w-full mt-4">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 500 200"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#146976" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#146976" stopOpacity="0" />
                </linearGradient>
              </defs>
              {(() => {
                const step = 500 / (last6Months.length - 1);
                let pathD = "M";
                last6Months.forEach((m, idx) => {
                  const x = idx * step;
                  const y = 200 - (m.revenue / maxRevenue) * 150;
                  pathD += `${x},${y} `;
                });
                return (
                  <>
                    <path
                      d={pathD + "V200 H0 Z"}
                      fill="url(#chartGradient)"
                    ></path>
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#146976"
                      strokeWidth="4"
                      strokeLinecap="round"
                    ></path>
                    {last6Months.map((m, idx) => {
                      const x = idx * step;
                      const y = 200 - (m.revenue / maxRevenue) * 150;
                      return (
                        <circle
                          key={idx}
                          cx={x}
                          cy={y}
                          r="4"
                          fill="white"
                          stroke="#146976"
                          strokeWidth="2"
                        ></circle>
                      );
                    })}
                  </>
                );
              })()}
            </svg>
            <div className="flex justify-between text-[11px] font-bold text-[#9fb3b7] uppercase tracking-widest px-2">
              {last6Months.map((m, idx) => (
                <span key={idx}>{m.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Seller Performance Bar Chart */}
        <div className="bg-[#122b2f] border border-[#2a4d53] rounded-xl p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h4 className="text-white font-bold text-lg">Seller Performance</h4>
            <span className="text-[#EBBA92] text-sm font-bold">
              Peak Revenue
            </span>
          </div>
          <div
            className={`grid grid-cols-${sellerNames.length} items-end gap-4 h-[240px] px-4 pt-4`}
          >
            {sellerNames.map((seller, idx) => {
              const revenue = sellerPerformance[seller] ?? 0; // fallback to 0
              const heightPercent = (revenue / maxSellerRevenue) * 100;

              return (
                <div
                  key={seller}
                  className="flex flex-col items-center gap-3 w-full group"
                >
                  <div
                    className="relative w-full transition-all duration-500 hover:scale-y-105"
                    style={{
                      height: `${heightPercent}%`,
                      backgroundColor: colors[idx % colors.length],
                    }}
                  >
                    <span className="absolute -top-6 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      ৳{revenue.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-[#9fb3b7] text-[10px] font-bold uppercase">
                    {seller}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Grid: Recent Activity and Top Categories */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8"> */}
      {/* Recent Activity Table */}
      {/* <div className="lg:col-span-2 bg-[#122b2f] border border-[#2a4d53] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#2a4d53] flex justify-between items-center">
            <h4 className="text-white font-bold text-lg">
              System-wide Transactions
            </h4>
            <button className="text-[#1f7380] text-xs font-bold hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#1e3f45] text-[#9fb3b7] text-[11px] font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Seller</th>
                  <th className="px-6 py-3">Value</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Time</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-[#2a4d53]">
                <tr className="hover:bg-[#146976]/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-[#529ba6]">
                    #MS-99234
                  </td>
                  <td className="px-6 py-4 font-medium text-white/80">Global Pharma Co.</td>
                  <td className="px-6 py-4 text-white/80">$1,240.00</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-900/40 text-emerald-400 text-[10px] font-bold rounded uppercase">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#9fb3b7]">2 mins ago</td>
                </tr>
                <tr className="hover:bg-[#146976]/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-[#529ba6]">
                    #MS-99233
                  </td>
                  <td className="px-6 py-4 font-medium text-white/80">LifeCare Meds</td>
                  <td className="px-6 py-4 text-white/80">$450.50</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-[#EBBA92]/20 text-[#EBBA92] text-[10px] font-bold rounded uppercase">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#9fb3b7]">15 mins ago</td>
                </tr>
                <tr className="hover:bg-[#146976]/5 transition-colors">
                  <td className="px-6 py-4 font-semibold text-[#529ba6]">
                    #MS-99231
                  </td>
                  <td className="px-6 py-4 font-medium text-white/80">Wellness Direct</td>
                  <td className="px-6 py-4 text-white/80">$2,100.00</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-900/40 text-emerald-400 text-[10px] font-bold rounded uppercase">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#9fb3b7]">1 hour ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

      {/* Platform Distribution / Category Breakdown */}
      {/* <div className="bg-[#FCFBFA] rounded-xl p-6 shadow-xl flex flex-col gap-6">
          <h4 className="text-[#1E3F45] font-bold text-lg">
            Category Distribution
          </h4>
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div className="relative size-40 mx-auto">
              <svg className="size-full" viewBox="0 0 36 36">
                <path
                  className="text-[#146976]/10"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                ></path>
                <path
                  className="text-[#146976]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="75, 100"
                  strokeLinecap="round"
                  strokeWidth="4"
                ></path>
                <path
                  className="text-[#EBBA92]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="20, 100"
                  strokeDashoffset="-75"
                  strokeLinecap="round"
                  strokeWidth="4"
                ></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[#1E3F45] text-xl font-extrabold leading-none">
                  84%
                </span>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                  In Stock
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-[#146976]"></div>
                  <span className="text-slate-600 font-medium">
                    Prescription Drugs
                  </span>
                </div>
                <span className="text-[#1E3F45] font-bold">75%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-[#EBBA92]"></div>
                  <span className="text-slate-600 font-medium">
                    OTC Medicine
                  </span>
                </div>
                <span className="text-[#1E3F45] font-bold">20%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-slate-300"></div>
                  <span className="text-slate-600 font-medium">
                    Medical Supplies
                  </span>
                </div>
                <span className="text-[#1E3F45] font-bold">5%</span>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
