export const dynamic = "force-dynamic";
import CategorySection from "@/components/modules/home/categorySection";
import FeaturedMedicines from "@/components/modules/home/featuredMedicine";
import HeroSection from "@/components/modules/home/heroSection";
import TrustFeatures from "@/components/modules/home/trustedFeatures";
import { getSession } from "@/services/user.service";

export default async function Home() {
  const session = await getSession();
  // console.log("from page------------------------------------------")
  // console.log(session);
  return (
    <div className="bg-[#1E3F45]">
      <HeroSection />
      <CategorySection />
      <FeaturedMedicines />
      <TrustFeatures />
    </div>
  );
}
