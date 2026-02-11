export type OrderItem = {
  medicineId: string;
  sellerId: string;
  quantity: number;
  price: number;
};


export type PlaceOrderPayload = {
  customerId: string;
  shippingAddress: string;
  phoneNumber: string;
  items: OrderItem[];
};
