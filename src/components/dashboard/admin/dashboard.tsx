import Link from "next/link";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PaymentsIcon from "@mui/icons-material/Payments";
import InventoryIcon from "@mui/icons-material/Inventory";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WarningIcon from "@mui/icons-material/Warning";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Inventory2Icon from '@mui/icons-material/Inventory2';

const Dashboard = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Breadcrumbs & Heading */}
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-5">
          <span>Seller</span>
          <span className="material-symbols-outlined text-xs">
            <ChevronRightIcon />
          </span>
          <span className="text-[#146976] font-medium">Dashboard Overview</span>
        </div>
        <div className="flex items-center justify-between -mb-2">
          <h2 className="text-3xl font-black text-slate-100 tracking-tight">
            Dashboard Overview
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#ECE3DA] border border-black/5 rounded-lg text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-xl">
              <EventNoteIcon />
            </span>
            <span>Last 30 Days</span>
            <span className="material-symbols-outlined text-xl">
              <ExpandMoreIcon />
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
              <h3 className="text-3xl font-bold text-slate-900">1,284</h3>
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
              <h3 className="text-3xl font-bold text-slate-900">$42,500.00</h3>
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
              <h3 className="text-3xl font-bold text-slate-900">12</h3>
              <p className="text-sm font-bold text-rose-500 flex items-center gap-1 mt-2">
                <WarningIcon fontSize="small" /> Critical{" "}
                <span className="font-normal text-slate-500 ml-1">
                  items low
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
      <div className="px-6 py-5 border-b border-gray-400 flex items-center justify-between bg-[#e3cfb9]">
        <h4 className="text-lg font-bold text-slate-900">Recent Orders</h4>
        <div className="flex items-center gap-2">
          <Link href="/orders" className="text-sm font-semibold text-[#146976] hover:underline">
            View All Orders
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#d1a57c] border-b border-gray-400">
              <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">Product</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-800 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-[#146976]">#ORD-94821</td>
              <td className="px-6 py-4 text-sm text-slate-700 font-medium">Jonathan Doe</td>
              <td className="px-6 py-4 text-sm text-slate-600">Amoxicillin 500mg (x2)</td>
              <td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
              <td className="px-6 py-4 text-sm font-bold text-slate-900">$24.50</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  Delivered
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-slate-400 hover:text-[#146976] transition-colors">
                  <VisibilityIcon />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-[#146976]">#ORD-94822</td>
              <td className="px-6 py-4 text-sm text-slate-700 font-medium">Sarah Miller</td>
              <td className="px-6 py-4 text-sm text-slate-600">Lisinopril 10mg</td>
              <td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
              <td className="px-6 py-4 text-sm font-bold text-slate-900">$18.20</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                  Processing
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-slate-400 hover:text-[#146976] transition-colors">
                  <VisibilityIcon />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-[#146976]">#ORD-94823</td>
              <td className="px-6 py-4 text-sm text-slate-700 font-medium">Marcus Chen</td>
              <td className="px-6 py-4 text-sm text-slate-600">Vitamin D3 2000IU</td>
              <td className="px-6 py-4 text-sm text-slate-500">Oct 23, 2023</td>
              <td className="px-6 py-4 text-sm font-bold text-slate-900">$12.99</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  Shipped
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-slate-400 hover:text-[#146976] transition-colors">
                  <VisibilityIcon />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-[#146976]">#ORD-94824</td>
              <td className="px-6 py-4 text-sm text-slate-700 font-medium">Emily White</td>
              <td className="px-6 py-4 text-sm text-slate-600">Omeprazole 20mg</td>
              <td className="px-6 py-4 text-sm text-slate-500">Oct 23, 2023</td>
              <td className="px-6 py-4 text-sm font-bold text-slate-900">$35.00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                  Processing
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-slate-400 hover:text-[#146976] transition-colors">
                  <VisibilityIcon />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors border-none">
              <td className="px-6 py-4 text-sm font-bold text-[#146976]">#ORD-94825</td>
              <td className="px-6 py-4 text-sm text-slate-700 font-medium">Robert Taylor</td>
              <td className="px-6 py-4 text-sm text-slate-600">Paracetamol 500mg</td>
              <td className="px-6 py-4 text-sm text-slate-500">Oct 22, 2023</td>
              <td className="px-6 py-4 text-sm font-bold text-slate-900">$5.40</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                  Cancelled
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-slate-400 hover:text-[#146976] transition-colors">
                  <VisibilityIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>










      {/* Footer Summary Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
      {/* Stock Alerts */}
      <div className="bg-[#ECE3DA] p-6 rounded-xl border border-black/5 shadow-sm">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Stock Alerts</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-200 border border-red-100">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-rose-500">
                <WarningIcon />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-none">Insulin Glargine</p>
                <p className="text-xs text-slate-500 mt-1">2 units left</p>
              </div>
            </div>
            <button className="px-3 py-1 bg-white border border-red-200 text-xs font-bold text-rose-600 rounded-md hover:bg-rose-500 hover:text-white transition-all">
              Restock
            </button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-orange-200 border border-orange-100">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500">
                <Inventory2Icon />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-none">Metformin 500mg</p>
                <p className="text-xs text-slate-500 mt-1">15 units left (Low)</p>
              </div>
            </div>
            <button className="px-3 py-1 bg-white border border-orange-200 text-xs font-bold text-orange-600 rounded-md hover:bg-orange-500 hover:text-white transition-all">
              Restock
            </button>
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-[#ECE3DA] p-6 rounded-xl border border-black/5 shadow-sm">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Performance Insights</h4>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-600">Order Fulfillment Rate</span>
              <span className="font-bold text-slate-900">98%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#146976] h-full" style={{ width: '98%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-600">Customer Satisfaction</span>
              <span className="font-bold text-slate-900">4.8/5.0</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#EBBA92] h-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
