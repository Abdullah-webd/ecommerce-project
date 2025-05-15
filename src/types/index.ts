export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'car' | 'fire-extinguisher';
  imageUrl: string;
  stock: number;
  features: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}