import { Add, ArrowForward, Delete, Info, Remove } from "@mui/icons-material";

export default function MyCart() {
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
    <div style={{ backgroundColor: colors.sidebarBg, color: colors.lightCream }}>
      {/* Header */}
      <header
        style={{ backgroundColor: colors.deepCharcoal, borderBottom: `1px solid ${colors.lightCream}15` }}
        className="h-16 flex items-center justify-between px-8 sticky top-0 z-50 backdrop-blur-md"
      >
        <div className="flex items-center gap-4">
          <h2 style={{ color: colors.mutedCream }} className="text-sm font-medium uppercase tracking-widest">
            Dashboard / <span className="font-bold text-[#EBBA92]">Cart</span>
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer hover:text-accent-peach transition-colors">
          </div>
          <div className="flex items-center gap-3 border-l pl-6 cursor-pointer" style={{ borderColor: `${colors.lightCream}20` }}>
            <div
              style={{
                backgroundColor: colors.primary + "30",
                color: colors.primary,
                border: `1px solid ${colors.primary}50`,
              }}
              className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs"
            >
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="p-4 md:px-10 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <h1 style={{ color: colors.lightCream }} className="text-4xl font-black mb-2">
            Shopping Cart
          </h1>
          <p style={{ color: colors.mutedCream + "AA" }} className="text-base font-medium">
            You have <span style={{ color: colors.accentPeach }}>3 items</span> in your healthcare kit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {/* Left Column - Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* First Item */}
            <div
              style={{
                backgroundColor: colors.surfaceDark,
                border: `1px solid ${colors.lightCream}0D`,
              }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row gap-8 border-b transition-colors" style={{ borderColor: colors.lightCream + "0D" }}>
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl939L5wNqdSdH0lGQPuIaZy7H-nswuo-e88tdvlJWOOftzkCS608CD34UlmxIJUFcY5oIS97v5J_qv_1XaLJBpKalZWnGAR4r2_Xq2PI0YjYGX4Ak1bscMZ9o9l-oUNzQ6-2VD-sUNXyatWaMGBJZe7pcgGuW6SE8bd_JzgpcO73tGnNPzxGe59wQEIl2mljxt2tGuSR5c9WY0RGWqXQHF7tzDsMAHCKZTEYs1uQzouKXazoniSiUuIZPr0dCI3nm8owAL8IZxg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 style={{ color: colors.lightCream }} className="text-xl font-bold mb-1">
                        Paracetamol 500mg
                      </h3>
                      <p style={{ color: colors.mutedCream + "99" }} className="text-sm">
                        Standard Relief • Pack of 20 tablets
                      </p>
                    </div>
                    <p style={{ color: colors.accentPeach }} className="text-2xl font-black">$12.50</p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center rounded-xl overflow-hidden" style={{ backgroundColor: colors.surfaceDarkLighter, border: `1px solid ${colors.lightCream}1A` }}>
                      <button style={{ color: colors.mutedCream }} className="p-2.5 hover:bg-primary/20 transition-all">
                        <span className="material-symbols-outlined"><Remove /></span>
                      </button>
                      <span style={{ color: colors.lightCream }} className="w-12 text-center font-bold text-lg">2</span>
                      <button style={{ color: colors.mutedCream }} className="p-2.5 hover:bg-primary/20 transition-all">
                        <span className="material-symbols-outlined"><Add /></span>
                      </button>
                    </div>
                    <button style={{ color: "#f87171" }} className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg hover:bg-red-400/10 transition-all">
                      <span className="material-symbols-outlined"><Delete /></span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Item */}
            <div
              style={{
                backgroundColor: colors.surfaceDark,
                border: `1px solid ${colors.lightCream}0D`,
              }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row gap-8 border-b transition-colors" style={{ borderColor: colors.lightCream + "0D" }}>
                <div
                  style={{
                    backgroundColor: colors.surfaceDarkLighter,
                    border: `1px solid ${colors.lightCream}0D`,
                  }}
                  className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0"
                >
                  <img
                    alt="Vitamin C"
                    className="w-full h-full object-cover opacity-90 grayscale-[20%]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7TLIMWJtjd5lJvMga4FuyqZfSaHpNQPSFVS4QyCmhU9_d_Z1QYy74YTOtiiyaAVQOXa6rzdFoj63_xVLriO5WSIP3KS9GTCGSkBLhi8usRGHzvcTPvsgZfZYBsYUOJ8AEW6hjvq72XizykqwWQnvEpYTaarENEvylRSnT6iDwaW5luDJThGc-JghLaPrGcOXoSQ4086eMgtabWS8OL1QoVrt7cUmf1mtcJS72dTIRTDsxyJR2-LnWXXVji6Gp6LHUOE8BliL-iA"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 style={{ color: colors.lightCream }} className="text-xl font-bold mb-1">
                        Vitamin C Effervescent
                      </h3>
                      <p style={{ color: colors.mutedCream + "99" }} className="text-sm">
                        Immune Boost • 1000mg - 30 Tablets
                      </p>
                    </div>
                    <p style={{ color: colors.accentPeach }} className="text-2xl font-black">$24.99</p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center rounded-xl overflow-hidden" style={{ backgroundColor: colors.surfaceDarkLighter, border: `1px solid ${colors.lightCream}1A` }}>
                      <button style={{ color: colors.mutedCream }} className="p-2.5 hover:bg-primary/20 transition-all">
                        <span className="material-symbols-outlined"><Remove/></span>
                      </button>
                      <span style={{ color: colors.lightCream }} className="w-12 text-center font-bold text-lg">1</span>
                      <button style={{ color: colors.mutedCream }} className="p-2.5 hover:bg-primary/20 transition-all">
                        <span className="material-symbols-outlined"><Add/></span>
                      </button>
                    </div>
                    <button style={{ color: "#f87171" }} className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg hover:bg-red-400/10 transition-all">
                      <span className="material-symbols-outlined"><Delete/></span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div style={{ backgroundColor: colors.primary + "10" }} className="border border-primary/30 p-5 rounded-2xl flex gap-4 items-center">
              <div style={{ backgroundColor: colors.primary + "20" }} className="p-2 rounded-lg">
                <span className="material-symbols-outlined" style={{ color: colors.primary }}><Info/></span>
              </div>
              <p style={{ color: colors.mutedCream }} className="text-sm leading-relaxed">
                Some items in your cart require a <span style={{ color: colors.lightCream, fontWeight: 'bold' }}>valid prescription</span>. You can upload it during the next step.
              </p>
            </div>
          </div>

          {/* Right Column - Order Summary & Promo */}
          <div className="space-y-4">
            <div
              style={{ backgroundColor: colors.surfaceDark, border: `1px solid ${colors.lightCream}0D` }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <div style={{ backgroundColor: colors.surfaceDarkLighter, borderBottom: `1px solid ${colors.lightCream}0D` }} className="p-6">
                <h3 style={{ color: colors.lightCream }} className="text-xl font-bold">Order Summary</h3>
              </div>
              <div className="p-8 space-y-5">
                <div className="flex justify-between" style={{ color: colors.mutedCream + "80" }}>
                  <span className="text-sm">Subtotal</span>
                  <span style={{ color: colors.lightCream }} className="font-bold">$49.99</span>
                </div>
                <div className="flex justify-between" style={{ color: colors.mutedCream + "80" }}>
                  <span className="text-sm">Shipping Fee</span>
                  <span style={{ color: colors.lightCream }} className="font-bold">$5.00</span>
                </div>
                <div className="flex justify-between" style={{ color: colors.mutedCream + "80" }}>
                  <span className="text-sm">Estimated Tax</span>
                  <span style={{ color: colors.lightCream }} className="font-bold">$2.50</span>
                </div>
                <div className="pt-6 mt-2 border-t flex justify-between items-center" style={{ borderColor: colors.lightCream + "1A" }}>
                  <span style={{ color: colors.mutedCream }} className="text-lg font-medium">Total Amount</span>
                  <span style={{ color: colors.accentPeach }} className="text-3xl font-black">$57.49</span>
                </div>
                <div className="pt-6">
                  <button
                    style={{ backgroundColor: colors.primary, color: colors.lightCream }}
                    className="w-full py-3 rounded-xl font-bold text-lxsg hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    Proceed to Checkout
                    <span className="material-symbols-outlined"><ArrowForward/></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div style={{ backgroundColor: colors.surfaceDark, border: `1px solid ${colors.lightCream}0D` }} className="rounded-2xl shadow-xl px-4 py-6">
              <label style={{ color: colors.mutedCream }} className="block text-[10px] font-bold uppercase tracking-widest mb-3">Apply Promo Code</label>
              <div className="flex gap-2">
                <input
                  style={{ backgroundColor: colors.surfaceDarkLighter, color: colors.lightCream, borderColor: colors.lightCream + "1A" }}
                  className="flex-1 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary placeholder:text-[#FDFBF7]/30"
                  placeholder="Enter code"
                  type="text"
                />
                <button
                  style={{ borderColor: colors.primary + "50", color: colors.primary }}
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
