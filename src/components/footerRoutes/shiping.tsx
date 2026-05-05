import {
  IconClock,
  IconWorld,
  IconLocationSearch,
  IconCreditCard,
} from "@tabler/icons-react";
import Image from "next/image";

const ShipingFAQ = () => {
  return (
    <div className="antialiased bg-[#0A1618] text-[#dde4e6]">
      <main className="max-w-200 mx-auto px-6 md:py-16 lg:py-10">
        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4"></div>
          <h1 className="font-display-xl text-[3rem] leading-[1.1] tracking-[-0.033em] font-black text-[#dde4e6] mb-6">
            Shipping <span className="text-[#13cfec]">FAQs.</span>
          </h1>
          <p className="font-body-lg text-[1.125rem] leading-relaxed text-[#bbc9cd] max-w-xl">
            Our logistics network is optimized for clinical precision. Find
            answers regarding delivery timelines, global coverage, and real-time
            pharmaceutical tracking.
          </p>
        </header>

        {/* FAQ Items */}
        <section className="space-y-6">
          {/* Item 1 */}
          <div className="bg-[#1a2122] border border-white/5 p-6 rounded-lg group hover:border-[#7de8ff]/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#7de8ff]/10 rounded-lg shrink-0">
                <IconClock className="text-[#7de8ff]" />
              </div>
              <div>
                <h3 className="font-h2 text-[1.5rem] leading-tight font-bold text-[#dde4e6] mb-2">
                  How long does delivery take?
                </h3>
                <p className="font-body-sm text-[0.875rem] leading-normal text-[#bbc9cd]">
                  Local shipments are prioritized through our clinical supply
                  chain, typically arriving within{" "}
                  <span className="text-[#7de8ff]">1-3 business days</span>.
                  Emergency courier options are available for specialized
                  medical supplies upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-[#1a2122] border border-white/5 p-6 rounded-lg group hover:border-[#7de8ff]/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#7de8ff]/10 rounded-lg shrink-0">
                <IconWorld className="text-[#7de8ff]" />
              </div>
              <div>
                <h3 className="font-h2 text-[1.5rem] leading-tight font-bold text-[#dde4e6] mb-2">
                  Do you ship internationally?
                </h3>
                <p className="font-body-sm text-[0.875rem] leading-normal text-[#bbc9cd]">
                  Yes. We currently provide secure pharmaceutical distribution
                  to <span className="text-[#7de8ff]">over 50 countries</span>.
                  Every international shipment is compliant with local health
                  authority regulations and climate-controlled requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-[#1a2122] border border-white/5 p-6 rounded-lg group hover:border-[#7de8ff]/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#7de8ff]/10 rounded-lg shrink-0">
                <IconLocationSearch className="text-[#7de8ff]" />
              </div>
              <div>
                <h3 className="font-h2 text-[1.5rem] leading-tight font-bold text-[#dde4e6] mb-2">
                  Can I track my order in real-time?
                </h3>
                <p className="font-body-sm text-[0.875rem] leading-normal text-[#bbc9cd]">
                  Yes. Every shipment is equipped with an encrypted tracking ID
                  accessible via the{" "}
                  <span className="text-[#7de8ff] underline cursor-pointer">
                    tracking portal
                  </span>
                  . This provides live updates on transit location and estimated
                  arrival milestones.
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-[#1a2122] border border-white/5 p-6 rounded-lg group hover:border-[#7de8ff]/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#7de8ff]/10 rounded-lg shrink-0">
                <IconCreditCard className="text-[#7de8ff]" />
              </div>
              <div>
                <h3 className="font-h2 text-[1.5rem] leading-tight font-bold text-[#dde4e6] mb-2">
                  What are the shipping costs?
                </h3>
                <p className="font-body-sm text-[0.875rem] leading-normal text-[#bbc9cd]">
                  Standard clinical shipping is{" "}
                  <span className="text-[#7de8ff]">
                    free for all orders over $50
                  </span>
                  . For smaller orders, a flat-rate logistics fee is calculated
                  based on the weight and temperature sensitivity of the
                  contents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="mt-16 border-t border-white/5 pt-6">
          <div className="bg-[#7de8ff]/5 border border-[#7de8ff]/20 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-h2 text-[1.5rem] text-[#dde4e6]">
                Still need assistance?
              </h4>
              <p className="font-body-sm text-[0.875rem] text-[#bbc9cd]">
                Our logistics support team is available 24/7 for urgent delivery
                inquiries.
              </p>
            </div>
            <button className="bg-[#0e1416] border border-white/10 hover:bg-white/5 text-[#dde4e6] px-6 py-3 rounded-[0.125rem] font-label-caps text-[0.75rem] leading-none tracking-[0.05em] font-bold transition-all">
              CONTACT SUPPORT
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pb-12 text-center">
          <div className="mb-8 overflow-hidden rounded-xl relative border border-white/5 aspect-21/9">
            <Image
              unoptimized
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3KrRh4oqtFYzP80naS7OhQX9WbDrQ6mWctehTsM3Mep7s1l1RjrX8bmnXPZwDlzMOiY_IqYmAvM0nDEc6ayeeA2brwO9y6rL0K6nNmqARn0XY3JPe1TdHND9OT5b_Y8Aj-ImgVgSq4RjDOVOy_PaC07dMpAchKArCSBw71zKy-KnoIbUZ4hQyJJKuZEJrBU8zo41EF1_FC2ps5pRpo8LoM3GfwW0A5WL2jmj0mc01hs1EIpye2ifg29-8yKPMaxQwO1QTOohYTQ"
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ShipingFAQ;
