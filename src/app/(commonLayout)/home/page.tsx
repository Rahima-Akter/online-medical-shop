import CategorySection from "@/components/modules/home/categorySection";
import FeaturedMedicines from "@/components/modules/home/featuredMedicine";
import HeroSection from "@/components/modules/home/heroSection";
import TrustFeatures from "@/components/modules/home/trustedFeatures";


export default function Home() {
  return (
    <div className="bg-[#1E3F45]">
      <HeroSection/>
      <CategorySection/>
      <FeaturedMedicines/>
      <TrustFeatures/>
    </div>
  )
}
