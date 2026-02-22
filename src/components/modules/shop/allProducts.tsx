"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GridViewIcon from "@mui/icons-material/GridView";
import StarIcon from "@mui/icons-material/Star";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Medicine } from "@/types/medicine";
import { Category } from "@/types/category";
import ItemNotFound from "@/components/shared/itemNotFound";
import { addToCartAction } from "@/components/actions/cartAction";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllMedicine } from "@/services/medicine.service";
import { allCategoryAction } from "@/components/actions/categoryAction";

interface IMedicineProps {
  allCategory: Category[];
  initialPage: number;
  limit: number;
}

export default function AllProducts({
  allCategory,
  initialPage,
  limit,
}: IMedicineProps) {
  // const [allCategory, setAllCategory] = useState([]);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [manufacturerSearch, setManufacturerSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"low" | "high" | "none">("none");
  const [medicineSearch, setMedicineSearch] = useState("");
  const [quantity, setQuantity] = useState<number>(1);

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || initialPage;

  const fetchMedicines = async (page: number) => {
    setLoading(true);
    try {
      const res = await getAllMedicine(page, limit);
      // const cat = await allCategoryAction(1, 10);
      // setAllCategory(cat);
      setMedicines(res.medicines);
      setTotal(res.total);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error(err);
      setMedicines([]);
      setTotal(0);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicines(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const filteredMedicines = useMemo(() => {
    let filtered = medicines;

    if (manufacturerSearch.trim()) {
      filtered = filtered.filter((m) =>
        m.manufacturer.toLowerCase().includes(manufacturerSearch.toLowerCase()),
      );
    }

    if (medicineSearch.trim()) {
      filtered = filtered.filter((m) =>
        m.name.toLowerCase().includes(medicineSearch.toLowerCase()),
      );
    }

    if (selectedCategories.length) {
      filtered = filtered.filter((m) =>
        selectedCategories.includes(String(m.categoryId)),
      );
    }

    if (sortOrder === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [
    medicines,
    manufacturerSearch,
    medicineSearch,
    selectedCategories,
    sortOrder,
  ]);

  const handleAddToCart = async (id: string, quantity: number) => {
    setLoading(true);
    try {
      await addToCartAction(id, quantity);
      toast.success("Added to cart");
      setQuantity(1);
    } catch (err) {
      toast.error("Could not add to cart!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  return (
    <main className="max-w-360 mx-auto px-6 py-8 lg:flex gap-8 font-[Inter,sans-serif]">
      {/* Sidebar Toggle */}
      <div className="lg:hidden mb-4 w-full absolute md:left-[92%] md:bottom-[87%] left-[85%] bottom-[80%]">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="px-2 py-1 bg-[#146976] text-white rounded-md"
        >
          {sidebarOpen ? <CancelIcon /> : <ViewSidebarIcon />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-64 shrink-0 lg:block fixed lg:relative bottom-0 left-0 h-[95%] lg:h-auto z-20 transition-transform bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800 scroll-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-[#146976]">Filters</h3>
            <button
              className="text-xs text-[#146976] font-semibold hover:underline"
              onClick={() => {
                setManufacturerSearch("");
                setSelectedCategories([]);
                setSortOrder("none");
              }}
            >
              Clear all
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Categories
            </p>
            <div className="space-y-3">
              {allCategory.map((cat: Category) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => {
                      if (selectedCategories.includes(cat.id)) {
                        setSelectedCategories(
                          selectedCategories.filter((c) => c !== cat.id),
                        );
                      } else {
                        setSelectedCategories([...selectedCategories, cat.id]);
                      }
                    }}
                    className="rounded border-gray-600 text-[#146976] focus:ring-[#146976] w-4 h-4"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-[#146976] transition-colors">
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Medicine Search */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Search Medicine
            </p>
            <input
              type="text"
              placeholder="Search by name"
              value={medicineSearch}
              onChange={(e) => setMedicineSearch(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-[#146976]"
            />
          </div>

          {/* Manufacturer Search */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Manufacturers
            </p>
            <input
              type="text"
              placeholder="Search manufacturers"
              value={manufacturerSearch}
              onChange={(e) => setManufacturerSearch(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-[#146976]"
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <Link
            className="text-xs font-medium text-gray-400 hover:text-[#146976]"
            href="/"
          >
            Home
          </Link>
          <span className="text-xs text-gray-600">›</span>
          <span className="text-xs font-bold text-[#146976]">
            Medicine Shop
          </span>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-300">
              Medicines &amp; Supplements
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Showing {start}-{end} of {total} products
            </p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(
                  e.target.value === "low"
                    ? "low"
                    : e.target.value === "high"
                      ? "high"
                      : "none",
                )
              }
              className="appearance-none bg-gray-800 border border-gray-600 rounded-[0.5rem] py-2 pl-4 pr-10 text-sm focus:ring-[#146976] focus:border-[#146976] text-white"
            >
              <option value="none">Sort by: None</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
            <div className="flex border border-gray-600 rounded-lg">
              <button className="p-2 bg-[#146976] text-white">
                <GridViewIcon className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh] text-white">
            <Spinner />
          </div>
        ) : filteredMedicines.length === 0 ? (
          <ItemNotFound />
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            style={{ minHeight: "80vh" }}
          >
            {filteredMedicines.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-800 h-[400px] flex flex-col"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-800">
                  <img
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform"
                    src={product.img}
                    alt={product.name}
                  />
                  {product.rx_required && (
                    <div className="absolute top-3 left-3 bg-red-700 text-red-200 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                      Rx Required
                    </div>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-gray-700/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-white/50">
                    <FavoriteIcon className="text-sm" />
                  </button>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2 text-[#EBBA92]">
                    <div className="flex items-center gap-1 mb-2 text-[#EBBA92]">
                      <StarIcon className="text-xs" />
                      <span className="text-xs font-bold text-gray-400">
                        {product.reviews.length > 0
                          ? (
                              product.reviews.reduce(
                                (acc, r) => acc + r.rating,
                                0,
                              ) / product.reviews.length
                            ).toFixed(1)
                          : "0"}{" "}
                        ({product.reviews.length})
                      </span>
                    </div>
                    <Link
                      href={`/shop/${product.id}`}
                      className="text-white -mt-1 bg-[#146976]/70 rounded-lg py-1 px-3 text-xs hover:font-bold hover:bg-[#146976]"
                    >
                      Details
                    </Link>
                  </div>
                  <h3 className="font-bold text-gray-300 mb-1 line-clamp-1 group-hover:text-[#146976] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4 italic">
                    -{product.category.name}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-[#EBBA92]">
                      ৳{product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(`${product.id}`, quantity);
                      }}
                      className="w-10 h-10 bg-[#146976]/10 text-[#146976] rounded-xl flex items-center justify-center hover:bg-[#146976] hover:text-white transition-all cursor-pointer"
                    >
                      {loading ? (
                        <Spinner />
                      ) : (
                        <AddShoppingCartIcon className="text-sm" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center gap-2 justify-center mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            <ArrowBackIosNewIcon />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </section>
    </main>
  );
}
