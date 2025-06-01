
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
}
