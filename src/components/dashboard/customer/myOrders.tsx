import { ChevronRight } from "@mui/icons-material";
import { ChevronLeft } from "lucide-react";

export default function MyOrders() {
  return (
    <div className="min-h-screen bg-[#0A1416]">
      <header className="h-16 flex items-center justify-between px-8 bg-[#0A1416]/80 backdrop-blur-md sticky top-0 z-10 border-b border-[#1F363A]">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Customer Dashboard
          </h2>
        </div>

        <div className="h-8 w-8 rounded-full bg-[#146875]/30 border border-[#146875]/50 flex items-center justify-center text-[#146875] font-bold text-xs ring-1 ring-white/10">
          JD
        </div>
      </header>

      <div className="p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight">
            Order History
          </h1>
          <p className="text-gray-400 text-base max-w-xl">
            Review and track your medication history. Access detailed summaries
            for all past transactions.
          </p>
        </div>

        <div className="flex items-center justify-between py-2 border-b border-[#1F363A]">
          <div className="flex gap-4">
            <button className="text-sm font-bold text-[#EBBA92] border-b-2 border-[#EBBA92] pb-2">
              All Orders
            </button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-300 pb-2 transition-colors">
              Pending
            </button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-300 pb-2 transition-colors">
              Completed
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {[
            ["#MS-88294", "Oct 24, 2023", "$142.50", "Delivered", "emerald"],
            ["#MS-88312", "Nov 02, 2023", "$64.20", "Processing", "orange"],
            ["#MS-88105", "Sep 15, 2023", "$210.00", "Delivered", "emerald"],
            ["#MS-88001", "Aug 28, 2023", "$45.00", "Cancelled", "red"],
          ].map(([id, date, price, status, color]) => (
            <div
              key={id}
              className="rounded-xl shadow-2xl border border-[#1F363A] p-6 transition-all hover:border-[#146875]/50 group bg-[#16282B]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-6 md:gap-16">
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Order ID
                    </p>
                    <p className="text-sm font-black text-white group-hover:text-[#EBBA92] transition-colors">
                      {id}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Order Date
                    </p>
                    <p className="text-sm font-semibold text-gray-300">
                      {date}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Total Price
                    </p>
                    <p className="text-sm font-black text-[#EBBA92]">{price}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      Status
                    </p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider
                      bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}
                    >
                      {status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <button className="w-full md:w-auto h-11 px-8 bg-[#146875]/20 hover:bg-[#146875] border border-[#146875]/50 text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all active:scale-95 shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-[#1F363A] pt-8 mt-4">
          <p className="text-sm font-medium text-gray-500">
            Showing <span className="text-gray-300">1-4</span> of{" "}
            <span className="text-gray-300">12</span> orders
          </p>

          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all">
              <span className="material-symbols-outlined text-lg">
                <ChevronLeft />
              </span>
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#146875] text-white text-sm font-black shadow-lg shadow-[#146875]/20">
              1
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all text-sm font-bold">
              2
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all text-sm font-bold">
              3
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F363A] bg-[#16282B] text-gray-400 hover:text-white hover:border-[#146875] transition-all">
              <span className="material-symbols-outlined text-lg">
                <ChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
