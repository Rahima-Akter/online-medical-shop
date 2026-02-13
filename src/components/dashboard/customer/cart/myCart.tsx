"use client";
import {
  allCartItemsAction,
  updateCartAction,
} from "@/components/actions/cartAction";
import { Spinner } from "@/components/ui/spinner";
import { CartItem } from "@/types/cart";
import { Add, ArrowForward, Delete, Info, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";

// export default function MyCart({ cartItems }: { cartItems: CartItem[] }) {
export default function MyCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = await allCartItemsAction();
        setItems(cart || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = async (medicineId: string, newQty: number) => {
    if (newQty < 1) return;
    try {
      const updated = await updateCartAction(medicineId, newQty);
      setItems((prev) =>
        prev.map((item) =>
          item.medicineId === medicineId
            ? {
                ...item,
                quantity: updated?.quantity ?? newQty ?? item.quantity,
              }
            : item,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <Spinner className="text-white lg:ml-80" />
      </div>
    );
  }

  if (!items.length)
    return (
      <p className="font-bold text-xl text-center border border-gray-700 px-8 py-20 rounded-lg">
        No Items To Show
      </p>
    );

  const colors = {
    primary: "#146875",
    sidebarBg: "#0D1A1C",
    deepCharcoal: "#0F1719",
    surfaceDark: "#1A2629",
    surfaceDarkLighter: "#243337",
    accentPeach: "#EBBA92",
    lightCream: "#FDFBF7",
    mutedCream: "#D1D5DB",
  };

  return (
    <div
      style={{ backgroundColor: colors.sidebarBg, color: colors.lightCream }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: colors.deepCharcoal,
          borderBottom: `1px solid ${colors.lightCream}15`,
        }}
        className="h-16 flex items-center justify-between px-8 sticky top-0 z-50 backdrop-blur-md"
      >
        <div className="flex items-center gap-4">
          <h2
            style={{ color: colors.mutedCream }}
            className="text-sm font-medium uppercase tracking-widest"
          >
            Dashboard / <span className="font-bold text-[#EBBA92]">Cart</span>
          </h2>
        </div>
      </header>

      {/* Main */}
      <div className="p-4 md:px-10 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <h1
            style={{ color: colors.lightCream }}
            className="text-4xl font-black mb-2"
          >
            Shopping Cart
          </h1>
          <p
            style={{ color: colors.mutedCream + "AA" }}
            className="text-base font-medium"
          >
            You have{" "}
            <span style={{ color: colors.accentPeach }}>
              {items.length} items
            </span>{" "}
            in your healthcare kit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {/* Left Column - Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: colors.surfaceDark,
                  border: `1px solid ${colors.lightCream}0D`,
                }}
                className="rounded-2xl shadow-2xl overflow-hidden"
              >
                <div
                  className="p-6 flex flex-col md:flex-row gap-8 border-b transition-colors"
                  style={{ borderColor: colors.lightCream + "0D" }}
                >
                  <div
                    style={{
                      backgroundColor: colors.surfaceDarkLighter,
                      border: `1px solid ${colors.lightCream}0D`,
                    }}
                    className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0"
                  >
                    <img
                      alt="Medicine"
                      className="w-full h-full object-cover opacity-90 grayscale-[20%]"
                      src={item.img}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3
                          style={{ color: colors.lightCream }}
                          className="text-xl font-bold mb-1"
                        >
                          {item.name}
                        </h3>
                        <p
                          style={{ color: colors.mutedCream + "99" }}
                          className="text-sm"
                        >
                          {item.category}
                        </p>
                      </div>
                      <p
                        style={{ color: colors.accentPeach }}
                        className="text-2xl font-black"
                      >
                        <span className="font-extrabold">৳</span>
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div
                        className="flex items-center rounded-xl overflow-hidden"
                        style={{
                          backgroundColor: colors.surfaceDarkLighter,
                          border: `1px solid ${colors.lightCream}1A`,
                        }}
                      >
                        <button
                          style={{ color: colors.mutedCream }}
                          className="p-2.5 hover:bg-primary/20 transition-all cursor-pointer"
                          onClick={() =>
                            handleQuantityChange(
                              item.medicineId,
                              (item.quantity ?? 1) - 1,
                            )
                          }
                          disabled={(item.quantity ?? 1) <= 1}
                        >
                          <Remove />
                        </button>

                        <span
                          style={{ color: colors.lightCream }}
                          className="w-12 text-center font-bold text-lg"
                        >
                          {item.quantity}
                        </span>

                        <button
                          style={{ color: colors.mutedCream }}
                          className="p-2.5 hover:bg-primary/20 transition-all cursor-pointer"
                          onClick={() =>
                            handleQuantityChange(
                              item.medicineId,
                              (item.quantity ?? 1) + 1,
                            )
                          }
                        >
                          <Add />
                        </button>
                      </div>
                      {/* delete button */}
                      <button
                        style={{ color: "#f87171" }}
                        className="flex items-center -mr-3 cursor-pointer text-sm font-bold px-4 py-2 rounded-lg hover:bg-red-400/10 transition-all"
                      >
                        <span className="material-symbols-outlined">
                          <Delete />
                        </span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Info Box */}
            <div
              style={{ backgroundColor: colors.primary + "10" }}
              className="border border-primary/30 p-5 rounded-2xl flex gap-4 items-center"
            >
              <div
                style={{ backgroundColor: colors.primary + "20" }}
                className="p-2 rounded-lg"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: colors.primary }}
                >
                  <Info />
                </span>
              </div>
              <p
                style={{ color: colors.mutedCream }}
                className="text-sm leading-relaxed"
              >
                Some items in your cart require a{" "}
                <span style={{ color: colors.lightCream, fontWeight: "bold" }}>
                  valid prescription
                </span>
                . You can upload it during the next step.
              </p>
            </div>
          </div>

          {/* Right Column - Order Summary & Promo */}
          <div className="space-y-4">
            <div
              style={{
                backgroundColor: colors.surfaceDark,
                border: `1px solid ${colors.lightCream}0D`,
              }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <div
                style={{
                  backgroundColor: colors.surfaceDarkLighter,
                  borderBottom: `1px solid ${colors.lightCream}0D`,
                }}
                className="p-6"
              >
                <h3
                  style={{ color: colors.lightCream }}
                  className="text-xl font-bold"
                >
                  Order Summary
                </h3>
              </div>
              <div className="p-8 space-y-5">
                <div
                  className="flex justify-between"
                  style={{ color: colors.mutedCream + "80" }}
                >
                  <span className="text-sm">Subtotal</span>
                  <span
                    style={{ color: colors.lightCream }}
                    className="font-bold"
                  >
                    $49.99
                  </span>
                </div>
                <div
                  className="flex justify-between"
                  style={{ color: colors.mutedCream + "80" }}
                >
                  <span className="text-sm">Shipping Fee</span>
                  <span
                    style={{ color: colors.lightCream }}
                    className="font-bold"
                  >
                    $5.00
                  </span>
                </div>
                <div
                  className="pt-6 mt-2 border-t flex justify-between items-center"
                  style={{ borderColor: colors.lightCream + "1A" }}
                >
                  <span
                    style={{ color: colors.mutedCream }}
                    className="text-lg font-medium"
                  >
                    Total Amount
                  </span>
                  <span
                    style={{ color: colors.accentPeach }}
                    className="text-3xl font-black"
                  >
                    $57.49
                  </span>
                </div>
                <div className="pt-6">
                  <button
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.lightCream,
                    }}
                    className="w-full py-3 rounded-xl font-bold text-lxsg hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    Proceed to Checkout
                    <span className="material-symbols-outlined">
                      <ArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div
              style={{
                backgroundColor: colors.surfaceDark,
                border: `1px solid ${colors.lightCream}0D`,
              }}
              className="rounded-2xl shadow-xl px-4 py-6"
            >
              <label
                style={{ color: colors.mutedCream }}
                className="block text-[10px] font-bold uppercase tracking-widest mb-3"
              >
                Apply Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  style={{
                    backgroundColor: colors.surfaceDarkLighter,
                    color: colors.lightCream,
                    borderColor: colors.lightCream + "1A",
                  }}
                  className="flex-1 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary placeholder:text-[#FDFBF7]/30"
                  placeholder="Enter code"
                  type="text"
                />
                <button
                  style={{
                    borderColor: colors.primary + "50",
                    color: colors.primary,
                  }}
                  className="px-4 py- border-2 font-bold text-xs rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
