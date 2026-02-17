import { UserRole } from "@/roles/roles";

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null;
  date_of_birth?: string;
  blood_type?: string;
  phone_number?: string;
  role?: UserRole;
  status?: string;
  default_shipping_address?: string;
}

export interface UserResponse {
  user: User[];
  total: number;
  currentPage: number;
  limit: number;
  totalPages: number;
}
