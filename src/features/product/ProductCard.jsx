import React from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 ease-in-out">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded z-10">
          {product.badge}
        </span>
      )}
      
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Actions Container */}
        <div className="absolute inset-0 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {/* Quick Add to Cart Button (Top Right) */}
          <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-200">
            <FiShoppingCart className="h-5 w-5" />
          </button>
          
          {/* Buy Now Button (Centered) */}
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-200 font-medium">
            Buy Now
          </button>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.round(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-900">
            {product.price} AED
          </p>
          {product.mrp && (
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 line-through">
                {product.mrp} AED
              </p>
              <p className="text-sm font-medium text-green-600">
                {product.discount}% OFF
              </p>
            </div>
          )}
        </div>
        
        {/* Delivery Info */}
        {product.fastDelivery && (
          <p className="mt-1 text-xs text-green-600">Fast Delivery Available</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;