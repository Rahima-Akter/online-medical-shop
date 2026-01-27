export default function HeroSection() {
  return (
    <section className="relative bg-[#1E3F45] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#146976]/30 text-[#EBBA92] text-xs font-bold uppercase tracking-widest mb-6 border border-[#146976]/40">
            <span className="w-2 h-2 rounded-full bg-[#EBBA92] animate-pulse"></span>
            Verified Pharmacists 24/7
          </div>
          <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            Your Trusted <br/><span className="text-[#EBBA92]">Online Medicine</span> Shop
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
            Get authentic medicines and healthcare products delivered to your doorstep. Seamlessly manage prescriptions with our expert care team.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center justify-center px-8 h-14 rounded-lg bg-[#EBBA92] text-[#1E3F45] text-base font-black hover:brightness-110 transition-all shadow-lg shadow-[#EBBA92]/10">
              Shop Now
            </button>
            <button className="flex items-center justify-center px-8 h-14 rounded-lg bg-white/10 text-white text-base font-bold hover:bg-white/20 transition-all border border-white/10">
              Upload Prescription
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-lg">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#146976]/40 to-transparent relative overflow-hidden flex items-center justify-center border border-white/10">
            <img className="w-full h-full object-cover mix-blend-overlay opacity-60" data-alt="Professional pharmacist working in a clean modern pharmacy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-6O--kfrcrr4xe1rJgQ75MJoDUwoy7xVLYZL3baYUnDfyz2-ZakD2IkxooCRchqidDIc_ZRnVYnAa0nLSck4QN57ypaYmTr7g5VYqy-h_6dEfMjI51hOHso1N__EcAENetOk4pHW0u9fRa3uIs-FR0JodgmNPV-JgtCIren4vav7tNgkI6EpyLg2VthOoU2-IUlBRGOYIbN_C9Pmm12bnPL5yOpbw2ezt0WQbBUoTqDiMgMjacuTeMq-AdZmm0NNNC0594lUfw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3F45] via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EBBA92] flex items-center justify-center text-[#1E3F45]">
                  <span className="material-symbols-outlined">pill</span>
                </div>
                <div>
                  <p className="text-white font-bold">100% Authentic</p>
                  <p className="text-white/60 text-sm">Direct from top manufacturers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
