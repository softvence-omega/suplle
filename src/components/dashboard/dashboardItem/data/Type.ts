export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  category: string;
  available: boolean;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
}