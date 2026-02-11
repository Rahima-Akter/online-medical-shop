export interface UserTypes {
  admin: string;
  customer: string;
  seller: string;
}

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
  role?: string;
  default_shipping_address?: string;
}

