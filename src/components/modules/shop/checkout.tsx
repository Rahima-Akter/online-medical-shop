import { ArrowForward, LocalShipping, LocationCity, VerifiedUser } from "@mui/icons-material";
import PaymentsIcon from '@mui/icons-material/Payments';

export default function CheckOut() {
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 text-white text-center">
      {/* Breadcrumbs & Heading */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <div className="flex flex-wrap gap-2 text-sm font-medium leading-normal justify-center">
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

      {/* Progress Stepper */}
      <div className="flex items-center justify-center md:gap-4 mb-10">
        {/* Step 1 */}
        <div className="flex md:flex-row flex-col items-center md:gap-3 flex-1 min-w-[120px] justify-center">
          <div className="w-10 h-10 rounded-full bg-[#146976] text-white flex items-center justify-center font-bold">
            1
          </div>
          <div className="md:text-left">
            <p className="text-sm font-extrabold text-white">Cart</p>
            <p className="text-xs text-[#146976] font-semibold">Review items</p>
          </div>
        </div>
        <div className="flex-1 h-[2px] bg-[#146976]/20 mx-2 md:mx-4"></div>
        {/* Step 2 */}
        <div className="flex md:flex-row flex-col items-center md:gap-3 flex-1 min-w-[120px] justify-center">
          <div className="w-10 h-10 rounded-full bg-[#146976]/20 text-[#146976] flex items-center justify-center font-bold">
            2
          </div>
          <div className="text-left">
            <p className="text-sm font-extrabold text-[#146976]/60">Shipping</p>
            <p className="text-xs text-[#146976]">Address</p>
          </div>
        </div>
        <div className="flex-1 h-[2px] bg-[#146976]/20 mx-2 md:mx-4"></div>
        {/* Step 3 */}
        <div className="flex md:flex-row flex-col items-center md:gap-3 flex-1 min-w-[120px] justify-center">
          <div className="w-10 h-10 rounded-full bg-[#146976]/20 text-[#146976] flex items-center justify-center font-bold">
            3
          </div>
          <div className="text-left">
            <p className="text-sm font-extrabold text-[#146976]/60">Payment</p>
            <p className="text-xs text-[#146976]">Complete</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Shipping & Payment Column */}
        <div className="w-full lg:w-5/12 flex flex-col items-center gap-6">
          {/* Shipping Form */}
          <div className="bg-[#1e2a2b] p-6 md:p-8 rounded-xl border border-[#146976]/20 shadow-md w-full max-w-md text-left">
            <h2 className="text-xl font-bold text-[#EBBA92] mb-6 flex items-center gap-2 justify-center">
              <span className="material-symbols-outlined"><LocalShipping/></span>
              Shipping Information
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-[#121e20]/20 border border-[#146976]/40 focus:border-[#EBBA92] focus:ring-1 focus:ring-[#EBBA92] rounded-lg px-4 py-2.5 text-sm text-white transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider">
                    Delivery Address
                  </label>
                  <input
                    className="w-full bg-[#121e20]/20 border border-[#146976]/40 focus:border-[#EBBA92] focus:ring-1 focus:ring-[#EBBA92] rounded-lg px-4 py-2.5 text-sm text-white transition-all"
                    placeholder="House 24, Street Name"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider">
                      City
                    </label>
                    <input
                      className="w-full bg-[#121e20]/20 border border-[#146976]/40 focus:border-[#EBBA92] focus:ring-1 focus:ring-[#EBBA92] rounded-lg px-4 py-2.5 text-sm text-white transition-all"
                      placeholder="Chicago"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-[#121e20]/20 border border-[#146976]/40 focus:border-[#EBBA92] focus:ring-1 focus:ring-[#EBBA92] rounded-lg px-4 py-2.5 text-sm text-white transition-all"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="pt-4 border-t border-[#146976]/20 mt-6">
                <label className="text-xs font-bold text-[#EBBA92] uppercase tracking-wider block mb-3">
                  Payment Method
                </label>
                <div className="flex items-center gap-3 p-4 bg-[#146976]/20 border border-[#146976]/40 rounded-lg cursor-pointer justify-center">
                  <span className="material-symbols-outlined text-[#EBBA92]">
                    <PaymentsIcon/>
                  </span>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-bold text-white leading-none">
                      Cash on Delivery
                    </p>
                    <p className="text-xs text-[#39818c] mt-1">
                      Pay when your medicine arrives
                    </p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-[#EBBA92] bg-[#121e20]"></div>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-[#1e2a2b] p-6 md:p-8 rounded-xl border border-[#146976]/20 shadow-md w-full max-w-md text-left">
            <h2 className="text-xl font-bold text-[#EBBA92] mb-6 text-center">
              Order Summary
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-[#55a0ab]">
                <span>Subtotal</span>
                <span className="font-bold text-white">$43.00</span>
              </div>
              <div className="flex justify-between text-sm text-[#55a0ab]">
                <span>Shipping</span>
                <span className="text-green-500 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-sm text-[#55a0ab]">
                <span>Tax (VAT)</span>
                <span className="font-bold text-white">$2.15</span>
              </div>
              <div className="pt-3 border-t border-[#146976]/20 flex justify-between items-center">
                <span className="text-lg font-bold text-white">
                  Total Amount
                </span>
                <span className="text-2xl font-black text-[#EBBA92]">
                  $45.15
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  className="flex-1 bg-[#121e20]/20 border border-[#146976]/40 focus:border-[#EBBA92] focus:ring-1 focus:ring-[#EBBA92] rounded-lg px-4 py-2 text-sm text-white"
                  placeholder="Coupon Code"
                  type="text"
                />
                <button className="px-4 py-2 bg-[#146976]/40 text-white font-bold rounded-lg text-sm hover:bg-[#146976]/60 transition-colors">
                  Apply
                </button>
              </div>
              <button className="w-full bg-[#146976] hover:bg-[#146976]/90 text-white font-black py-4 rounded-xl text-lg shadow-lg shadow-[#146976]/20 transition-all flex items-center justify-center gap-3">
                Place Order{" "}
                <span className="material-symbols-outlined"><ArrowForward/></span>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center border-t border-[#146976]/10 pt-4 text-xs text-[#146976]/60">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">
                  <VerifiedUser/>
                </span>
                <span className="font-bold uppercase tracking-widest">
                  Secure SSL
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">
                  <LocationCity/>
                </span>
                <span className="font-bold uppercase tracking-widest">
                  Verified Shop
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
