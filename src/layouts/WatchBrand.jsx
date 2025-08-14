import React from "react";
import Head from "next/head";
import {
  FaShoppingBag,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import WatchBrandIm from "../assets/Watche/rendering-smart-home-device.jpg";

const WatchBrand = () => {
  const brandWatches = [
    {
      id: 1,
      name: "Sello Yacht Timer",
      price: 1000.0,
      oldPrice: 1200.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.5,
      reviewCount: 128,
      brand: "Sello",
      features: ["Water resistant", "Chronograph", "Stainless steel"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: true,
    },
    {
      id: 2,
      name: "Sello Regatta Yacht Timer",
      price: 950.0,
      oldPrice: 1100.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.2,
      reviewCount: 86,
      brand: "Sello",
      features: ["Luminous hands", "120m water resistant", "Sapphire crystal"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: false,
    },
    {
      id: 3,
      name: "Sello Men's Presage",
      price: 850.0,
      oldPrice: 1000.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.7,
      reviewCount: 215,
      brand: "Sello",
      features: ["Automatic movement", "Leather strap", "Date display"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: true,
    },
    {
      id: 4,
      name: "Sello Heritage Chrono",
      price: 1200.0,
      oldPrice: 1500.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.8,
      reviewCount: 342,
      brand: "Sello",
      features: ["Limited edition", "Automatic", "42mm case"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: false,
      isBestseller: true,
    },
    {
      id: 5,
      name: "Sello Diver Pro",
      price: 1100.0,
      oldPrice: 1300.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.6,
      reviewCount: 178,
      brand: "Sello",
      features: ["300m water resistant", "Rotating bezel", "Rubber strap"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: false,
    },
    {
      id: 6,
      name: "Sello Classic Automatic",
      price: 900.0,
      oldPrice: 1050.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.4,
      reviewCount: 92,
      brand: "Sello",
      features: ["40mm case", "Exhibition caseback", "20ATM"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: true,
      isLimited: true,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <FaStar key={i} className="text-yellow-400 inline-block" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-400 inline-block" />
        );
      } else {
        stars.push(
          <FaRegStar key={i} className="text-yellow-400 inline-block" />
        );
      }
    }
    return stars;
  };

  const Badge = ({ type, children }) => {
    const baseClasses = "text-xs font-bold px-2 py-1 rounded-md shadow-sm";

    const typeClasses = {
      sale: "bg-red-600 text-white",
      discount: "bg-blue-600 text-white",
      new: "bg-green-600 text-white",
      bestseller: "bg-purple-600 text-white",
      limited: "bg-yellow-500 text-gray-900",
    };

    return (
      <div
        className={`${baseClasses} ${typeClasses[type]} flex items-center justify-center inline-block mr-2`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="bg-[#f8f5f2] min-h-[50vh] py-8">
      <div className="w-full px-4 sm:px-6 py-8">
        <div className="mb-12">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-6 px-2">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 relative pb-2 
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-16 after:h-0.5 after:bg-[#8b6b4a]"
            >
              Sello Watches
            </h2>
            <button className="text-sm font-medium text-[#8b6b4a] hover:text-[#6a4f36] transition">
              View All →
            </button>
          </div>

          {/* Scrollable Row */}
          <div className="w-full overflow-x-auto">
            <div
              className="flex gap-4 pb-6 px-2"
              style={{
                minWidth: `${brandWatches.length * 288}px`,
                marginLeft: "55px",
              }}
            >
              {brandWatches.map((item) => (
                <div
                  key={item.id}
                  className="group flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.name}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-col space-y-1">
                      {item.isNew && <Badge type="new">New Arrival</Badge>}
                      {item.isBestseller && (
                        <Badge type="bestseller">Bestseller</Badge>
                      )}
                      {item.isLimited && <Badge type="limited">Limited</Badge>}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <p className="text-sm text-[#8b6b4a] font-medium">
                      {item.brand}
                    </p>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mt-1">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-2 flex items-center space-x-3">
                      <span className="text-lg font-bold text-[#1a1a1a]">
                        {item.currency} {item.price.toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <span className="text-sm line-through text-gray-400">
                          {item.currency} {item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Rating and Reviews */}
                    <div className="mt-2 flex items-center space-x-2">
                      <div>{renderStars(item.rating)}</div>
                      <span className="text-xs text-gray-600">
                        ({item.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="mt-2 text-xs text-gray-700 list-disc list-inside">
                      {item.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    {/* Delivery and Warranty */}
                    <p className="mt-2 text-xs text-gray-600">{item.delivery}</p>
                    <p className="text-xs text-gray-600">{item.warranty}</p>

                    <button className="mt-3 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md text-sm transition">
                      View Collection
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

export default WatchBrand;
