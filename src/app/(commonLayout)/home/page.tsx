import CategorySection from "@/app/components/modules/home/categorySection";
import FeaturedMedicines from "@/app/components/modules/home/featuredMedicine";
import HeroSection from "@/app/components/modules/home/heroSection";
import TrustFeatures from "@/app/components/modules/home/trustedFeatures";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CategorySection/>
      <FeaturedMedicines/>
      <TrustFeatures/>
    </div>
  )
}
