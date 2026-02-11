export interface CartItem {
  medicineId: string;
  sellerId: string;
  quantity: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export interface CartResponse {
  msg: string;
  medicineId: string;
  data: CartItem[];
}
