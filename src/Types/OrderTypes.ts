export interface PaymentMethod {
  type: string;
  cardNumber?: string | null;
}

export interface MenuRef {
  _id: string;
  itemName: string;
  price: number;
  size: string;
}

export interface OrderMenuItem {
  menu: MenuRef;
  quantity: number;
  _id: string;
}

export interface Restaurant {
  _id: string;
  owner: string;
  restaurantName: string;
  menus: string[];
  status: string;
  restaurantAddress: string;
  phone: string;
  logo: string;
  tagline: string;
  coverPhoto: string;
  images: string[];
  description: string;
  isDeleted: boolean;
  createdAt: string; // or Date
  updatedAt: string; // or Date
  __v: number;
}

export interface Order {
  paymentMethod: PaymentMethod;
  _id: string;
  restaurant: Restaurant;
  table: string;
  floor: string;
  orderId: string;
  person: number;
  menus: OrderMenuItem[];
  customerName: string;
  customerPhone: string;
  orderType: string;
  specialRequest: string;
  total: number;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
