"use client";

import { useState } from "react";
import { ArrowForward, LocalShipping } from "@mui/icons-material";
import PaymentsIcon from "@mui/icons-material/Payments";
import { User } from "@/types/userTypes";
import { toast } from "sonner";
import { CartItem } from "@/types/cart";
import { serverPlaceOrder } from "./placeOrderAction";
import { useRouter } from "next/navigation";

interface ICheckOut {
  currentUser: User;
  cartItems: CartItem[];
}

export default function CheckOutPage({
  currentUser,
  cartItems: initialCart,
}: ICheckOut) {
  const router = useRouter();
  const [user] = useState(currentUser);
  const [shippingAddress, setShippingAddress] = useState(
    currentUser.default_shipping_address || "",
  );
  const [phoneNumber, setPhoneNumber] = useState(
    currentUser.phone_number || "",
  );
  const [cartItems, setCartItems] = useState(initialCart);
  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 100;
  const totalAmount = subtotal + shipping;

  const onPlaceOrder = async () => {
    if (!shippingAddress) return toast.error("Enter shipping address");
    if (!phoneNumber) {
      return toast.error("Enter phone number");
    }
    if (!/^\+?[0-9]{10,15}$/.test(phoneNumber)) {
      return toast.error("Enter a valid phone number");
    }

    if (!cartItems.length) return toast.error("Cart is empty");

    setLoading(true);
    try {
      await serverPlaceOrder({
        customerId: user.id,
        shippingAddress,
        phoneNumber,
        items: cartItems.map((item) => ({
          medicineId: item.medicineId,
          sellerId: item.sellerId,
          quantity: item.quantity,
          price: item.price,
        })),
      });
      toast.success("Order placed successfully!");
      setCartItems([]);
      router.push("/shop");
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-10 py-8 text-white text-center">
      {/* Heading */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <div className="flex flex-wrap gap-2 text-sm font-medium justify-center">
          <a className="text-[#146976]/60" href="#">
            Home
          </a>
          <span className="text-[#146976]/40">/</span>
          <a className="text-[#146976]/60" href="#">
            Shop
          </a>
          <span className="text-[#146976]/40">/</span>
          <span className="text-[#EBBA92] font-bold">Checkout</span>
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em]">
          Cart & Checkout
        </h1>
        <p className="text-[#146976] text-base font-semibold leading-normal max-w-md">
          Complete your medical order for fast delivery.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Shipping Info */}
        <div className="bg-[#1e2a2b] p-6 md:p-8 rounded-xl border border-[#146976]/20 shadow-md w-full max-w-md text-left">
          <h2 className="text-xl font-bold text-[#EBBA92] mb-6 flex items-center gap-2 justify-center">
            <LocalShipping /> Shipping Information
          </h2>
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider">
                Full Name
              </label>
              <input
                className="w-full bg-[#121e20]/20 border border-[#146976]/40 rounded-lg px-4 py-2.5 text-sm text-white"
                value={user.name}
                readOnly
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider">
                Delivery Address
              </label>
              <input
                className="w-full bg-[#121e20]/20 border border-[#146976]/40 rounded-lg px-4 py-2.5 text-sm text-white"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Enter your shipping address"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider">
                Phone Number
              </label>
              <input
                className="w-full bg-[#121e20]/20 border border-[#146976]/40 rounded-lg px-4 py-2.5 text-sm text-white"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                type="text"
              />
            </div>
          </form>

          <div className="pt-4 border-t border-[#146976]/20 mt-6">
            <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider block mb-3">
              Payment Method
            </label>
            <div className="flex items-center gap-3 p-4 bg-[#146976]/20 border border-[#146976]/40 rounded-lg cursor-pointer justify-center">
              <PaymentsIcon className="text-[#EBBA92]" />
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-white leading-none">
                  Cash on Delivery
                </p>
                <p className="text-xs text-[#39818c] mt-1">
                  Pay when your medicine arrives
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-[#1e2a2b] p-6 md:p-8 rounded-xl border border-[#146976]/20 shadow-md w-full max-w-md text-left">
          <h2 className="text-xl font-bold text-[#EBBA92] mb-6 text-center">
            Order Summary
          </h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm text-[#55a0ab]">
              <span>Subtotal</span>
              <span className="font-bold text-white">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm text-[#55a0ab]">
              <span>Shipping</span>
              <span className="text-green-500 font-bold">{shipping}</span>
            </div>
            <div className="pt-3 border-t border-[#146976]/20 flex justify-between items-center">
              <span className="text-lg font-bold text-white">Total Amount</span>
              <span className="text-2xl font-black text-[#EBBA92]">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={onPlaceOrder}
            disabled={loading}
            className="w-full bg-[#146976] hover:bg-[#146976]/90 text-white font-black py-4 rounded-xl text-lg shadow-lg shadow-[#146976]/20 transition-all flex items-center justify-center gap-3"
          >
            {loading ? "Placing Order..." : "Place Order"}
            <ArrowForward />
          </button>
        </div>
      </div>
    </main>
  );
}
