
import { Link } from 'react-router-dom';
import { Car, Siren as Fire,Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Premium Cars & Fire Safety
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your one-stop destination for luxury vehicles and fire safety equipment.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/products?category=car"
              className="group relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
                  alt="Luxury Cars"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <Car className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">
                    Luxury Cars
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">
                  Explore our collection of premium vehicles
                </p>
              </div>
            </Link>

            <Link
              to="/products?category=fire-extinguisher"
              className="group relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.pexels.com/photos/6195278/pexels-photo-6195278.jpeg"
                  alt="Fire Extinguishers"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <Fire className="h-6 w-6 text-red-600" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">
                    Fire Extinguishers
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">
                  Professional-grade fire safety equipment
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Premium Selection
              </h3>
              <p className="mt-2 text-gray-600">
                Curated collection of luxury vehicles
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                <Fire className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Safety First
              </h3>
              <p className="mt-2 text-gray-600">
                Top-rated fire safety equipment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Expert Support
              </h3>
              <p className="mt-2 text-gray-600">
                24/7 customer service available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;