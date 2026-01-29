import CategorySection from "@/components/modules/home/categorySection";
import FeaturedMedicines from "@/components/modules/home/featuredMedicine";
import HeroSection from "@/components/modules/home/heroSection";
import TrustFeatures from "@/components/modules/home/trustedFeatures";


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
