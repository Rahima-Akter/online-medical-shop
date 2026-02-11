import { getSession } from "@/services/user.service";
import { User } from "@/types/userTypes";
import CheckOutPage from "./checkout";
import { getAllCartItems } from "@/services/cart.service";
import { CartResponse } from "@/types/cart";

export default async function CheckoutServer() {
  const session = await getSession();
  if (!session || !session.user) {
    return null;
  }

  const currentUser: User = session.user;

  const cartItems = await getAllCartItems();

  const cartItemsWithSellerId = await Promise.all(
    cartItems.map(async (item: CartResponse) => {
      const medRes = await fetch(
        `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/medicine/${item.medicineId}`,
      );
      const medicine = await medRes.json();
      return { ...item, sellerId: medicine.sellerId };
    }),
  );

  return (
    <CheckOutPage currentUser={currentUser} cartItems={cartItemsWithSellerId} />
  );
}
