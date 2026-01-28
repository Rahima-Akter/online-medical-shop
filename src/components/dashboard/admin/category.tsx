import {
  AddCircle,
  Analytics,
  ChevronLeft,
  ChevronRight,
  Delete,
  Edit,
  Face,
  Inventory,
  MonitorHeart,
  PriorityHigh,
  Vaccines,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MedicationIcon from "@mui/icons-material/Medication";
import Link from "next/link";

export default function Category() {
  return (
    <main className="bg-[#162f34]">
      {/* Top Nav Bar */}
      <header className="h-16 bg-[#162f34] sticky top-0 z-50">
        <div className="md:flex items-center justify-between px-8 shrink-0 py-3 border-b border-teal-900 space-y-3">
          <h2 className="md:text-xl text-lg font-bold text-white md:order-1 order-2">
            Category Management
          </h2>

          <div className="relative md:order-2 order-1">
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

      {/* Scrollable Page Content */}
      <div className="p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Action Bar */}
          <div className="md:flex md:items-center justify-between space-y-6">
            <div>
              <nav className="flex text-sm text-gray-500 gap-2">
                <span>Admin</span>
                <span>/</span>
                <span className="text-[#146976] font-medium">Categories</span>
              </nav>
              <p className="text-gray-400 text-sm">
                Organize your store&apos;s medical inventory into clear
                categories.
              </p>
            </div>
            <button className="bg-[#146976] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold text-sm shadow-lg shadow-[#146976]/20 hover:bg-[#146976]/90 transition-all active:scale-95">
              <span className="material-symbols-outlined text-lg">
                <AddCircle />
              </span>
              Add New Category
            </button>
          </div>

          {/* Categories Table Card */}
          <div className="bg-[#164148] border border-[#146976]/20 rounded-xl overflow-x-auto shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 border-b border-gray-200">
                  <tr className="bg-[#092226] border-b border-[#146976]/20">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/80">
                      Category Name
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/80">
                      Icon
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/80">
                      Product Count
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/80">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-[#FCFBFA]/80 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900">
                  {/* Category Rows */}
                  {[
                    {
                      name: "Antibiotics",
                      description: "Bacterial infection medications",
                      icon: <MedicationIcon />,
                      count: 124,
                      status: "Active",
                      statusColor: "green",
                    },
                    {
                      name: "Pain Relief",
                      description: "Analgesics and anti-inflammatories",
                      icon: <Vaccines />,
                      count: 89,
                      status: "Active",
                      statusColor: "green",
                    },
                    {
                      name: "Skin Care",
                      description: "Dermatological creams and lotions",
                      icon: <Face />,
                      count: 45,
                      status: "Inactive",
                      statusColor: "gray",
                    },
                    {
                      name: "Vitamins & Supplements",
                      description: "Daily health boosters",
                      icon: <MonitorHeart />,
                      count: 212,
                      status: "Active",
                      statusColor: "green",
                    },
                  ].map((category, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#0f3b42] transition-colors group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white/90">
                            {category.name}
                          </span>
                          <span className="text-xs text-gray-300">
                            {category.description}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="material-symbols-outlined text-white">
                          {category.icon}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-bold text-white bg-[#146976]/70 rounded-full min-w-10">
                          {category.count}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${category.status === "Active" ? "bg-green-400/40" : "bg-red-400/70"} text-white`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full  ${category.status === "Active" ? "bg-green-400" : "bg-rose-600"}`}
                          ></span>
                          {category.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex justify-end gap-2 ">
                          <button className="p-2 text-white cursor-pointer hover:text-[#146976] hover:bg-[#146976]/5 rounded-lg transition-colors">
                            <Edit className="text-xl" />
                          </button>
                          <button className="p-2 text-white cursor-pointer hover:text-red-600 rounded-lg transition-colors">
                            <Delete className="text-xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Section */}
            <div className="px-6 py-4 bg-[#092226] flex items-center justify-between">
              <p className="text-xs text-gray-400">
                Showing <span className="font-bold text-gray-500">1 to 4</span>{" "}
                of <span className="font-bold text-gray-500">18</span>{" "}
                categories
              </p>
              <div className="flex items-center gap-1">
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm border border-transparent transition-all"
                >
                  <span className="hover:text-teal-700 text-gray-400 text-lg">
                    <ChevronLeft />
                  </span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#146976] text-white text-xs font-bold shadow-sm"
                >
                  1
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm border border-transparent text-xs font-medium text-gray-600 transition-all"
                >
                  2
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm border border-transparent text-xs font-medium text-gray-600 transition-all"
                >
                  3
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm border border-transparent transition-all"
                >
                  <span className="hover:text-teal-700 text-gray-400 text-lg">
                    <ChevronRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Summary Widgets (Bottom) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-100 p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#146976]/30 flex items-center justify-center text-[#146976]">
                <span className="material-symbols-outlined">
                  <Analytics />
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  Top Category
                </p>
                <p className="text-lg font-bold text-gray-800">Antibiotics</p>
              </div>
            </div>
            <div className="bg-teal-100 p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined">
                  <PriorityHigh />
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  Low Stock Alerts
                </p>
                <p className="text-lg font-bold text-gray-800">12 Products</p>
              </div>
            </div>
            <div className="bg-teal-100 p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">
                  <Inventory />
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  Total Products
                </p>
                <p className="text-lg font-bold text-gray-800">1,248 Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Action (Optional FAB implementation) */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3 pointer-events-none">
        <button className="pointer-events-auto bg-[#1E3F45] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all group cursor-pointer">
          <span className="material-symbols-outlined text-2xl group-hover:rotate-90 group-hover:-mb-3 group-hover:-mr-2 transition-transform -mt-2">
            <AddCircle/>
          </span>
        </button>
      </div>

      {/* Background Pattern/Decorative Element */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none">
        <svg
          className="absolute right-0 top-0 text-[#146976]/5 w-1/2 h-full"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M100 0 L100 100 L0 100 Q 50 50 100 0 Z"></path>
        </svg>
      </div>
    </main>
  );
}
