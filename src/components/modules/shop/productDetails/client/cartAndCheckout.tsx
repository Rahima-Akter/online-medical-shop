"use client";
import { addToCartAction } from "@/components/actions/cartAction";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { AddShoppingCartOutlined, LocalMall } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { Medicine } from "@/types/medicine";
import Link from "next/link";

export default function CartAndCheckoutClient({
  medDetails,
}: {
  medDetails: Medicine;
}) {
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
    <div className="flex md:flex-row flex-col gap-4 p-6 rounded-xl border border-[#146976]/50">
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
            <AddShoppingCartOutlined />
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
        Checkout
      </Link>
      {/* Favorite Button */}
      <button className="p-4 group hover:bg-[#e2d1c3] ease-in border border-[#146976]/50 rounded-lg text-[#146976]">
        <FavoriteBorderIcon className="group-hover:text-red-500 group-hover:scale-125 delay-100" />
      </button>
    </div>
  );
}
