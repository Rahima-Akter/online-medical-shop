import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { EraserIcon, Pill, TrendingUp } from "lucide-react";
import {
  Edit,
  Medication,
  MedicationLiquid,
  PriorityHigh,
  Warning,
} from "@mui/icons-material";

const MedicineInventory = () => {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto">
      {/* Top Nav / Breadcrumbs */}
      <header className="flex md:flex-row flex-col justify-between space-y-4 px-8 py-4 bg-[#121e20] border-b border-[#3d4f51]">
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="#"
            className="text-[#9fb3b7] hover:text-[#146976] transition-colors"
          >
            Seller
          </Link>
          <span className="text-[#9fb3b7]">/</span>
          <span className="text-white font-semibold">Inventory</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9fb3b7] text-lg">
              <SearchIcon />
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-[#2a3537] border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-[#146976] focus:bg-[#2a3537] transition-all placeholder:text-gray-400 text-white"
              placeholder="Search medicines..."
              type="text"
            />
          </div>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              Medicine Inventory
            </h1>
            <p className="text-[#9fb3b7] mt-1">
              Real-time oversight of your pharmaceutical stock and pricing.
            </p>
          </div>
        </div>
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#121e20] p-6 rounded-xl border border-[#3d4f51] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#9fb3b7]">Total SKUs</p>
              <span className="material-symbols-outlined text-[#3c8692] font-bold">
                inventory
              </span>
            </div>
            <p className="text-3xl font-bold text-white">1,240</p>
            <p className="text-xs mt-2 font-semibold text-emerald-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                <TrendingUp />
              </span>
              +2.4% from last month
            </p>
          </div>
          <div className="bg-[#121e20] p-6 rounded-xl border border-[#3d4f51] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#9fb3b7]">
                Low Stock Items
              </p>
              <span className="material-symbols-outlined text-amber-500/60  font-bold">
                <Warning />
              </span>
            </div>
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-xs mt-2 font-semibold text-amber-500 flex items-center gap-1">
              Critical Threshold: &lt; 10 units
            </p>
          </div>
          <div className="bg-[#121e20] p-6 rounded-xl border border-[#3d4f51] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#9fb3b7]">Out of Stock</p>
              <span className="material-symbols-outlined text-red-500/60 font-bold">
                error
              </span>
            </div>
            <p className="text-3xl font-bold text-white">5</p>
            <p className="text-xs mt-2 font-semibold text-red-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                <PriorityHigh />
              </span>
              Requires immediate restock
            </p>
          </div>
        </div>
      </div>

      {/* Main Data Table Container */}
      <div className="bg-[#ECE3DA] rounded-xl shadow-xl overflow-hidden border border-[#3d4f51]">
        <div className="p-6 border-b border-[#3d4f51] flex items-center justify-between bg-[#121e20]">
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm font-semibold text-[#146976] bg-[#146976]/5 border border-[#146976]/20 rounded-lg">
              All Categories
            </button>
            <button className="px-4 py-2 text-sm font-medium text-[#9fb3b7] hover:bg-[#2a3537] rounded-lg transition-colors">
              Antibiotics
            </button>
            <button className="px-4 py-2 text-sm font-medium text-[#9fb3b7] hover:bg-[#2a3537] rounded-lg transition-colors">
              Pain Relief
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-[#9fb3b7] hover:text-[#146976] transition-colors">
              <span className="material-symbols-outlined">
                <FilterListIcon />
              </span>
            </button>
            <button className="p-2 text-[#9fb3b7] hover:text-[#146976] transition-colors">
              <span className="material-symbols-outlined">
                <DownloadIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-[#121e20]">
            <thead>
              <tr className="bg-[#2a3537] text-[#9fb3b7] uppercase text-[11px] font-bold tracking-wider">
                <th className="px-6 py-4">Medicine Name</th>
                <th className="px-6 py-4">SKU</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Stock Level</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3d4f51] text-[#9fb3b7]">
              {/* Row 1 */}
              <tr className="hover:bg-[#2a3537] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded bg-[#146976]/10 lg:flex items-center justify-center text-[#146976] hidden">
                      <span className="material-symbols-outlined">
                        <Medication />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white">Amoxicillin 500mg</p>
                      <p className="text-xs text-[#9fb3b7]">
                        Capsules • 30 per box
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-[#9fb3b7]">
                  AMX-500-CP
                </td>
                <td className="px-6 py-4 text-sm font-medium">Antibiotics</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 w-16 bg-[#3d4f51] rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-white">
                      240{" "}
                      <span className="text-xs text-[#9fb3b7] font-normal">
                        units
                      </span>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-white">
                  $18.50
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-[#9fb3b7] hover:text-[#146976] hover:bg-[#146976]/10 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <Edit />
                      </span>
                    </button>
                    <button className="p-2 text-[#9fb3b7] hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <DeleteIcon />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 (Low Stock) */}
              <tr className="hover:bg-[#2a3537] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded bg-amber-50 lg:flex items-center justify-center text-amber-600 hidden">
                      <span className="material-symbols-outlined">
                        <MedicationLiquid />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white">Ibuprofen Syrup</p>
                      <p className="text-xs text-[#9fb3b7]">
                        100ml Bottle • Kids Formula
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-[#9fb3b7]">
                  IBU-SYR-CH
                </td>
                <td className="px-6 py-4 text-sm font-medium">Pain Relief</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 w-16 bg-[#3d4f51] rounded-full overflow-hidden">
                      <div
                        className="bg-amber-500 h-full"
                        style={{ width: "8%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-amber-600">
                      8{" "}
                      <span className="text-xs text-amber-400 font-normal">
                        units
                      </span>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-white">
                  $12.25
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-[#9fb3b7] hover:text-[#146976] hover:bg-[#146976]/10 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <EditIcon />
                      </span>
                    </button>
                    <button className="p-2 text-[#9fb3b7] hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <DeleteIcon />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[#2a3537] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded bg-[#146976]/10 lg:flex items-center justify-center text-[#146976] hidden">
                      <span className="material-symbols-outlined">
                        <Pill />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white">Metformin 850mg</p>
                      <p className="text-xs text-[#9fb3b7]">
                        Tablets • 60 per pack
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-[#9fb3b7]">
                  MET-850-TB
                </td>
                <td className="px-6 py-4 text-sm font-medium">Diabetes</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 w-16 bg-[#3d4f51] rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-white">
                      112{" "}
                      <span className="text-xs text-[#9fb3b7] font-normal">
                        units
                      </span>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-white">
                  $24.99
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-[#9fb3b7] hover:text-[#146976] hover:bg-[#146976]/10 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <Edit />
                      </span>
                    </button>
                    <button className="p-2 text-[#9fb3b7] hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <DeleteIcon />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 4 (Out of Stock) */}
              <tr className="hover:bg-[#2a3537] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 opacity-60">
                    <div className="size-10 rounded bg-red-50 lg:flex items-center justify-center text-red-600 hidden">
                      <span className="material-symbols-outlined">
                        <EraserIcon />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white">Azithromycin 250mg</p>
                      <p className="text-xs text-[#9fb3b7]">
                        Tablets • 6 per blister
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-[#9fb3b7] opacity-60">
                  AZI-250-BL
                </td>
                <td className="px-6 py-4 text-sm font-medium opacity-60">
                  Antibiotics
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 w-16 bg-[#3d4f51] rounded-full overflow-hidden">
                      <div
                        className="bg-red-500 h-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-red-600 uppercase text-[10px]">
                      Out of Stock
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-[#9fb3b7] opacity-60">
                  $31.00
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-[#9fb3b7] hover:text-[#146976] hover:bg-[#146976]/10 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <Edit />
                      </span>
                    </button>
                    <button className="p-2 text-[#9fb3b7] hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg">
                        <DeleteIcon />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 bg-[#121e20] border-t border-[#3d4f51] flex items-center justify-between">
          <p className="text-sm text-[#9fb3b7]">
            Showing <span className="font-semibold">1-4</span> of{" "}
            <span className="font-semibold">1,240</span> medicines
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 text-[#9fb3b7] hover:text-[#146976] hover:bg-[#146976]/10 rounded disabled:opacity-30">
              <span className="material-symbols-outlined">
                <ChevronLeftIcon />
              </span>
            </button>
            <button className="size-8 text-sm font-bold bg-[#146976] text-white rounded-lg">
              1
            </button>
            <button className="size-8 text-sm font-medium text-[#9fb3b7] hover:bg-[#2a3537] rounded-lg">
              2
            </button>
            <button className="size-8 text-sm font-medium text-[#9fb3b7] hover:bg-[#2a3537] rounded-lg">
              3
            </button>
            <button className="p-2 text-[#9fb3b7] hover:text-[#146976] hover:bg-[#146976]/10 rounded">
              <span className="material-symbols-outlined">
                <ChevronRightIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MedicineInventory;
