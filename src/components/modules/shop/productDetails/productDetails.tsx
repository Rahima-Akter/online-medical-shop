"use client";
import InfoIcon from "@mui/icons-material/Info";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DescriptionIcon from "@mui/icons-material/Description";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SideEffects from "./sideEffects";
import Reviews from "./Reviews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LocalMall } from "@mui/icons-material";
import { Medicine } from "@/types/medicine";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import addToCartAction from "@/components/actions/cartAction";
import { toast } from "sonner";
import { useState } from "react";
interface IMedicine {
  medDetails: Medicine;
  currentUserId: string;
}

export default function ProductDetails({
  medDetails,
  currentUserId,
}: IMedicine) {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

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

  return (
    <main className="max-w-7xl mx-auto w-full px-6 py-8 font-[Inter,sans-serif]">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap gap-2 py-4 mb-4">
        <a
          className="text-[#146976] text-sm font-medium hover:text-[#146976]"
          href="#"
        >
          Home
        </a>
        <span className="text-[#146976]/40">/</span>
        <a
          className="text-[#146976] text-sm font-medium hover:text-[#146976]"
          href="#"
        >
          {medDetails?.category.name}
        </a>
        <span className="text-[#146976]">/</span>
        <span className="text-[#5f878e] text-sm font-bold">
          {medDetails?.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT — Images */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="w-full bg-[#FCFBFA] aspect-square rounded-2xl overflow-hidden border border-[#146976]/10">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url(${medDetails?.img})`,
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDfl6cjLavEqeIQC4NItGqI7M-aNgR75LnpgCPD6OGMppozKVRXh59doe69aVlbXBqBtUXSjAkeZGd0esYjvxftwr24X3Jap6rmR07IOD-mkgZ2VujppGLdvMVhfVvI7uORH2Ky2d3mAEDYAfPSBBNQ06vSR6LAiwrXSXH4QVO2Ti3vm-6EVb12n04Kt6GnXpTX_J8C6zW1usrIb7CrZZlA08V4cY8N9t442IzmH190pNOxzUUHl2GDC6By8CWTEErMhXX4VZUWNw",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA_6LPx4LP5ZX8OY4ZGr8GNUOa5drmkX3YUiL48qLBhTA_doZVHcBqAV_kvB9PIg-4CpGrtmNUZ9UShAtJ2J49X7J4bHmkz4IVG_B-NNCVXfhUes2UwU3Q12_iQJQ1nuFEi2UonE8LT6lyQRucVn__o_rJorackQSOeFFo98_7ssa1vAY_Z-wrDEw6Jl111g3DmJh3_t7FSOD4xJELhYXw9Z4dZ_foMGalFWbjBPFEUEi3_VTWd6th2TbMxqg5nMJsRVEP7GqJgCA",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDqFvCjvjysKiSjVwi5mnXFyGJzFAH5JDAZX2vAoWw4m2oNHqBqw4wL7BHYqdYH_zOORGg0gwhR2vf-cuu7Up01S0jwYDnp1aIdE3fwMGd3ZOuOI2eb9X8ReZWHbscMK5zilSoTJVRYFLyaOK7k3P1N9aU3Gemqx_pLz0zmuX3Iqm7GPkRzWQom7_CaWhv02EUpYpR9Mgj0oB2IrncTk3ttoiLt7LSMf5GZMNJFrEUHjwendnpcksvaG_a7kzlo9q7e-uOmMP88wg",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD3tH7G5RFTiCtqyFnRAvfjSGqPCqFM_Ga7dZxtw2Ijw-iQ4jWhphDKbY1BLlPRRU0CpTq2VUDOn-o63ALHTG7FHA-UVaGXCMDRJcfdoMO30SC3rsABextkMKL0fkHm9_xXFFJeqL6z2AXMziBmWZeTmePBNSmwH4el7fHBYeklNIkyMqJyD4hSORfUVFzWuVL4e7tCa5A2PYbPvd3cqZm7p7OToOLDASKRmpzndzd8l0eHzPoeg4cy_d18ftxRoZBJshhGu4QUig",
            ].map((img, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg overflow-hidden border ${
                  i === 0 ? "border-[#146976] border-2" : "border-[#146976]/10"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url("${img}")` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Info */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="md:text-4xl text-3xl font-black text-white">
                {medDetails?.name}
              </h1>
              <p className="text-[#146976]/90 font-semibold mt-1">
                Manufacturer:{" "}
                <span className="text-[#146976] hover:underline">
                  {medDetails?.manufacturer}
                </span>
              </p>
            </div>
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-lg border flex items-center justify-center
    ${
      medDetails?.stock > 0
        ? "bg-[#0e6d7b]/20 text-[#0e6d7b] border-[#0e6d7b]/30"
        : "bg-[#ef4444]/20 text-[#ef4444] border-[#ef4444]/30"
    }`}
            >
              {medDetails?.stock > 0 ? "In Stock" : "Out Of Stock"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#267481]">
              ৳{medDetails?.price}
            </span>
            <span className="text-[#146976]/90 line-through">$35.00</span>
            <span className="bg-[#EBBA92]/30 text-white/70 text-xs font-bold px-2 py-1 rounded">
              Save 30%
            </span>
          </div>

          <div className="bg-[#146976]/5 border-l-4 border-[#146976] p-5 rounded-r-xl">
            <div className="flex items-center gap-2 text-[#2d828f] font-bold mb-2">
              <InfoIcon fontSize="small" />
              <span className="text-sm">Standard Dosage Instructions</span>
            </div>
            <p className="text-sm text-white/40">
              {medDetails?.dosage_instructions}
            </p>
          </div>

          {/* add to cart */}
          <div className="flex md:flex-row flex-col gap-4 p-6 rounded-xl border border-[#146976]/50">
            {/* Quantity Adjuster */}
            {/* Quantity Adjuster */}
            <div className="flex items-center justify-center border border-[#146976]/50 rounded-lg">
              <button
                disabled={loading}
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-4 py-3 text-white cursor-pointer"
              >
                -
              </button>

              <span className="px-4 font-bold text-white">{quantity}</span>

              <button
                disabled={loading}
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-3 text-white cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={loading}
              onClick={() => handleAddToCart(`${medDetails?.id}`, quantity)}
              className="w-full sm:w-auto bg-[#146976] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 sm:flex-1 cursor-pointer hover:bg-[#248493]"
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {" "}
                  <AddShoppingCartIcon />
                  Add to Cart
                </>
              )}
            </button>
            {/* CheckOut Button */}
            <Link
              href="/shop/checkout"
              onClick={() => handleAddToCart(`${medDetails?.id}`, quantity)}
              className="w-full sm:w-auto bg-[#146976] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 sm:flex-1 cursor-pointer hover:bg-[#248493]"
            >
              <LocalMall />
              CheckOut
            </Link>
            {/* Favorite Button */}
            <button className="p-4 group hover:bg-[#e2d1c3] ease-in border border-[#146976]/50 rounded-lg text-[#146976]">
              <FavoriteBorderIcon className="group-hover:text-red-500 group-hover:scale-125 delay-100" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#e3cab5] p-6 rounded-xl border border-[#146976]/10">
              <h3 className="font-bold text-[#1E3F45] flex items-center gap-2">
                <DescriptionIcon className="text-[#146976]" />
                Description
              </h3>
              <p className="text-sm text-[#1E3F45] mt-2">
                {medDetails?.dosage_instructions}
              </p>
            </div>

            <div className="bg-[#e3cab5] p-6 rounded-xl border border-[#146976]/10">
              <h3 className="font-bold text-[#1E3F45] flex items-center gap-2">
                <MedicalInformationIcon className="text-[#146976]" />
                Usage & Warnings
              </h3>
              <ul className="list-disc ml-4 text-sm text-[#1E3F45]/70 mt-2">
                <li>Complete full course</li>
                <li>Avoid if allergic</li>
                <li>Consult doctor</li>
                <li>Store below 25°C</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center bg-[#decfc1] p-4 rounded-xl border border-[#146976]/10">
            <div>
              <p className="text-xs font-extrabold text-[#146976] uppercase">
                {medDetails?.manufacturer}
              </p>
              <p className="text-sm font-semibold text-[#1E3F45]">
                GMP Certified Laboratory
              </p>
            </div>
            {/* <button className="text-xs font-bold text-[#146976] flex items-center gap-1">
              View Brand Profile <ArrowForwardIcon fontSize="small" />
            </button> */}
          </div>
        </div>
      </div>

      <Tabs defaultValue="product-details" className="bg-transparent">
        {/* Tabs */}
        <div className="mt-8 pt-12 overflow-x-auto">
          <TabsList className="flex gap-8 mb-8 bg-transparent">
            <TabsTrigger
              value="product-details"
              className="
          font-bold text-lg
          text-[#146976] /* default text color */
          data-[state=active]:text-[#146976] /* active text color */
          data-[state=active]:font-extrabold /* active text color */
          data-[state=active]:bg-transparent /* remove background on active tab */
          data-[state=inactive]:text-[#146976]/60 /* inactive text */
          data-[state=inactive]:bg-transparent /* remove background on inactive tab */
          hover:text-[#146976] /* hover color */
          transition-all
        "
            >
              Customer Reviews ({medDetails?.reviews.length})
            </TabsTrigger>
            <TabsTrigger
              value="side-effects"
              className="
          font-bold text-lg
          text-[#146976] /* default text color */
          data-[state=active]:text-[#146976] /* active text color */
          data-[state=active]:bg-transparent /* remove background on active tab */
          data-[state=inactive]:text-[#146976]/60 /* inactive text */
          data-[state=inactive]:bg-transparent /* remove background on inactive tab */
          hover:text-[#146976] /* hover color */
          transition-all
          data-[state=active]:font-extrabold
        "
            >
              Side Effects
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Contents */}
        <div className="border-b border-[#146976]/70 -mt-10 mb-4"></div>
        <TabsContent value="product-details">
          <Reviews reviews={medDetails?.reviews} medicineId={medDetails.id} currentUserId={currentUserId} />
        </TabsContent>

        <TabsContent value="side-effects">
          <SideEffects
            sideEffects={medDetails?.side_effects}
            seriousSideEffects={medDetails?.serious_side_effects}
          />
        </TabsContent>
      </Tabs>
    </main>
  );
}
