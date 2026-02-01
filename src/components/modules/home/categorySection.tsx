/* eslint-disable react/jsx-key */
import WellnessIcon from "@mui/icons-material/LocalHospital";
import HeartMonitorIcon from "@mui/icons-material/Favorite";
import EmergencyIcon from "@mui/icons-material/MedicalServices";
import MedicationIcon from "@mui/icons-material/Medication";
import { ArrowForward, MonitorHeart } from "@mui/icons-material";
import Link from "next/link";
import { getAllCategory } from "@/services/category.service";
import { Category } from "@/types/category";

export default async function CategorySection() {
  const categories = await getAllCategory();
  const category = categories.slice(0,5)

  const icons = [
    <WellnessIcon fontSize="large" />,
    <HeartMonitorIcon fontSize="large" />,
    <EmergencyIcon fontSize="large" />,
    <MedicationIcon fontSize="large" />,
    <MonitorHeart fontSize="large" />,
  ];
  // const randomIcon = icons[Math.floor(Math.random() * icons.length)];

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
          <Link
            href="/shop"
            className="text-[#EBBA92] font-bold text-sm flex items-center gap-2 hover:underline"
          >
            View All Categories{" "}
            <span className="material-symbols-outlined text-sm">
              <ArrowForward />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {category.map((category: Category, index: number) => (
            <div
              key={category.id}
              className="group bg-[#1F2937] p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#146976]/5 cursor-pointer border border-[#146976]/5"
            >
              <div className="w-20 h-20 rounded-full bg-[#146976]/20 flex items-center justify-center mb-6 group-hover:bg-[#146976] text-white transition-colors">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
