import React from 'react';
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';
import MontreBrand from '../../assets/Watche/ChatGPT Image Aug 10, 2025, 10_35_04 PM.png';

const JustforyouWatch = () => {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: 'Hermès Kelly Red Watch 20mm',
    brand: 'Hermès',
    price: '4,000.00 AED',
    originalPrice: i % 3 === 0 ? '5,200.00 AED' : null,
    image: MontreBrand,
    info: i < 4 ? `MOQ: ${[100, 35, 80, 50][i]} Pieces` : `Sold: 120 Pieces`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    isFeatured: i % 4 === 0,
    isFastShipping: i % 3 === 0,
  }));

  return (
    <div className="bg-[#f8f5f2] min-h-[50vh] py-8">
      <div className="w-full px-4 sm:px-6 py-8">
        <div className="mb-12">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-6 px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 relative pb-2 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-16 after:h-0.5 after:bg-[#8b6b4a]">
              Just For You
            </h2>
            <button className="text-sm font-medium text-[#8b6b4a] hover:text-[#6a4f36] transition">
              View All →
            </button>
          </div>

          {/* Horizontal Scrolling Product Row */}
          <div className="w-full overflow-x-auto">
            <div
              className="flex gap-4 pb-6 px-2"
              style={{
                minWidth: `${products.length * 288}px`,
                marginLeft: "55px",
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  {/* Product Image */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    {/* Badges */}
                    {product.isFeatured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white text-[10px] tracking-wide font-semibold px-3 py-1 rounded-full shadow-md">
                        Featured
                      </div>
                    )}
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-red-500 transition">
                      <FaHeart size={14} />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <p className="text-sm text-[#8b6b4a] font-medium">
                      {product.brand}
                    </p>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mt-1">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mt-2">
                      <div className="flex text-[#FFD700]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < Math.floor(Number(product.rating)) ? 'fill-current' : 'fill-current opacity-30'}
                            size={12}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.rating})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-base font-bold text-[#1a1a1a]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                      <span>{product.info}</span>
                      {product.isFastShipping && (
                        <span className="flex items-center text-green-600">
                          <BsBoxSeam className="mr-1" size={12} />
                          Fast Shipping
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button className="mt-3 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md text-sm transition flex items-center justify-center gap-2">
                      <FaCartPlus size={14} /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustforyouWatch;