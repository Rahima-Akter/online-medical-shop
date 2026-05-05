import {
  IconRoute,
  IconTruck,
  IconFileDescription,
  IconUserSearch,
  IconVaccine,
  IconLock,
  IconTemperature,
  IconSnowflake,
  IconBellRinging,
  IconMapPin,
  IconSignature,
} from "@tabler/icons-react";
import Image from "next/image";

const OrderTracking = () => {
  return (
    <>
      <div className="antialiased bg-[#0A1618] text-[#F5F2ED] selection:bg-[#13cfec] selection:text-white">
        <main className="min-h-screen flex flex-col items-center px-6 py-12">
          <div className="w-full max-w-200">
            {/* Header */}
            <header className="mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-8">
                <div className="w-12 h-12 rounded-full border border-[#13cfec]/30 flex items-center justify-center bg-[#13cfec]/5">
                  <IconRoute className="text-[#13cfec]" />
                </div>
              </div>
              <h1 className="font-display-xl text-[3rem] leading-[1.1] tracking-[-0.033em] font-black text-[#F5F2ED] mb-4">
                How Your Order Reaches You
              </h1>
              <p className="font-body-lg text-[1.125rem] leading-relaxed text-[#DDE4E6]/60 max-w-xl mx-auto">
                A transparent look at our secure pharmaceutical supply chain and
                delivery process.
              </p>
            </header>

            {/* Tracking Map */}
            <div className="mb-24 w-full">
              <div className="mb-8 text-center">
                <p className="font-label-caps text-[#13cfec] tracking-[0.2em] uppercase mb-2 text-[0.75rem]">
                  Live Monitoring
                </p>
                <h2 className="font-h2 text-[1.5rem] leading-tight font-bold text-[#DDE4E6]">
                  Experience Real-Time Traceability
                </h2>
              </div>

              <div className="w-full bg-[#131E20] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                {/* Map */}
                <div className="relative w-full aspect-21/9 bg-[#090f11] overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, #3c494c 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <svg
                    className="absolute inset-0 w-full h-full p-8"
                    viewBox="0 0 800 300"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <circle cx="100" cy="200" r="4" fill="#3C494C" />
                    <text
                      x="100"
                      y="225"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#3C494C"
                    >
                      Our Wearhouse
                    </text>

                    <circle
                      cx="700"
                      cy="100"
                      r="6"
                      fill="#13cfec"
                      className="pulse"
                    />
                    <text
                      x="700"
                      y="125"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#13cfec"
                      fontWeight="bold"
                    >
                      Your Location
                    </text>

                    <path
                      d="M 100 200 Q 400 50 700 100"
                      stroke="#13cfec"
                      strokeWidth="2"
                      fill="none"
                      className="map-line opacity-50"
                    />

                    <g transform="translate(450,95)">
                      <circle r="12" fill="rgba(19, 207, 236, 0.1)" />
                      <circle r="4" fill="#13cfec" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="step-item relative flex gap-8 group">
                <div className="step-line relative shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-[#13cfec] flex items-center justify-center bg-[#0A1618] z-10 relative">
                    <IconFileDescription className="text-[#13cfec]" />
                  </div>
                </div>

                <div className="grow pt-1 pb-12">
                  <div className="bg-[#131E20] border border-[#3C494C]/30 p-8 rounded-xl shadow-xl hover:border-[#13cfec]/50 transition-all group-hover:translate-x-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-label-caps text-[#EBBA92] tracking-widest text-[10px]">
                        STEP 01
                      </span>
                      <span className="text-[#13cfec]/40 font-bold">01</span>
                    </div>
                    <h2 className="font-h2 text-[1.5rem] text-[#F5F2ED] mb-3">
                      Order Placement &amp; Verification
                    </h2>
                    <p className="font-body-sm text-[#DDE4E6]/70 leading-relaxed">
                      Our process begins the moment you upload your
                      prescription. A certified pharmacist immediately reviews
                      the documentation for authenticity and cross-references it
                      with your medical profile to ensure safety.
                    </p>

                    <div className="mt-6 flex gap-4">
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconUserSearch size={14} />
                        Prescription Review
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconFileDescription size={14} />
                        Safety Protocol
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item relative flex gap-8 group">
                <div className="step-line relative shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-[#EBBA92] flex items-center justify-center bg-[#0A1618] z-10 relative">
                    <IconVaccine className="text-[#EBBA92]" />
                  </div>
                </div>

                <div className="grow pt-1 pb-12">
                  <div className="bg-[#131E20] border border-[#3C494C]/30 p-8 rounded-xl shadow-xl hover:border-[#EBBA92]/50 transition-all group-hover:translate-x-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-label-caps text-[#EBBA92] tracking-widest text-[10px]">
                        STEP 02
                      </span>
                      <span className="text-[#EBBA92]/40 font-bold">02</span>
                    </div>
                    <h2 className="font-h2 text-[1.5rem] text-[#F5F2ED] mb-3">
                      Quality Check &amp; Packaging
                    </h2>
                    <p className="font-body-sm text-[#DDE4E6]/70 leading-relaxed">
                      After verification, your medications undergo a
                      triple-check for accuracy. We then use tamper-evident,
                      secure medical packaging designed to maintain the
                      integrity of your supplies during transit.
                    </p>

                    <div className="mt-6 flex gap-4">
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconVaccine size={14} />
                        Precision Check
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconLock size={14} />
                        Tamper-Proof
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item relative flex gap-8 group">
                <div className="step-line relative shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-[#13cfec] flex items-center justify-center bg-[#0A1618] z-10 relative">
                    <IconTemperature className="text-[#13cfec]" />
                  </div>
                </div>

                <div className="grow pt-1 pb-12">
                  <div className="bg-[#131E20] border border-[#3C494C]/30 p-8 rounded-xl shadow-xl hover:border-[#13cfec]/50 transition-all group-hover:translate-x-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-label-caps text-[#EBBA92] tracking-widest text-[10px]">
                        STEP 03
                      </span>
                      <span className="text-[#13cfec]/40 font-bold">03</span>
                    </div>
                    <h2 className="font-h2 text-[1.5rem] text-[#F5F2ED] mb-3">
                      Dispatch &amp; Logistics
                    </h2>
                    <p className="font-body-sm text-[#DDE4E6]/70 leading-relaxed">
                      Sensitive medications are placed in specialized cold-chain
                      logistics containers. We hand off your order to our
                      specialized medical couriers who maintain strict
                      temperature controls throughout the journey.
                    </p>

                    <div className="mt-6 flex gap-4">
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconSnowflake size={14} />
                        Cold Chain
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconTruck size={14} />
                        Pharma Courier
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="step-item relative flex gap-8 group">
                <div className="step-line relative shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-[#EBBA92] flex items-center justify-center bg-[#0A1618] z-10 relative">
                    <IconBellRinging className="text-[#EBBA92]" />
                  </div>
                </div>

                <div className="grow pt-1">
                  <div className="bg-[#131E20] border border-[#3C494C]/30 p-8 rounded-xl shadow-xl hover:border-[#EBBA92]/50 transition-all group-hover:translate-x-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-label-caps text-[#EBBA92] tracking-widest text-[10px]">
                        STEP 04
                      </span>
                      <span className="text-[#EBBA92]/40 font-bold">04</span>
                    </div>
                    <h2 className="font-h2 text-[1.5rem] text-[#F5F2ED] mb-3">
                      Real-time Updates &amp; Delivery
                    </h2>
                    <p className="font-body-sm text-[#DDE4E6]/70 leading-relaxed">
                      You receive a real-time tracking link once the courier is
                      on the move. Final delivery is completed with a signature
                      required for sensitive items, ensuring your medicine
                      reaches the right hands.
                    </p>

                    <div className="mt-6 flex gap-4">
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconMapPin size={14} />
                        Live Tracking
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-label-caps text-[#DDE4E6]/40 uppercase">
                        <IconSignature size={14} />
                        Secure Receipt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-24 text-center">
              <p className="font-label-caps text-[10px] text-[#DDE4E6]/30 tracking-[0.2em] uppercase">
                Trusted Medical Logistics Partner
              </p>
              <div className="mt-6 opacity-20 flex justify-center grayscale pointer-events-none">
                <Image
                  width={100}
                  height={100}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7c20Sq7aRL9A-cyq_KB-okRf6oNJOqPtiYgS34RTcMg3E-nNwK9rYgDh7fdPHF70ceEr6-LoWTmgwWorcTjkqMe9DoN3_HA5_XZFHoqER1VxVOO3otorypD2d0B00zQqMEunCnVw0ZNIYqO8gg6kD7ul-F-usYQEg8G1yjD2BrrYEKUjnEfIW5Fj36wRcLYwgOyhr9axjt_LUXWWPEpoiKazjoO_TthwImvHzTyLZzjdSBvHmqsKs383RQcbdpMkLeft9u23Aw"
                  unoptimized
                  alt="Abstract medical logistics"
                  className="w-full max-w-100 h-32 object-cover rounded-2xl mix-blend-screen"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default OrderTracking;
