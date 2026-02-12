export const UserRoles = {
  CUSTOMER: "CUSTOMER",
  SELLER: "SELLER",
  ADMIN: "ADMIN",
} as const;

export type UserRole = keyof typeof UserRoles;
