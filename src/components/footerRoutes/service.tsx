import {
  IconShieldCheck,
  IconStethoscope,
  IconTruckDelivery,
  IconHeadset,
  IconArrowUpRight,
} from "@tabler/icons-react";

const OurServices = () => {
  return (
    <div className="antialiased min-h-screen flex flex-col items-center py-16 px-6 bg-[#0e1416] text-[#dde4e6]">
      <main className="w-full max-w-200">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-[3rem] leading-[1.1] tracking-[-0.033em] font-black font-['Inter'] text-[#dde4e6] mb-4">
            Our Services
          </h1>
          <p className="text-[1.125rem] leading-relaxed font-normal font-['Inter'] text-[#859397] max-w-150">
            Experience high-security pharmaceutical management and expert-led
            digital healthcare designed for the modern era.
          </p>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-xl border border-[#ffffff]/5 bg-[#2b4c52]/20 p-8 hover:border-[#7de8ff]/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 rounded-lg bg-[#ffd09e]/10 border border-[#ffd09e]/20">
                <IconShieldCheck className="text-[#ffd09e]" size={40} />
              </div>
              <IconArrowUpRight className="text-[#859397] group-hover:text-[#7de8ff] transition-colors" />
            </div>
            <div>
              <h2 className="text-[1.5rem] leading-tight font-bold font-['Inter'] text-[#ffd09e] mb-2">
                Online Prescriptions
              </h2>
              <p className="text-[0.875rem] leading-normal font-normal font-['Inter'] text-[#859397]">
                Digital verification and management. Securely upload, track, and
                renew your clinical prescriptions through our encrypted data
                portal.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-xl border border-[#ffffff]/5 bg-[#2b4c52]/20 p-8 hover:border-[#7de8ff]/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 rounded-lg bg-[#ffd09e]/10 border border-[#ffd09e]/20">
                <IconStethoscope className="text-[#ffd09e]" size={40} />
              </div>
              <IconArrowUpRight className="text-[#859397] group-hover:text-[#7de8ff] transition-colors" />
            </div>
            <div>
              <h2 className="text-[1.5rem] leading-tight font-bold font-['Inter'] text-[#ffd09e] mb-2">
                Healthcare Consultations
              </h2>
              <p className="text-[0.875rem] leading-normal font-normal font-['Inter'] text-[#859397]">
                Connect with certified professionals. Instant access to
                specialists for diagnostic reviews and health advice via secure
                video links.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-xl border border-[#ffffff]/5 bg-[#2b4c52]/20 p-8 hover:border-[#7de8ff]/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 leading-lg bg-[#ffd09e]/10 border border-[#ffd09e]/20">
                <IconTruckDelivery className="text-[#ffd09e]" size={40} />
              </div>
              <IconArrowUpRight className="text-[#859397] group-hover:text-[#7de8ff] transition-colors" />
            </div>
            <div>
              <h2 className="text-[1.5rem] leading-tight font-bold font-['Inter'] text-[#ffd09e] mb-2">
                Rapid Medicine Delivery
              </h2>
              <p className="text-[0.875rem] leading-normal font-normal font-['Inter'] text-[#859397]">
                Same-day shipping for essentials. Our cold-chain logistics
                network ensures your medication arrives safely and punctually.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-xl border border-[#ffffff]/5 bg-[#2b4c52]/20 p-8 hover:border-[#7de8ff]/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 leading-lg bg-[#ffd09e]/10 border border-[#ffd09e]/20">
                <IconHeadset className="text-[#ffd09e]" size={40} />
              </div>
              <IconArrowUpRight className="text-[#859397] group-hover:text-[#7de8ff] transition-colors" />
            </div>
            <div>
              <h2 className="text-[1.5rem] leading-tight font-bold font-['Inter'] text-[#ffd09e] mb-2">
                24/7 Pharmacist Support
              </h2>
              <p className="text-[0.875rem] leading-normal font-normal font-['Inter'] text-[#859397]">
                Expertise whenever you need it. Direct access to clinical
                pharmacists for dosage guidance and interaction checks at any
                hour.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="mt-16 p-8 rounded-xl bg-[#2b4c52]/10 border border-[#7de8ff]/20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-[1.5rem] leading-tight font-bold font-['Inter'] text-[#dde4e6] mb-2">
              Ready to secure your health data?
            </h3>
            <p className="text-[0.875rem] leading-normal font-normal font-['Inter'] text-[#859397]">
              Join over 50,000 users who trust MediStore for their
              pharmaceutical precision and data integrity.
            </p>
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-[#13cfec] text-[#005461] text-[0.75rem] leading-none tracking-[0.05em] font-bold font-['Inter'] rounded-[0.125rem] hover:opacity-90 transition-opacity">
            GET STARTED NOW
          </button>
        </section>
      </main>
    </div>
  );
};

export default OurServices;
