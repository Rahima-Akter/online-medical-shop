import {
  AddLocation,
  AddShoppingCart,
  ContactSupport,
  Description,
  DescriptionOutlined,
  Download,
  Emergency,
  Info,
  Lightbulb,
  List,
  LocalHospital,
  LocalShipping,
  Search,
  ShoppingBag,
  TrendingUp,
  Verified,
} from "@mui/icons-material";
import { HospitalIcon, Pill } from "lucide-react";
import Link from "next/link";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-[#0A1618]">
      <header className="h-16 flex items-center justify-between px-8 bg-[#0A1618]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined lg:hidden cursor-pointer text-gray-400">
            menu
          </span>
          <h2 className="text-lg font-semibold text-gray-100">
            Health Dashboard Overview
          </h2>
        </div>
      </header>

      <div className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex flex-wrap justify-between items-end gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-white text-4xl font-black leading-tight tracking-tight">
              Welcome back, John!
            </p>
            <p className="text-gray-400 text-base font-normal">
              Manage your prescriptions and health rewards today.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg h-10 px-6 bg-[#146875] text-white text-sm font-bold tracking-wide hover:bg-[#146875]/90 transition-all shadow-lg shadow-black/40">
            <span className="material-symbols-outlined text-lg">
              <AddShoppingCart />
            </span>
            New Order
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[rgba(20,45,48,0.4)] p-6 rounded-2xl flex items-center gap-5 hover:bg-white/[0.05] transition-all border border-[#FFFFFF0D]">
            <div className="w-14 h-14 rounded-xl bg-[#146875]/20 flex items-center justify-center text-[#146875] border border-[#146875]/20">
              <span className="material-symbols-outlined">
                <LocalShipping />
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Total Orders
              </p>
              <p className="text-2xl font-bold text-white">12</p>
              <p className="text-[10px] text-green-400 mt-1 font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">
                  <TrendingUp />
                </span>
                +2 THIS MONTH
              </p>
            </div>
          </div>

          <div className="bg-[rgba(20,45,48,0.4)] p-6 rounded-2xl flex items-center gap-5 hover:bg-white/[0.05] transition-all border border-[#FFFFFF0D]">
            <div className="w-14 h-14 rounded-xl bg-[#EBBA92]/20 flex items-center justify-center text-[#EBBA92] border border-[#EBBA92]/20">
              <span className="material-symbols-outlined">
                <Description />
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Active Prescriptions
              </p>
              <p className="text-2xl font-bold text-white">3</p>
              <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase">
                Renewal in 12 days
              </p>
            </div>
          </div>

          <div className="bg-[rgba(20,45,48,0.4)] p-6 rounded-2xl flex items-center gap-5 hover:bg-white/[0.05] transition-all border border-[#FFFFFF0D]">
            <div className="w-14 h-14 rounded-xl bg-[#146875]/20 flex items-center justify-center text-[#146875] border border-[#146875]/20">
              <span className="material-symbols-outlined">
                <ShoppingBag />
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Cart Value
              </p>
              <p className="text-2xl font-bold text-white">$84.50</p>
              <p className="text-[10px] text-teal-400 mt-1 font-bold uppercase tracking-wider">
                4 items waiting
              </p>
            </div>
          </div>
        </div>


        {/* tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[rgba(20,45,48,0.4)] rounded-2xl overflow-hidden border border-[#FFFFFF0D]">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#EBBA92]">
                    <List/>
                  </span>
                  Recent Orders
                </h3>
                <Link
                  href="#"
                  className="text-xs font-bold text-[#EBBA92]/60 hover:text-teal-400 transition-colors uppercase tracking-widest"
                >
                  View All
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/[0.02] text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4 text-right">Total</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5 font-semibold text-white">
                        #MS-90210
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-green-500/10 text-green-400 border border-green-500/20">
                          Delivered
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-400">
                        Oct 24, 2023
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-right text-white">
                        $45.00
                      </td>
                    </tr>

                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5 font-semibold text-white">
                        #MS-90215
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          In Transit
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-400">
                        Oct 27, 2023
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-right text-white">
                        $128.40
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[rgba(20,45,48,0.4)] rounded-2xl p-6 border border-[#FFFFFF0D]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#EBBA92]">
                    <DescriptionOutlined/>
                  </span>
                  Prescription History
                </h3>
                <button className="text-xs font-bold text-[#EBBA92]/60 hover:text-teal-500 uppercase tracking-widest">
                  Upload New
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                      <span className="material-symbols-outlined">
                        <Description/>
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Annual Health Plan
                      </p>
                      <p className="text-xs text-gray-400">
                        Verified on Oct 12, 2023
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-black uppercase border border-green-500/20">
                      Verified
                    </span>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined">
                        <Download/>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                      <span className="material-symbols-outlined">
                        <Description/>
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Post-Op Medication
                      </p>
                      <p className="text-xs text-gray-400">
                        Expired on Sep 05, 2023
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-black uppercase border border-red-500/20">
                      Expired
                    </span>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined">
                        <Download/>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[rgba(20,45,48,0.4)] rounded-2xl p-6 border border-[#FFFFFF0D] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EBBA92]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#EBBA92]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#EBBA92] text-2xl">
                    <Lightbulb/>
                  </span>
                </div>
                <h4 className="font-bold text-white tracking-tight">
                  Health Tips
                </h4>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EBBA92] shrink-0"></div>
                  <p className="text-sm text-gray-300 leading-relaxed italic">
                    &quot;Stay hydrated: Drink at least 8 glasses of water daily to
                    help your kidneys flush medications efficiently.&quot;
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EBBA92] shrink-0"></div>
                  <p className="text-sm text-gray-300 leading-relaxed italic">
                    &quot;Always finish your antibiotic course even if you feel
                    better to prevent bacterial resistance.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(20,45,48,0.4)] rounded-2xl p-6 border border-[#FFFFFF0D]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#146875]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#146875] text-2xl">
                    <AddLocation />
                  </span>
                </div>
                <h4 className="font-bold text-white tracking-tight">
                  Find a Clinic
                </h4>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    <Search/>
                  </span>
                  <input
                    className="w-full bg-white/5 border-white/10 rounded-xl pl-10 text-sm text-white placeholder-gray-500 focus:border-[#146875] focus:ring-0 transition-all"
                    placeholder="Enter ZIP or City"
                    type="text"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    <LocalHospital/>,
                    <Pill/>,
                    <Emergency/>,
                    <HospitalIcon/>,
                  ].map((icon, i) => (
                    <button
                      key={i}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#146875]/40 transition-all group"
                    >
                      <span className="material-symbols-outlined text-[#146875] group-hover:scale-110 transition-transform">
                        {icon}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        {["Hospitals", "Pharmacy", "ER Center", "Dental"][i]}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-[#EBBA92]/5 border border-[#EBBA92]/10 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#EBBA92] text-lg">
                    <Info/>
                  </span>
                  <p className="text-[10px] text-gray-300 leading-normal">
                    Showing 4 clinics near your saved location in Brooklyn, NY.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
