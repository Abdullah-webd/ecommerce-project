import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Luxury Sedan',
    description: 'A premium luxury sedan with advanced features',
    price: 45000,
    category: 'car',
    imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    stock: 5,
    features: ['Leather seats', 'Navigation', 'Premium sound system']
  },
  {
    id: '2',
    name: 'Sports Car',
    description: 'High-performance sports car for enthusiasts',
    price: 75000,
    category: 'car',
    imageUrl: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg',
    stock: 3,
    features: ['V8 engine', 'Carbon fiber body', 'Track-ready']
  },
  {
    id: '3',
    name: 'Professional Fire Extinguisher',
    description: 'Heavy-duty fire extinguisher for commercial use',
    price: 199.99,
    category: 'fire-extinguisher',
    imageUrl: 'https://images.pexels.com/photos/6195278/pexels-photo-6195278.jpeg',
    stock: 50,
    features: ['ABC type', '10-pound capacity', 'Wall mount included']
  },
  {
    id: '4',
    name: 'Compact Fire Extinguisher',
    description: 'Portable fire extinguisher for home use',
    price: 49.99,
    category: 'fire-extinguisher',
    imageUrl: 'https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg',
    stock: 100,
    features: ['ABC type', '2-pound capacity', 'Kitchen-friendly']
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-xl text-gray-900">${product.price.toLocaleString()}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Features</h3>
            <ul className="mt-2 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value))))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {product.stock} items in stock
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;