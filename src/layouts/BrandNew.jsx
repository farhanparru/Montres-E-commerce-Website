import React from 'react';
import { Helmet } from 'react-helmet';
import { FaShoppingBag, FaStar, FaShippingFast } from 'react-icons/fa';
import handBag from '../assets/HandBags/bag-hanging-from-furniture-item-indoors (1).jpg'

const BrandNew = () => {
  const newArrivals = [
    {
      id: 1,
      name: "Coach Mini Hand Bag",
      category: "Luxury Handbags",
      price: "1,250 AED",
      oldPrice: "1,750 AED",
      discount: "28% OFF",
      image: handBag,
      rating: 4.8,
      delivery: "Free UAE Delivery"
    },
    {
      id: 2,
      name: "Breitling Airvolt",
      category: "Swiss Watches",
      price: "18,999 AED",
      oldPrice: "22,500 AED",
      discount: "15% OFF",
      image:handBag,
      rating: 4.9,
      delivery: "Express Shipping"
    },
    {
      id: 3,
      name: "Bally Black Leather",
      category: "Men's Accessories",
      price: "2,450 AED",
      image: handBag,
      rating: 4.6,
      delivery: "Free UAE Delivery"
    },
    {
      id: 4,
      name: "Breitling Calisto 200M",
      category: "Diver Watches",
      price: "15,750 AED",
      oldPrice: "18,000 AED",
      discount: "12% OFF",
      image:handBag,
      rating: 4.7,
      delivery: "In Stock Dubai"
    },
    {
      id: 5,
      name: "Alfred Dunhill Business",
      category: "Leather Goods",
      price: "3,200 AED",
      image: handBag,
      rating: 4.5,
      delivery: "Free UAE Delivery"
    },
    {
      id: 6,
      name: "Alfred Dunhill RPM 8042",
      category: "Men's Watches",
      price: "9,999 AED",
      oldPrice: "12,000 AED",
      discount: "16% OFF",
      image: handBag,
      rating: 4.4,
      delivery: "Available in Store"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>New Arrivals | Luxury Brands in Dubai | Premium Collections UAE</title>
        <meta name="description" content="Discover our newest luxury arrivals in Dubai - Coach, Breitling, Bally, Alfred Dunhill. Authentic products with free UAE delivery and warranty." />
        <meta name="keywords" content="new luxury brands Dubai, Breitling watches UAE, Coach bags Dubai, Bally leather UAE, Alfred Dunhill Dubai" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* UAE Style Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block bg-gray-50 px-6 relative">
            <span className="text-amber-500">🇦🇪 </span>Brand New Arrivals
          </h2>
          <p className="mt-4 text-gray-600">Fresh from our Dubai collection</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* UAE Exclusive Badge */}
           
              
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.category} in Dubai`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-amber-400 mr-1" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                
                {/* Price Section */}
                <div className="mt-4">
                  <p className="text-xl font-bold text-gray-900">{item.price}</p>
                  {item.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">{item.oldPrice}</p>
                  )}
                </div>
                
                {/* UAE Specific Delivery */}
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <FaShippingFast className="mr-2 text-amber-500" />
                  <span>{item.delivery}</span>
                </div>
                
                {/* CTA Button */}
                <button className="mt-6 w-full bg-gray-900 hover:bg-amber-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                  <FaShoppingBag /> Get Price
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center">
            View All New Arrivals <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandNew;