import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
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

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const { addToCart } = useCart();

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={category || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) {
                    searchParams.set('category', value);
                  } else {
                    searchParams.delete('category');
                  }
                }}
              >
                <option value="">All Categories</option>
                <option value="car">Cars</option>
                <option value="fire-extinguisher">Fire Extinguishers</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full mt-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  </Link>
                  <p className="mt-1 text-gray-600">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      <ShoppingCart className="h-5 w-5 mr-1" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;