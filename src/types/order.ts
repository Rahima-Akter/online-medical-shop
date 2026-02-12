export type OrderStatus = "PLACED" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export type OrderItem = {
  id: string;
  orderId: string;
  medicineId: string;
  sellerId: string;
  quantity: number;
  price: number;
};

export type PlaceOrderPayload = {
  id: string;
  customerId: string;
  status: OrderStatus;
  shippingAddress: string;
  totalPrice: number;
  deliveryCharge: number;
  createdAt: string;
  items: OrderItem[];
};

export interface GetOrdersResponse {
  data: PlaceOrderPayload[];
  total: number;
  limit: number;
  currentPage: number;
  totalPages: number;
}


export type CreateOrderItem = {
  medicineId: string;
  sellerId: string;
  quantity: number;
  price: number;
};

export type CreateOrderPayload = {
  customerId: string;
  shippingAddress: string;
  phoneNumber: string;
  items: CreateOrderItem[];
};
