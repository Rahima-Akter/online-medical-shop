import WellnessIcon from "@mui/icons-material/LocalHospital";
import HeartMonitorIcon from "@mui/icons-material/Favorite";
import EmergencyIcon from "@mui/icons-material/MedicalServices";
import MedicationIcon from "@mui/icons-material/Medication";
import BabyCareIcon from "@mui/icons-material/BabyChangingStation";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

export default function CategorySection() {
  const categories = [
    {
      icon: <WellnessIcon fontSize="large" />,
      title: "Wellness",
      subtitle: "Vitamins & Supplements",
    },
    {
      icon: <HeartMonitorIcon fontSize="large" />,
      title: "Chronic Care",
      subtitle: "Long-term treatment",
    },
    {
      icon: <EmergencyIcon fontSize="large" />,
      title: "First Aid",
      subtitle: "Emergency supplies",
    },
    {
      icon: <MedicationIcon fontSize="large" />,
      title: "OTC Medicines",
      subtitle: "Cold & Pain Relief",
    },
    {
      icon: <BabyCareIcon fontSize="large" />,
      title: "Baby Care",
      subtitle: "Mother & baby health",
    },
  ];

  return (
    <section className="bg-[#121e20] py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">
              Shop by Category
            </h2>
            <p className="text-[#A1A1AA] mt-2 font-medium">
              Find everything you need for your health
            </p>
          </div>
          <Link href="/shop" className="text-[#EBBA92] font-bold text-sm flex items-center gap-2 hover:underline">
            View All Categories{" "}
            <span className="material-symbols-outlined text-sm">
              <ArrowForward />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group bg-[#1F2937] p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#146976]/5 cursor-pointer border border-[#146976]/5"
            >
              <div className="w-20 h-20 rounded-full bg-[#146976]/20 flex items-center justify-center mb-6 group-hover:bg-[#146976] text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-[#A1A1AA]">{cat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
