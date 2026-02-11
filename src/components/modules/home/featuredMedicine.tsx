import { getAllMedicine } from "@/services/medicine.service";
import { Medicine } from "@/types/medicine";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";

export default async function FeaturedMedicines() {
  const allMed = await getAllMedicine();

  // Filter top-rated medicines
  const products: Medicine[] = allMed.medicines
    .filter((med: Medicine) => med.reviews.some((r) => r.rating > 4))
    .slice(0, 5);

  return (
    <section className="bg-[#1E3F45] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
            Featured Medicines
          </h2>
          <div className="w-20 h-1.5 bg-[#EBBA92] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product: Medicine) => {
            const avgRating =
              product.reviews.length > 0
                ? (
                    product.reviews.reduce(
                      (acc, review) => acc + review.rating,
                      0
                    ) / product.reviews.length
                  ).toFixed(1)
                : "0";

            return (
              <Link
                href={`/shop/${product.id}`}
                key={product.id}
                className="group bg-[#1F2937] rounded-2xl overflow-hidden border border-[#146976]/10 flex flex-col shadow-sm hover:shadow-lg transition-all"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white p-6">
                  <img
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    src={product.img}
                    alt={product.name}
                  />
                  {product.rx_required && (
                    <div className="absolute top-4 left-4 bg-red-700 text-red-200 text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded-full">
                      Rx Required
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-[#EBBA92] uppercase tracking-widest mb-1">
                      {product.category?.name || "N/A"}
                    </p>
                    <h3 className="text-lg font-black text-white leading-tight mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] mb-4 line-clamp-2">
                      {product.dosage_instructions || "No description available"}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-[#EBBA92] text-xs font-bold mb-2">
                      <StarIcon className="text-xs" />
                      <span className="text-gray-400">
                        {avgRating} ({product.reviews.length})
                      </span>
                    </div>
                  </div>

                  {/* Price + Add to Cart */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-black text-[#EBBA92]">
                      ৳{product.price}
                    </span>
                    <button className="w-10 h-10 bg-[#146976]/10 text-[#146976] rounded-lg flex items-center justify-center hover:bg-[#146976] hover:text-white transition-all">
                      <AddShoppingCartIcon className="text-sm" />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/shop"
            className="px-10 h-12 pt-3 rounded-lg bg-[#146976]/10 text-[#EBBA92] font-black border-2 border-[#146976]/20 hover:bg-[#146976] hover:text-white transition-all"
          >
            Discover More Products
          </Link>
        </div>
      </div>
    </section>
  );
}
