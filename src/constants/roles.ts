export type RoleValue =
  | "manager"
  | "dine in"
  | "waiter"
  | "takeaway"
  | "chef"
  | "cashier"
  | "staff"
  | "maintenance";

export type RoleOption = {
  value: RoleValue;
  label: string;
};

export const userRoles: RoleOption[] = [
  { value: "manager", label: "Manager" },
  { value: "dine in", label: "Dine In" },
  { value: "waiter", label: "Waiter" },
  { value: "takeaway", label: "Takeaway" },
  { value: "chef", label: "Chef" },
  { value: "cashier", label: "Cashier" },
  { value: "maintenance", label: "Maintenance" }, 
  { value: "staff", label: "staff" },
];
