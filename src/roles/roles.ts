// export const UserRoles = {
//     customer: "CUSTOMER",
//     seller: "SELLER",
//     admin: "ADMIN"
// };

// export interface Roles {
//     customer: string;
//     seller: string;
//     admin: string;
// }


// Define UserRoles
export const UserRoles = {
  CUSTOMER: "CUSTOMER",
  SELLER: "SELLER",
  ADMIN: "ADMIN",
} as const;

// Create a type that represents the keys of UserRoles
export type UserRole = keyof typeof UserRoles; // 'CUSTOMER' | 'SELLER' | 'ADMIN'
