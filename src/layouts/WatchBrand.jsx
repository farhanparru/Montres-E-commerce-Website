import React from 'react'
import Head from 'next/head'
import { FaShoppingBag, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import WatchBrandIm from '../assets/Watche/rendering-smart-home-device.jpg'

const WatchBrand = () => {
  // Sample watch data - replace with your actual data source
  const brandWatches = [
    {
      id: 1,
      name: "Sello Yacht Timer",
      price: 1000.00,
      oldPrice: 1200.00,
      currency: "AED",
      image: WatchBrandIm,
      rating: 4.5,
      reviewCount: 128,
      brand: "Sello",
      features: ["Water resistant", "Chronograph", "Stainless steel"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty"
    },
    {
      id: 2,
      name: "Sello Regatta Yacht Timer",
      price: 950.00,
      oldPrice: 1100.00,
      currency: "AED",
      image: WatchBrandIm,
      rating: 4.2,
      reviewCount: 86,
      brand: "Sello",
      features: ["Luminous hands", "120m water resistant", "Sapphire crystal"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty"
    },
    {
      id: 3,
      name: "Sello Men's Presage",
      price: 850.00,
      oldPrice: 1000.00,
      currency: "AED",
      image: WatchBrandIm,
      rating: 4.7,
      reviewCount: 215,
      brand: "Sello",
      features: ["Automatic movement", "Leather strap", "Date display"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty"
    },
    {
      id: 4,
      name: "Sello Heritage Chrono",
      price: 1200.00,
      oldPrice: 1500.00,
      currency: "AED",
      image:WatchBrandIm,
      rating: 4.8,
      reviewCount: 342,
      brand: "Sello",
      features: ["Limited edition", "Automatic", "42mm case"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty"
    },
    {
      id: 5,
      name: "Sello Diver Pro",
      price: 1100.00,
      oldPrice: 1300.00,
      currency: "AED",
      image: WatchBrandIm,
      rating: 4.6,
      reviewCount: 178,
      brand: "Sello",
      features: ["300m water resistant", "Rotating bezel", "Rubber strap"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty"
    },
    {
      id: 6,
      name: "Sello Classic Automatic",
      price: 900.00,
      oldPrice: 1050.00,
      currency: "AED",
      image:WatchBrandIm  ,
      rating: 4.4,
      reviewCount: 92,
      brand: "Sello",
      features: ["40mm case", "Exhibition caseback", "20ATM"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <>
      <Head>
        <title>Premium Sello Watches in UAE | Authentic Brand Watches Dubai</title>
        <meta name="description" content="Discover authentic Sello brand watches in UAE. Explore luxury timepieces with official warranty. Get best prices in Dubai & across Emirates." />
        <meta name="keywords" content="Sello brand watches, authentic watches UAE, luxury watches Dubai, original timepieces, men's watches UAE" />
      </Head>

      <div className="font-sans p-4 max-w-7xl mx-auto bg-white text-gray-800">
        {/* Brand Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Sello Brand Watches</h1>
          <p className="text-lg text-gray-600">Authentic luxury timepieces with official UAE warranty</p>
        </div>

        {/* Brand Watches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandWatches.map((watch) => (
            <div key={watch.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {/* Watch Image */}
              <div className="relative h-64 bg-gray-50">
                <img 
                  src={watch.image} 
                  alt={`${watch.brand} ${watch.name}`}
                  className="absolute h-full w-full object-contain p-4"
                  loading="lazy"
                />
                {watch.oldPrice && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    SAVE {Math.round((1 - watch.price/watch.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Watch Details */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{watch.name}</h3>
                    <p className="text-gray-600 text-sm">{watch.brand}</p>
                  </div>
                  <div className="flex items-center bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded">
                    <div className="flex mr-1">
                      {renderStars(watch.rating)}
                    </div>
                    {watch.rating}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span className="text-xl font-bold text-blue-900">{watch.price.toFixed(2)} {watch.currency}</span>
                  {watch.oldPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">{watch.oldPrice.toFixed(2)} {watch.currency}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="text-sm text-gray-600 mb-4">
                  {watch.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-1">
                      <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Warranty & Delivery */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-green-600 mb-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {watch.warranty}
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                    </svg>
                    {watch.delivery}
                  </div>
                </div>

                {/* Get Price Button */}
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <FaShoppingBag className="mr-2" />
                  Get Price
                </button>

                {/* Reviews */}
                <div className="mt-3 text-center text-sm text-gray-500">
                  {watch.reviewCount} verified reviews
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Authenticity Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">Why Choose Sello Brand Watches?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">100% Authentic</h3>
              <p className="text-gray-600">Direct from manufacturer with original packaging and papers</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">UAE Warranty</h3>
              <p className="text-gray-600">Official 2-year warranty valid across all Emirates</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">We'll match any lower price from authorized dealers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchBrand