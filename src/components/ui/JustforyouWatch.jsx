import React from 'react';
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';
import MontreBrand from '../../assets/Watche/pixelcut-export-2-1.png'

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'Hermès Kelly Red Watch 20mm',
  price: '4,000.00 AED',
  originalPrice: i % 3 === 0 ? '5,200.00 AED' : null, // Some products have original price
  image: MontreBrand,
  info: i < 4 ? `MOQ: ${[100, 35, 80, 50][i]} Pieces` : `Sold: 120 Pieces`,
  rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3-5
  isFeatured: i % 4 === 0, // Some products are featured
  isFastShipping: i % 3 === 0, // Some products have fast shipping
}));

const JustforyouWatch = () => {
  return (
    <div className="bg-[#f8f8f8] py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header with Arabic-inspired design */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0 relative after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-[#d4af37]">
            Just For You
          </h2>
          <div className="flex space-x-2">
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">
              Watches
            </button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">
              Jewelry
            </button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">
              Accessories
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden relative"
            >
              {/* Product Badges */}
              {product.isFeatured && (
                <div className="absolute top-3 left-3 bg-[#d4af37] text-white px-3 py-1 text-xs font-bold rounded-full z-10">
                  Featured
                </div>
              )}
              
              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-red-500 transition z-10">
                <FaHeart />
              </button>

              {/* Product Image */}
              <div className="relative pt-[100%] bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-contain p-4"
                />
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.floor(Number(product.rating)) ? 'fill-current' : 'fill-current opacity-30'}
                        size={14}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mb-3">
                  <span className="text-xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{product.info}</span>
                  {product.isFastShipping && (
                    <span className="flex items-center text-green-600">
                      <BsBoxSeam className="mr-1" />
                      Fast Shipping
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full flex items-center justify-center py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition">
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-white transition">
            View More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default JustforyouWatch;