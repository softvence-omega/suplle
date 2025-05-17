// user.ts
export type UserStatus = "Staff" | "Owner";

export interface User {
  id: string;
  vendor: string;
  role: UserStatus;
  time: string;
  name?: string;
  mail?: string;
  status?: string;
  image?: string;
  paymentStatus?: string;
  totalAmount?: string;
  paymentMethod?: string;
  icons?: string[];
}
