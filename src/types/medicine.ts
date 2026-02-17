export interface Review {
  id: string;
  customerId: string;
  medicineId: string;
  rating: number;
  comment: string;
  createdAt: string;
  customer: {
    image: string;
    name: string;
  };
}

export interface Category {
  name: string;
}

export interface Medicine {
  id: string;
  name: string;
  price: number;
  stock: number;
  manufacturer: string;
  rx_required: boolean;
  active_ingrdients: string;
  dosage_instructions: string;
  side_effects: string[];
  serious_side_effects: string[];
  img: string;
  isActive: boolean;
  createdAt: string;
  sellerId: string;
  category: Category;
  categoryId: string;
  reviews: Review[];
}

export interface MedResponse {
  medicines: Medicine[];
  total: number;
  currentPage: number;
  limit: number;
  totalPages?: number;
}
