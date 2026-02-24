"use client";
import {
  AddCircle,
  Analytics,
  ChevronLeft,
  ChevronRight,
  Delete,
  Face,
  Healing,
  Inventory,
  MonitorHeart,
  PriorityHigh,
  Science,
  Vaccines,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MedicationIcon from "@mui/icons-material/Medication";
import { useEffect, useState } from "react";
import {
  allCategoryAction,
  deleteCategoryStatusAction,
  updateCategoryStatusAction,
} from "@/components/actions/categoryAction";
import { Category } from "@/types/category";
import { getMedicineAction } from "@/components/actions/medicineAction";
import { Medicine } from "@/types/medicine";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
  const [allCat, setAllCat] = useState<Category[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [meds, setMeds] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(false);
  const [openRow, setOpenRow] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getCat = async () => {
      setLoading(true);
      try {
        const catData = await allCategoryAction(currentPage, limit);

        setAllCat(catData.categories || []);
        setTotal(catData.total ?? 0);
        setTotalPage(
          catData.totalPage ?? Math.ceil((catData.total ?? 0) / limit),
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getCat();
  }, [currentPage, limit]);

  useEffect(() => {
    const fetchMeds = async () => {
      setLoading(true);
      try {
        const { medicines } = await getMedicineAction(1, 10);
        setMeds(medicines);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeds();
  }, []);

  const handleActivate = async (id: string, status: boolean) => {
    try {
      const res = await updateCategoryStatusAction(id, status);

      if (res) {
        toast.success(`Status changed`);
        setAllCat((prev) =>
          prev.map((cat) =>
            cat.id === id ? { ...cat, isActive: status } : cat,
          ),
        );
      }
    } catch (err) {
      toast.error("Action Failed!");
      console.log(err);
    }
  };

  const handleDeactivate = async (id: string, status: boolean) => {
    try {
      const res = await updateCategoryStatusAction(id, status);

      if (res) {
        toast.success(`Status changed`);
        setAllCat((prev) =>
          prev.map((cat) =>
            cat.id === id ? { ...cat, isActive: status } : cat,
          ),
        );
      }
    } catch (err) {
      toast.error("Action Failed!");
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteCategoryStatusAction(id);

      if (res) {
        toast.success(`Category Deleted`);
        setAllCat((prev) => prev.filter((cat) => cat.id !== id));
      }
    } catch (err) {
      toast.error("Action Failed!");
      console.log(err);
    }
  };

  const iconList = [
    MedicationIcon,
    Vaccines,
    Face,
    MonitorHeart,
    Healing,
    Science,
  ];

  const getIconByIndex = (index: number) => {
    const IconComponent = iconList[index % iconList.length];
    return <IconComponent />;
  };

  const lowStock = meds.filter((m) => m.stock >= 10 && m.stock < 50);

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
                  {loading ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center py-6 text-gray-400"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    allCat?.map((category, index) => (
                      <tr
                        key={index}
                        className="hover:bg-[#0f3b42] transition-colors group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-white/90">
                              {category.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="material-symbols-outlined text-white">
                            {getIconByIndex(index)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-bold text-white bg-[#146976]/70 rounded-full min-w-10">
                            {category?._count?.medicines}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${
                              category.isActive === true
                                ? "bg-green-400/40"
                                : "bg-red-400/70"
                            } text-white`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full  ${
                                category.isActive === true
                                  ? "bg-green-400"
                                  : "bg-rose-600"
                              }`}
                            ></span>
                            {category.isActive ? "Active" : "DeActive"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right relative">
                          <div className="flex justify-end items-center gap-2">
                            {/* Dropdown */}
                            <div className="relative">
                              <button
                                onClick={() =>
                                  setOpenRow(
                                    openRow === category.id
                                      ? null
                                      : category.id,
                                  )
                                }
                                className="h-9 w-9 flex items-center justify-center rounded-lg 
                   text-white/60 hover:text-white 
                   hover:bg-[#146976]/20 transition"
                              >
                                <span className="text-lg leading-none cursor-pointer">
                                  ⋯
                                </span>
                              </button>

                              {openRow === category.id && (
                                <div className="absolute right-10 bottom-full -mb-12 w-40 bg-[#0f3b42] border border-[#146976]/20 rounded-xl shadow-2xl p-1 z-50 overflow-y-hidden">
                                  <button
                                    onClick={() => {
                                      handleActivate(category.id, true);
                                      setOpenRow(null);
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10 transition"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    Activate
                                  </button>

                                  <button
                                    onClick={() => {
                                      handleDeactivate(category.id, false);
                                      setOpenRow(null);
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-rose-300 hover:bg-rose-500/10 transition"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                                    Deactivate
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* Delete */}
                            <button
                              onClick={() => handleDelete(category.id)}
                              className="h-9 w-9 flex items-center justify-center rounded-lg 
                       text-white/60 hover:text-red-400 hover:bg-red-500/10 transition cursor-pointer"
                            >
                              <Delete className="text-lg" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination UI */}
            <div className="px-6 py-4 bg-[#092226] flex items-center justify-between">
              <p className="text-xs text-gray-400">
                Showing{" "}
                <span className="font-bold text-gray-500">
                  {(currentPage - 1) * limit + 1} to{" "}
                  {Math.min(currentPage * limit, total)} of {total}
                </span>{" "}
                categories
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1 || loading}
                  className="p-1.5 rounded-lg bg-[#121e20]/50 border border-[#146976]/10 text-[#FCFBFA]/40 hover:text-[#FCFBFA] disabled:opacity-30 cursor-pointer"
                >
                  {loading ? <Spinner /> : <ChevronLeft />}
                </button>

                {Array.from({ length: totalPage }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => !loading && setCurrentPage(pageNum)}
                      className={`px-3 py-1 rounded text-xs font-bold cursor-pointer ${
                        currentPage === pageNum
                          ? "bg-[#146976] text-white"
                          : "hover:bg-[#146976]/10 text-[#FCFBFA]/60"
                      }`}
                      disabled={loading}
                    >
                      {pageNum}
                    </button>
                  ),
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPage, p + 1))
                  }
                  disabled={currentPage === totalPage || loading}
                  className="p-1.5 rounded-lg bg-[#121e20]/50 border border-[#146976]/10 text-[#FCFBFA]/40 hover:text-[#FCFBFA] disabled:opacity-30 cursor-pointer"
                >
                  {loading ? <Spinner /> : <ChevronRight />}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Summary Widgets — UNCHANGED */}
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
                <p className="text-lg font-bold text-gray-800">
                  {lowStock.length} Products
                </p>
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
                <p className="text-lg font-bold text-gray-800">
                  {meds.length} Items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Action (Optional FAB implementation) */}
      {/* <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3 pointer-events-none">
        <button className="pointer-events-auto bg-[#1E3F45] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all group cursor-pointer">
          <span className="material-symbols-outlined text-2xl group-hover:rotate-90 group-hover:-mb-3 group-hover:-mr-2 transition-transform -mt-2">
            <AddCircle />
          </span>
        </button>
      </div> */}
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
