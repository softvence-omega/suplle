// user.ts
export type UserStatus = "Staff" | "Owner" | "Manager" | "Dine In" | "Waiter";
export type UserActivity = "Active" | "Inactive" | "Takeaway";
export interface User {
  id: string;
  vendor: string;
  role: UserStatus;
  time: string;
  name?: string;
  mail?: string;
  status?: UserActivity;
  image?: string;
  paymentStatus?: string;
  totalAmount?: string;
  paymentMethod?: string;
  icons?: string[];
}
