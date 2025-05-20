export interface Design {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  status: 'available' | 'comingSoon' | 'unavailable';
  category?: string;
  price?: number;
}