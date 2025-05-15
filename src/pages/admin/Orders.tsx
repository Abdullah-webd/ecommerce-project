import React from 'react';
import AdminLayout from './Layout';
import { Order } from '../../types';

const mockOrders: Order[] = [
  {
    id: '1',
    userId: '1',
    items: [
      {
        product: {
          id: '1',
          name: 'Luxury Sedan',
          description: 'A premium luxury sedan with advanced features',
          price: 45000,
          category: 'car',
          imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
          stock: 5,
          features: ['Leather seats', 'Navigation', 'Premium sound system']
        },
        quantity: 1
      }
    ],
    total: 45000,
    status: 'pending',
    createdAt: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    userId: '2',
    items: [
      {
        product: {
          id: '3',
          name: 'Professional Fire Extinguisher',
          description: 'Heavy-duty fire extinguisher for commercial use',
          price: 199.99,
          category: 'fire-extinguisher',
          imageUrl: 'https://images.pexels.com/photos/6195278/pexels-photo-6195278.jpeg',
          stock: 50,
          features: ['ABC type', '10-pound capacity', 'Wall mount included']
        },
        quantity: 2
      }
    ],
    total: 399.98,
    status: 'processing',
    createdAt: '2024-03-14T15:30:00Z'
  }
];

const Orders = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Orders</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    User {order.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.items.map((item) => (
                      <div key={item.product.id}>
                        {item.quantity}x {item.product.name}
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${order.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Orders;