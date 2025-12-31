export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  imageUrl: string;
  slug: string;
  amenities: string[];
  featured?: boolean;
}