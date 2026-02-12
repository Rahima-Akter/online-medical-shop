import { getAllCartItems } from "@/services/cart.service";
import { getSession } from "@/services/user.service";
import { CartItem } from "@/types/cart";
import { User } from "@/types/userTypes";
import CheckOutPage from "./checkout";

export default async function CheckoutServer() {
  const session = await getSession();
  if (!session || !session.user) return null;

  const currentUser: User = session.user;

  const rawCartItems = await getAllCartItems();

  const cartItems: CartItem[] = await Promise.all(
    rawCartItems.map(async (item: CartItem) => {
      if (!item.sellerId) {
        const medRes = await fetch(
          `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/medicine/${item.medicineId}`,
        );
        const medicineResp = await medRes.json();
        const medicine = medicineResp.data;
        if (!medicine.sellerId) {
          console.error("Seller ID missing for medicine:", item.medicineId);
        }
        return {
          ...item,
          sellerId: medicine.sellerId,
        } as CartItem;
      }
      return item as CartItem;
    }),
  );

  return <CheckOutPage currentUser={currentUser} cartItems={cartItems} />;
}
