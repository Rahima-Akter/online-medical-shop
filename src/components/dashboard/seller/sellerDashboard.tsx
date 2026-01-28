import {
  Download,
  Lightbulb,
  LocalShipping,
  Payment,
  Search,
  Warning,
} from "@mui/icons-material";

const SellerDashboard = () => {
  return (
    <main className="">
      {/* Header with sticky class */}
      <header className="md:h-16 h-28 md:flex items-center justify-between px-8 bg-[#1E3F45]/30 backdrop-blur-xl border-b border-white/5 shrink-0 sticky top-0 z-10 space-y-4 md:py-0 py-3">
        <div className="md:order-1 order-2">
          <h1 className="text-xl font-bold text-white leading-tight">
            Dashboard Overview
          </h1>
          <p className="text-[11px] text-white/50 uppercase tracking-wider">
            Marketplace Health Terminal
          </p>
        </div>
        <div className="flex items-center gap-6 md:order-2 order-1">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-white/40 text-lg">
              <Search />
            </span>
            <input
              className="pl-9 pr-4 py-1.5 bg-[#1E3F45]/40 border-none rounded-lg ring-1 ring-white/10 focus:ring-2 focus:ring-[#EBBA92] w-56 text-xs transition-all text-white placeholder-white/40"
              placeholder="Search data..."
              type="text"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-6 max-w-7xl mx-auto">
          {/* stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#264D54] p-5 rounded-xl border border-white/10 card-shadow flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <span className="material-symbols-outlined text-[#EBBA92]">
                  <LocalShipping />
                </span>
                <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full border border-green-400/20">
                  +12.5%
                </span>
              </div>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                Total Orders
              </p>
              <h3 className="text-3xl font-bold text-[#F5F5F0] mt-1">1,284</h3>
              <p className="text-[10px] text-white/30 mt-2 font-medium">
                vs. 1,141 last month
              </p>
            </div>
            <div className="bg-[#264D54] p-5 rounded-xl border border-white/10 card-shadow relative overflow-hidden flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <span className="material-symbols-outlined text-[#EBBA92]">
                  <Payment />
                </span>
                <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full border border-green-400/20">
                  +8.2%
                </span>
              </div>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                Monthly Revenue
              </p>
              <h3 className="text-3xl font-bold text-[#F5F5F0] mt-1">
                $12,450.00
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-10 flex items-end opacity-20 pointer-events-none">
                <svg
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 20"
                >
                  <path
                    d="M0 18 Q 20 12, 40 15 T 70 8 T 100 12"
                    fill="none"
                    stroke="#EBBA92"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="bg-[#264D54] p-5 rounded-xl card-shadow flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <span className="material-symbols-outlined text-[#EBBA92]">
                  <Warning />
                </span>
                <span className="text-[10px] font-bold text-rose-400 bg-rose-400/10 px-2.5 py-1 rounded-full border border-green-400/20">
                  Action Needed
                </span>
              </div>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                Low Stock Alerts
              </p>
              <h3 className="text-3xl font-bold text-[#F5F5F0] mt-1">
                8 Items
              </h3>
              <p className="text-[10px] text-white/30 mt-2 font-medium truncate">
                Paracetamol, Amoxicillin...
              </p>
            </div>
          </div>

          {/* Weekly Sales Performance */}
          <div className="bg-[#264D54] p-8 rounded-xl border border-white/10 card-shadow mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#F5F5F0]">
                  Weekly Sales Performance
                </h3>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-tight">
                  Daily Average:{" "}
                  <span className="text-[#EBBA92] font-bold">$488.57</span>
                </p>
              </div>
              <div className="flex gap-2">
                <select className="bg-[#146875] border-white/10 rounded-lg text-xs font-bold text-white/70 focus:ring-[#EBBA92] py-2 px-4 transition-all">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
                <button className="p-2 rounded-lg bg-[#146875] text-white hover:brightness-110 transition-all flex items-center gap-2 px-4 border border-white/10">
                  <span className="material-symbols-outlined text-sm">
                    <Download />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Export
                  </span>
                </button>
              </div>
            </div>

            {/* Sales Data Chart */}
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-7 gap-6 items-end h-[240px] px-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center group cursor-pointer h-full justify-end"
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? "bg-[#146875]/30" : "bg-[#146875]"
                        } w-full rounded-t-lg group-hover:bg-[#146875] transition-all duration-300`}
                        style={{
                          // eslint-disable-next-line react-hooks/purity
                          height: `${(Math.random() * 100).toFixed(0)}%`,
                        }}
                      ></div>
                      <div className="mt-3 text-[10px] font-bold text-white/30 group-hover:text-[#EBBA92] uppercase tracking-tighter">
                        {day}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Recent Orders Section */}
          <div className="flex md:flex-row flex-col gap-2">
            <div className="lg:col-span-2 bg-[#264D54] rounded-xl border border-white/10 card-shadow overflow-x-auto flex flex-col lg:w-8/12 w-full">
              <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-bold text-[#F5F5F0] text-base">
                  Recent Orders
                </h3>
                <button className="text-[10px] font-bold text-[#EBBA92] hover:text-white transition-colors tracking-[0.15em] uppercase">
                  View Ledger
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5">
                    <tr className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4 text-center">Qty</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      {
                        orderId: "#ORD-9021",
                        customer: "Michael Scott",
                        qty: 3,
                        status: "Processing",
                        amount: 124.0,
                        statusColor: "amber-400",
                      },
                      {
                        orderId: "#ORD-9020",
                        customer: "Jim Halpert",
                        qty: 1,
                        status: "Delivered",
                        amount: 42.5,
                        statusColor: "green-400",
                      },
                      {
                        orderId: "#ORD-9019",
                        customer: "Pam Beesly",
                        qty: 5,
                        status: "Shipped",
                        amount: 215.1,
                        statusColor: "blue-400",
                      },
                      {
                        orderId: "#ORD-9018",
                        customer: "Dwight Schrute",
                        qty: 2,
                        status: "Delivered",
                        amount: 89.0,
                        statusColor: "green-400",
                      },
                    ].map((order, index) => (
                      <tr
                        key={index}
                        className="text-xs hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4 font-bold text-[#EBBA92]">
                          {order.orderId}
                        </td>
                        <td className="px-6 py-4 text-white/70 font-medium">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-white/40">
                          {order.qty}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-0.5 rounded-full bg-${order.statusColor}/10 text-${order.statusColor} text-[9px] font-bold uppercase border border-${order.statusColor}/20`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-[#F5F5F0]">
                          ${order.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inventory Health Section */}
            <div className="flex flex-col lg:w-4/12 w-full h-full gap-2">
              <div className="bg-[#264D54] text-[#F5F5F0] rounded-xl p-6 border border-white/10 shadow-lg flex flex-col min-h-full">
                <div>
                  <h3 className="font-bold text-lg mb-6 border-b border-white/5 pb-3">
                    Inventory Health
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        label: "Antibiotics",
                        percentage: 82,
                        color: "#EBBA92",
                      },
                      {
                        label: "Pain Relief",
                        percentage: 45,
                        color: "#EBBA92",
                      },
                      { label: "Vaccines", percentage: 12, color: "red-400" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest">
                          <span className="text-white/50">{item.label}</span>
                          <span className={`text-${item.color} font-bold`}>
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-[#0D1B1E] rounded-full overflow-hidden border border-white/5">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.percentage}%`,
                              backgroundColor:
                                item.color === "red-400"
                                  ? "#F87171"
                                  : "#EBBA92",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optimization Tip Section */}
              <div className="">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="material-symbols-outlined text-[#EBBA92] text-2xl">
                    <Lightbulb />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#EBBA92] mb-1 uppercase tracking-tight">
                      Optimization Tip
                    </p>
                    <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                      Vaccines are critically low. Restocking today will prevent
                      an estimated 14% revenue loss next week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="py-8 text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
            © 2024 MediStore 💊 Global Seller Central • Encrypted Connection
          </footer>
        </div>
      </main>
    </main>
  );
};

export default SellerDashboard;
