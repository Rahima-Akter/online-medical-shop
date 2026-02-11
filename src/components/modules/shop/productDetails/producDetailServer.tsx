import { medcineById } from "@/services/medicine.service";
import ProductDetails from "./productDetails";
import { Medicine } from "@/types/medicine";
import { getSession } from "@/services/user.service";

interface Id {
  id: string;
}

export default async function ProductDetailsServer({ id }: Id) {
  const details = await medcineById(id);
  const medDetails: Medicine = details.data;
  const session = await getSession();
  if(!session) return null;
  const currentUserId = session?.user?.id;

  return <ProductDetails medDetails={medDetails} currentUserId={currentUserId} />;
}
