import {
  IconBadge,
  IconLayoutDashboard,
  IconPackage,
  IconBox,
  IconTruck,
  IconWallet,
  IconCircleCheck,
  IconArrowRight,
} from "@tabler/icons-react";

const ReturnPolicy = () => {
  return (
    <div className="antialiased bg-[#0e1416] text-[#dde4e6] selection:bg-[#13cfec]/20 selection:text-[#005461]">
      <main className="max-w-200 mx-auto px-6 lg:py-10 md:py-16">
        {/* Hero */}
        <section className="space-y-6 mb-16">
          <span className="inline-block bg-[#7de8ff]/20 text-[#7de8ff] px-3 py-1 rounded-full text-[0.75rem] leading-none tracking-[0.05em] font-bold uppercase">
            Policy Documentation
          </span>

          <h1 className="text-[3rem] leading-[1.1] tracking-[-0.033em] font-black text-[#dde4e6]">
            Return Policy
          </h1>

          <p className="text-[1.125rem] leading-relaxed text-[#859397] max-w-2xl">
            Our clinical precision extends to our logistics. We ensure a
            transparent, secure process for returning pharmaceutical products
            while maintaining strict health and safety standards.
          </p>
        </section>

        {/* Timeline */}
        <section className="relative space-y-16">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          {/* Step 1 */}
          <div className="relative pl-16 space-y-6">
            <div className="absolute left-0 w-12 h-12 bg-[#161d1e] border border-white/10 rounded-lg flex items-center justify-center">
              <IconBadge size={20} color="#7de8ff" />
            </div>

            <div className="text-[0.75rem] tracking-[0.05em] font-bold text-[#7de8ff] uppercase">
              Step 01
            </div>

            <h2 className="text-[1.5rem] leading-tight font-bold text-[#dde4e6]">
              Check Eligibility
            </h2>

            <div className="bg-[#161d1e] p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-[0.875rem] leading-normal text-[#bbc9cd]">
                For safety reasons, pharmaceutical items must be strictly
                **unopened** and in their original, tamper-evident packaging.
                Cold-chain products are subject to specific verification of
                temperature maintenance.
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#859397]">
                  <IconCircleCheck size={18} color="#7de8ff" />
                  Original seal intact
                </li>
                <li className="flex items-center gap-2 text-[#859397]">
                  <IconCircleCheck size={18} color="#7de8ff" />
                  Within 30 days
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-16 space-y-6">
            <div className="absolute left-0 w-12 h-12 bg-[#161d1e] border border-white/10 rounded-lg flex items-center justify-center">
              <IconLayoutDashboard size={20} color="#7de8ff" />
            </div>

            <div className="text-[0.75rem] tracking-[0.05em] font-bold text-[#7de8ff] uppercase">
              Step 02
            </div>

            <h2 className="text-[1.5rem] leading-tight font-bold text-[#dde4e6]">
              Initiate Return
            </h2>

            <p className="text-[0.875rem] leading-normal text-[#bbc9cd]">
              Access your MediStore secure dashboard and navigate to your order
              history. Select the specific item and provide a brief clinical
              reason for the return. Our system will generate a unique Return
              Authorization (RA) number instantly.
            </p>

            <button className="flex items-center gap-2 bg-[#161d1e] border border-white/10 px-6 py-3 rounded-xl text-[0.75rem] font-bold tracking-[0.05em] uppercase text-[#dde4e6]">
              Go to Dashboard
              <IconArrowRight size={16} />
            </button>
          </div>

          {/* Step 3 */}
          <div className="relative pl-16 space-y-6">
            <div className="absolute left-0 w-12 h-12 bg-[#161d1e] border border-white/10 rounded-lg flex items-center justify-center">
              <IconPackage size={20} color="#7de8ff" />
            </div>

            <div className="text-[0.75rem] tracking-[0.05em] font-bold text-[#7de8ff] uppercase">
              Step 03
            </div>

            <h2 className="text-[1.5rem] font-bold text-[#dde4e6]">
              Pack & Ship
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-[#161d1e] border border-white/5 rounded-xl space-y-2">
                <IconBox size={18} color="#7de8ff" />
                <div className="text-[#dde4e6] font-medium">Secure Transit</div>
                <div className="text-[#859397] text-[0.875rem]">
                  Ensure items are cushioned and the RA number is clearly
                  visible on the exterior of the shipping container.
                </div>
              </div>

              <div className="p-5 bg-[#161d1e] border border-white/5 rounded-xl space-y-2">
                <IconTruck size={18} color="#7de8ff" />
                <div className="text-[#dde4e6] font-medium">
                  Trackable Courier
                </div>
                <div className="text-[#859397] text-[0.875rem]">
                  We recommend using a trackable shipping method to ensure the
                  chain of custody remains verified.
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative pl-16 space-y-6">
            <div className="absolute left-0 w-12 h-12 bg-[#161d1e] border border-white/10 rounded-lg flex items-center justify-center">
              <IconWallet size={20} color="#7de8ff" />
            </div>

            <div className="text-[0.75rem] tracking-[0.05em] font-bold text-[#7de8ff] uppercase">
              Step 04
            </div>

            <h2 className="text-[1.5rem] font-bold text-[#dde4e6]">
              Refund Process
            </h2>

            <div className="bg-[#0a1618]/10 p-6 rounded-sm border border-[#7de8ff]/20 flex md:flex-row flex-col gap-10">
              <div>
                <p className="text-[0.875rem] text-[#bbc9cd]">
                  Upon arrival at our distribution center, items undergo a
                  clinical quality inspection. This process typically takes 3-5
                  business days.
                </p>
                <p className="text-[0.875rem] text-[#bbc9cd] font-bold">
                  Approved refunds will be credited back to your original
                  payment method within 7-10 business days.
                </p>
              </div>
              <div className="bg-[#2f3638]/50 p-4 rounded-lg flex items-center gap-4 min-w-45]">
                <div className="text-3xl font-black text-[#7de8ff]">72h</div>
                <div className="text-sm tracking-[0.05em] font-bold text-outline leading-tight uppercase text-gray-400">
                  Average
                  <br />
                  Inspection
                  <br />
                  Window
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReturnPolicy;
