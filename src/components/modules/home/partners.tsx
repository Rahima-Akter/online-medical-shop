import {
  IconShieldCheck,
  IconVaccine,
  IconMedicalCross,
  IconEmergencyBed,
  IconFlask,
  IconMedicalCrossCircle,
} from "@tabler/icons-react";

const CertifiedPartners = () => {
  return (
    <section className="bg-[#121e20] py-20 border-t border-[#146976]/10">
      <div className="max-w-360 mx-auto px-4 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#F5F2ED] text-3xl md:text-4xl font-black tracking-tight mb-4 font-display">
            Certified Partner Pharmacies
          </h2>

          <p className="text-[#F5F2ED]/60 max-w-2xl mx-auto font-medium">
            We collaborate with the nation&apos;s most trusted pharmaceutical providers to ensure you receive genuine medications with every order.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {/* GlobalPharma */}
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100 cursor-pointer">
            <IconMedicalCrossCircle className="text-5xl text-[#51a9b7]" />
            <span className="text-xs font-bold uppercase tracking-tighter text-[#F5F2ED]/70">
              GlobalPharma
            </span>
          </div>

          {/* SecureMeds */}
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100 cursor-pointer">
            <IconShieldCheck className="text-5xl text-[#51a9b7]" />
            <span className="text-xs font-bold uppercase tracking-tighter text-[#F5F2ED]/70">
              SecureMeds
            </span>
          </div>

          {/* VitalCure */}
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100 cursor-pointer">
            <IconVaccine className="text-5xl text-[#51a9b7]" />
            <span className="text-xs font-bold uppercase tracking-tighter text-[#F5F2ED]/70">
              VitalCure
            </span>
          </div>

          {/* ApexHealth */}
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100 cursor-pointer">
            <IconMedicalCross className="text-5xl text-[#51a9b7]" />
            <span className="text-xs font-bold uppercase tracking-tighter text-[#F5F2ED]/70">
              ApexHealth
            </span>
          </div>

          {/* PrimeCare */}
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100 cursor-pointer">
            <IconEmergencyBed className="text-5xl text-[#51a9b7]" />
            <span className="text-xs font-bold uppercase tracking-tighter text-[#F5F2ED]/70">
              PrimeCare
            </span>
          </div>

          {/* BioLabs */}
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100 cursor-pointer">
            <IconFlask className="text-5xl text-[#51a9b7]" />
            <span className="text-xs font-bold uppercase tracking-tighter text-[#F5F2ED]/70">
              BioLabs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedPartners;