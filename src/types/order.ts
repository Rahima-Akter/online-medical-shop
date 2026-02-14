export type OrderStatus =
  | "PLACED"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export type OrderItem = {
  id: string;
  orderId: string;
  medicineId: string;
  sellerId: string;
  quantity: number;
  price: number;
  medicine: {
    name: string;
    category: {
      name: string;
    };
  };
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
  customer: {
    name: string;
  };
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
