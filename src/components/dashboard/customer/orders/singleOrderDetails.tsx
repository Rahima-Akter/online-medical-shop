import { getSingleOrder } from "@/services/order.service";
import { getSession } from "@/services/user.service";
import { OrderItem } from "@/types/order";
import { User } from "@/types/userTypes";
import {
  ArrowBack,
  Cancel,
  Check,
  CheckCircleOutline,
  Description,
  Inventory2,
  LocalShipping,
  LocationOn,
  Medication,
  Payments,
  PhoneIphone,
  SupportAgent,
  VerifiedUser,
} from "@mui/icons-material";
import { Pill } from "lucide-react";
import Link from "next/link";

export default async function OrderDetails({ id }: { id: string }) {
  const session = await getSession();
  if (!session) return null;
  const user: User = session?.user;
  const { data } = await getSingleOrder(id);
  const createdAt = new Date(data.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const estimatedDate = new Date(createdAt);
  estimatedDate.setDate(estimatedDate.getDate() + 3);
  const estimatedDateFormat = estimatedDate.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
  });

  const statusMap: Record<string, string> = {
    PLACED: "Placed",
    PROCESSING: "Processing",
    SHIPPED: "In Transit",
    DELIVERED: "Delivered",
    CANCELLED: "Cancelled",
  };

  const displayOrder = ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"];

  const activeStepIndex =
    data.status === "CANCELLED" ? -1 : displayOrder.indexOf(data.status);

  const steps = displayOrder.map((status, index) => {
    let icon =
      status === "PLACED" || status === "PROCESSING" ? (
        <Check />
      ) : status === "SHIPPED" ? (
        <LocalShipping />
      ) : (
        <Inventory2 />
      );

    let label = statusMap[status];

    if (data.status === "CANCELLED" && index === 0) {
      icon = <Cancel />;
      label = statusMap.CANCELLED;
    }

    const date =
      data.status === "CANCELLED" && index === 0
        ? ""
        : status === "SHIPPED"
          ? `Est: ${estimatedDateFormat}`
          : status === "DELIVERED"
            ? ""
            : createdAt;

    const active =
      data.status === "CANCELLED" ? index === 0 : activeStepIndex >= index;

    const cancelled = data.status === "CANCELLED" && index === 0;
    return { icon, label, date, active, cancelled };
  });

  return (
    <div className="min-h-screen bg-[#080E0F]">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-8 bg-[#121E20] border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link
              className="text-gray-500 hover:text-[#146875] transition-colors"
              href="/my-orders"
            >
              <span className="material-symbols-outlined align-middle">
                <ArrowBack />
              </span>
            </Link>
            <h2 className="text-lg font-semibold text-gray-100">
              Order{" "}
              <span className="text-[#146875]">#MS-{data.id.slice(-3)}</span>
            </h2>
          </div>
        </div>

        {/* <div className="h-9 w-9 rounded-full bg-[#146875]/10 border border-[#146875]/30 flex items-center justify-center text-[#146875] font-bold text-sm">
          JD
        </div> */}
      </header>

      <div className="py-6 md:py-5 md:px-3 max-w-6xl mx-auto w-full -mt-2">
        {/* Order Progress */}
        <div className="bg-[#121E20] rounded-2xl shadow-xl border border-white/5 md:p-10 p-6 mb-3">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 top-5 -translate-y-1/2 w-full h-1 bg-gray-800 rounded-full"></div>
            <div className="absolute left-0 top-5 -translate-y-1/2 w-2/3 h-1 bg-[#146875] rounded-full"></div>

            {steps.map((step, i) => {
              const bgClass = step.cancelled
                ? "bg-red-800 text-white shadow-lg shadow-red-300/20"
                : step.active
                  ? "bg-[#146875] text-white shadow-lg shadow-[#146875]/20"
                  : "bg-gray-800 text-[#4A5568]";

              const textClass = step.cancelled
                ? "text-red-700"
                : step.active
                  ? "text-[#146875]"
                  : "text-[#4A5568]";

              return (
                <div key={i} className="relative flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${bgClass} border-2 border-gray-700`}
                  >
                    {step.icon}
                  </div>

                  <div
                    className={`mt-4 text-xs font-bold uppercase tracking-wider ${textClass}`}
                  >
                    {step.label}
                  </div>

                  <div className="mt-1 text-[10px] text-gray-500 font-medium italic">
                    {step.date}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left */}
          <div className="md:col-span-2 space-y-6">
            {/* Medications */}
            <div className="bg-[#121E20] rounded-2xl shadow-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-5 bg-white/5 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#146875]">
                    <Pill />
                  </span>
                  Prescribed Medications
                </h3>
                <span className="px-3 py-1 bg-[#1A292C] rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-white/5">
                  {data.items.length} Items
                </span>
              </div>

              <div className="divide-y divide-white/5">
                {data.items.map((item: OrderItem, i: number) => (
                  <div
                    key={i}
                    className="p-6 flex items-center gap-5 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="w-16 h-16 bg-[#1A292C] rounded-xl flex items-center justify-center border border-white/5">
                      <span className="material-symbols-outlined text-[#146875]">
                        <Medication />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-100">
                        {item.medicine.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.medicine.category.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-100">
                        <span className="font-extrabold">৳</span>
                        {item.price}
                      </div>
                      <div className="text-[10px] font-medium text-[#146875] uppercase mt-1">
                        Qty: {item.quantity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assistance */}
            <div className="bg-[#146875]/5 rounded-2xl p-6 border border-[#146875]/20 flex items-start gap-4">
              <span className="material-symbols-outlined text-[#146875] mt-0.5">
                <SupportAgent />
              </span>
              <div>
                <p className="text-sm font-bold text-[#146875]">
                  Pharmacist Assistance
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Our medical team is available 24/7 for queries regarding your
                  prescription. If you experience adverse effects, please
                  contact us immediately at support@medistore.com
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 md:space-y-3">
            {/* shipping address */}
            <div className="bg-[#121E20] rounded-2xl shadow-xl border border-white/5 overflow-hidden">
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
                    Shipping Address
                  </h4>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1A292C] flex items-center justify-center border border-white/5 shrink-0">
                      <span className="material-symbols-outlined text-[#146875]">
                        <LocationOn />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-100">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {user.default_shipping_address}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-[#146875]/80">
                        <span className="material-symbols-outlined text-sm">
                          <PhoneIphone />
                        </span>
                        + {user.phone_number}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/5"></div>

                {/* Payment Method */}
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
                    Payment Method
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1A292C] flex items-center justify-center border border-white/5">
                      <span className="material-symbols-outlined text-[#146875]">
                        <Payments />
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-300">
                      Cash on Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Summary */}
            <div className="bg-[#121E20] rounded-2xl shadow-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 bg-white/5 border-b border-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Order Summary
                </h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-200">
                    <span className="font-extrabold">৳</span>
                    {data.totalPrice - data.deliveryCharge}
                  </span>
                </div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-gray-500">Shipping Fee</span>
                  <span className="text-gray-200">
                    <span className="font-extrabold">৳</span>
                    {data.deliveryCharge}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-400">
                    TOTAL AMOUNT
                  </span>
                  <span className="text-2xl font-black text-[#EBBA92] tracking-tight">
                    <span className="font-extrabold">৳</span>
                    {data.totalPrice}
                  </span>
                </div>

                {/* <button className="w-full mt-4 py-3.5 bg-[#146875] text-white rounded-xl text-sm font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#146875]/20">
                  <span className="material-symbols-outlined text-lg">
                    <Description />
                  </span>
                  Download Invoice
                </button> */}
              </div>
            </div>

            {/* Verified */}
            {/* <div className="bg-[#EBBA92]/5 rounded-2xl p-6 border border-[#EBBA92]/20 text-center">
              <div className="flex justify-center mb-3">
                <span className="material-symbols-outlined text-[#EBBA92] text-3xl">
                  <VerifiedUser />
                </span>
              </div>
              <p className="text-sm font-bold text-gray-200">
                Prescription Verified
              </p>
              <p className="text-[11px] text-gray-500 mt-2 mb-4">
                This order contains prescription-only medicine and has been
                reviewed by our licensed pharmacist.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBBA92]/10 rounded-full text-[10px] font-bold text-[#EBBA92] uppercase tracking-tighter">
                <span className="material-symbols-outlined text-sm">
                  <CheckCircleOutline />
                </span>
                Auth #MS-CERT-992
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
