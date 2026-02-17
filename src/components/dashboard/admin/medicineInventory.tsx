"use client";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { EraserIcon, Pill, TrendingUp } from "lucide-react";
import {
  Edit,
  Error,
  Healing,
  Inventory,
  Medication,
  MedicationLiquid,
  PriorityHigh,
  Vaccines,
  Warning,
} from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import {
  deleteMedicineAction,
  getMedicineAction,
} from "@/components/actions/medicineAction";
import { Medicine } from "@/types/medicine";
import { Spinner } from "@/components/ui/spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { UserAction } from "@/components/actions/userAction";
import { UserRole, UserRoles } from "@/roles/roles";
import { toast } from "sonner";
import ItemNotFound from "@/components/shared/itemNotFound";

export default function MedicineInventory() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);
  const [role, setRole] = useState<UserRole | null | undefined>(null);
  const [meds, setMeds] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [medicineSearch, setMedicineSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState<string>("");

  useEffect(() => {
    const fetchMeds = async () => {
      setLoading(true);
      try {
        const { medicines, currentPage, totalPages, total } =
          await getMedicineAction(page, limit);
        setMeds(medicines);
        setCurrentPage(currentPage);
        setTotalPages(totalPages || 1);
        setTotal(total);
        setStart((currentPage - 1) * limit + 1);
        setEnd(Math.min(currentPage * limit, total));
        const role = await UserAction();
        setRole(role);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMeds();
  }, [page, limit]);

  // Pagination click
  const goToPage = (p: number) => {
    router.push(`/inventory?page=${p}&limit=${limit}`);
  };

  const getPagination = (current: number, total: number) => {
    const pages: (number | "…")[] = [];

    if (total <= 5) {
      // small number of pages, show all
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      // first page always
      pages.push(1);

      // left ellipsis
      if (current > 3) pages.push("…");

      // middle pages: current-1, current, current+1
      for (let i = current - 1; i <= current + 1; i++) {
        if (i > 1 && i < total) pages.push(i);
      }

      // right ellipsis
      if (current < total - 2) pages.push("…");

      // last page always
      if (total > 1) pages.push(total);
    }

    return pages;
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMedicineAction(id);
      toast.success("medicine deleted");
    } catch (err) {
      toast.error("Faild to delete!");
      console.log("Something went Wrong!\n", err);
    }
  };

  const filterMed = useMemo(() => {
    let filtered = meds;

    if (medicineSearch.trim()) {
      filtered = filtered.filter((med) =>
        med.name
          .toLocaleLowerCase()
          .includes(medicineSearch.toLocaleLowerCase()),
      );
    }

    if (categorySearch.trim()) {
      filtered = filtered.filter((med) =>
        med?.category?.name
          .toLocaleLowerCase()
          .includes(categorySearch.toLocaleLowerCase()),
      );
    }
    return filtered;
  }, [meds, medicineSearch, categorySearch]);

  const outOfStock = meds.filter((m) => m.stock <= 0);
  const lowStock = meds.filter((m) => m.stock >= 10 && m.stock < 50);

  const icons = [
    Medication,
    MedicationLiquid,
    Vaccines,
    Healing,
    EraserIcon,
    Pill,
  ];

  return (
    <main className="flex-1 flex flex-col overflow-y-auto">
      {/* Top Nav / Breadcrumbs */}
      <header className="flex md:flex-row flex-col justify-between space-y-4 px-8 py-4 bg-[#121e20] border-b border-[#3d4f51]">
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="#"
            className="text-[#9fb3b7] hover:text-[#146976] transition-colors"
          >
            {role}
          </Link>
          <span className="text-[#9fb3b7]">/</span>
          <span className="text-white font-semibold">Medicine Inventory</span>
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
              value={medicineSearch}
              onChange={(e) => setMedicineSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="p-3 max-w-7xl mx-auto w-full">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              Medicine Inventory
            </h1>
            <p className="text-[#9fb3b7] mt-1">
              Real-time oversight of your pharmaceutical stock and pricing.
            </p>
          </div>
          {/* category search */}
          <div className="relative mr-5">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9fb3b7] text-lg">
              <SearchIcon />
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-[#2a3537] border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-[#146976] focus:bg-[#2a3537] transition-all placeholder:text-gray-400 text-white"
              placeholder="Search by category... eg.:pain reliver"
              type="text"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Data Table Container */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner className="text-white text-3xl" />
        </div>
      ) : filterMed.length === 0 ? (
        <ItemNotFound />
      ) : (
        <div className="bg-[#ECE3DA] shadow-xl overflow-hidden border border-[#3d4f51]">
          <div className="p-6 border-b border-[#3d4f51] flex items-center justify-between bg-[#121e20]">
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-semibold text-[#146976] bg-[#146976]/5 border border-[#146976]/20 rounded-lg">
                All Categories
              </button>
            </div>
            {/* <div className="flex items-center gap-2">
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
            </div> */}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-[#121e20]">
              <thead>
                <tr className="bg-[#2a3537] text-[#9fb3b7] uppercase text-[11px] font-bold tracking-wider">
                  <th className="px-6 py-4">Medicine Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3d4f51] text-[#9fb3b7]">
                {filterMed.map((med) => {
                  const Icon = icons[med.category.name.length % icons.length];
                  const isOut = med.stock <= 0;
                  const isLow = med.stock > 0 && med.stock < 50;

                  return (
                    <tr
                      key={med.id}
                      className="hover:bg-[#2a3537]/20 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded bg-[#146976]/10 lg:flex items-center justify-center text-[#146976] hidden">
                            <span className="material-symbols-outlined">
                              <Icon />
                            </span>
                          </div>
                          <p className="font-bold text-white">{med.name}</p>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm font-medium">
                        {med.category?.name}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`text-[10px] font-bold uppercase ${
                            isOut
                              ? "text-red-600"
                              : isLow
                                ? "text-amber-500"
                                : "text-emerald-400"
                          }`}
                        >
                          {med.stock} units
                        </span>
                      </td>

                      <td className="px-2 py-4 text-[10px] font-bold">
                        <span
                          className={`rounded-lg px-2 py-0.5 whitespace-nowrap ${
                            isOut
                              ? "text-red-500 bg-red-200"
                              : isLow
                                ? "text-amber-700 bg-amber-200"
                                : "text-emerald-400 bg-green-600/30"
                          }`}
                        >
                          {isOut
                            ? "Out of Stock"
                            : isLow
                              ? "Low Stock"
                              : "In Stock"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm font-bold text-white">
                        <span className="font-extrabold">৳</span>
                        {med.price}
                      </td>

                      {/* Buttons */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          {role === UserRoles.SELLER && (
                            <button className="p-2 text-[#9fb3b7] hover:text-[#146976] hover:bg-[#146976]/10 rounded-lg transition-all cursor-pointer">
                              <span className="material-symbols-outlined text-lg">
                                <Edit />
                              </span>
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(`${med.id}`)}
                            className="p-2 text-[#9fb3b7] hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-lg">
                              <DeleteIcon />
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="px-6 py-4 bg-[#121e20] border-t border-[#3d4f51] flex items-center justify-between">
            <p className="text-sm text-[#9fb3b7]">
              Showing{" "}
              <span className="font-semibold">
                {start}-{end}
              </span>{" "}
              of <span className="font-semibold">{total}</span> medicines
            </p>
            <div className="flex items-center gap-1">
              <div className="flex gap-2">
                {/* Prev arrow */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A]  hover:border-[#146875] transition-all cursor-pointer ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-emerald-500/10 text-gray-400 hover:text-white"
                  }`}
                >
                  <ChevronLeftIcon />
                </button>

                {/* Page buttons */}
                {getPagination(currentPage, totalPages).map((p, i) =>
                  p === "…" ? (
                    <span key={i} className="px-3 py-1 text-gray-400">
                      …
                    </span>
                  ) : (
                    <button
                      key={i}
                      onClick={() => goToPage(p as number)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer ${
                        currentPage === p
                          ? "bg-[#146875] text-white font-black shadow-lg shadow-[#146875]/20"
                          : "border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all font-bold"
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}

                {/* Next arrow */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A]  hover:border-[#146875] transition-all cursor-pointer ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-emerald-500/10 text-gray-400 hover:text-white"
                  }`}
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-8 max-w-7xl mx-auto w-full">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#121e20] p-6 rounded-xl border border-[#3d4f51] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#9fb3b7]">
                Total Medicines
              </p>
              <span className="material-symbols-outlined text-[#3c8692] font-bold">
                <Inventory />
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{meds.length}</p>
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
            <p className="text-3xl font-bold text-white">{lowStock.length}</p>
            <p className="text-xs mt-2 font-semibold text-amber-500 flex items-center gap-1">
              Critical Threshold: &lt; 10 units
            </p>
          </div>
          <div className="bg-[#121e20] p-6 rounded-xl border border-[#3d4f51] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#9fb3b7]">Out of Stock</p>
              <span className="material-symbols-outlined text-red-500/60 font-bold">
                <Error />
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{outOfStock.length}</p>
            <p className="text-xs mt-2 font-semibold text-red-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                <PriorityHigh />
              </span>
              Requires immediate restock
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
