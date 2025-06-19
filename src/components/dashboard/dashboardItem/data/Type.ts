export interface MenuCategory {
  _id: string;
  restaurant: string;
  categoryName: string;
  description: string;
  image: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RestaurantOwnerUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isDeleted: boolean;
}

export interface RestaurantOwner {
  _id: string;
  user: RestaurantOwnerUser;
  businessName: string;
  businessEmail: string;
  referralCode: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  restaurant: string;
}

export interface Restaurant {
  _id: string;
  restaurantName: string;
  restaurantAddress: string;
  phone: string;
  logo: string;
  tagline: string;
  coverPhoto: string;
  images: string[];
  description: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  menus: string[];
  owner: RestaurantOwner;
}

export interface FullMenuItem {
  _id: string;
  itemName: string;
  description: string;
  price: number;
  size: string;
  image: string;
  availability: string;
  isDeleted: boolean;
  like: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
  category: MenuCategory;
  restaurant: Restaurant;
}

// export interface MenuCategory {
//   id: string;
//   name: string;
// }

export interface OrderMenu {
  _id: string; // This is the _id of the menu-in-order object
  menu: {
    _id: string;
    itemName: string;
    price: number;
    size: string;
  };
  quantity: number;
}

// For the payment method
export interface PaymentMethod {
  type: string;
  cardNumber: string | null;
}

// For the whole order
export interface Order {
  _id: string;
  orderId: string;
  orderType: string;
  table: string;
  person: number;
  status: string;
  menus: OrderMenu[];
  total: number;
  paymentMethod: PaymentMethod;
  restaurant: string;
  specialRequest: string;
  customerName: string | null;
  customerPhone: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  createdAtFormatted: string;
  updatedAtFormatted: string;
}
