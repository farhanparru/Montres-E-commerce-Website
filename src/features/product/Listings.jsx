import React from 'react';
import { Helmet } from 'react-helmet';
import {  FaStar, FaShippingFast, FaShieldAlt, FaGift } from 'react-icons/fa';
import barndWathes from '../../assets/beautiful-rendering-steel-object.jpg'
import Bags from '../../assets/beautiful-elegance-luxury-fashion-green-handbag.jpg'
import Jwellry from '../../assets/view-luxurious-golden-ring-felt-jewelry-display.jpg'
import  Clocks from  '../../assets/pd109-pdobj02045a-image.jpg'
import cufflinks from '../../assets/tailoring-items-arrangement-still-life.jpg'
import LuxuryHomeDecor from '../../assets/modern-styled-entryway.jpg'
const categories = [
  {
    name: "Luxury Watches",
    image:barndWathes,
    price: "From 1,000 AED",
    pieces: "20+ Brands Available",
    description: "Premium Swiss & international watch brands including limited editions"
  },
  {
    name: "Designer Bags & Wallets",
    image:Bags,
    price: "From 800 AED",
    pieces: "Genuine Leather Collections",
    description: "Exclusive leather goods from top European designers"
  },
  {
    name: "Fine Jewelry",
    image: Jwellry,
    price: "From 1,500 AED",
    pieces: "18K Gold & Diamond Pieces",
    description: "Elegant jewelry sets perfect for UAE occasions"
  },
  {
    name: "Antique Clocks",
    image: Clocks,
    price: "From 2,500 AED",
    pieces: "Handcrafted Timepieces",
    description: "Luxury clocks for your home or office in Dubai"
  },
  {
    name: "Executive Cufflinks",
    image: cufflinks,
    price: "From 500 AED",
    pieces: "Premium Metal & Enamel",
    description: "Sophisticated accessories for the modern professional"
  },
  {
    name: "Luxury Home Decor",
    image: LuxuryHomeDecor,
    price: "From 1,200 AED",
    pieces: "Imported Collections",
    description: "Elevate your living space with our premium home accessories"
  }
];

const Listings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Optimization */}
      <Helmet>
        <title>Dubai Luxury Store | Premium Watches, Jewelry & Gifts in UAE</title>
        <meta name="description" content="Dubai's premier destination for luxury watches, jewelry, leather goods & premium gifts. Authentic products with free UAE delivery. Established in 1985." />
        <meta name="keywords" content="Dubai luxury watches, UAE jewelry, designer bags Dubai, gold cufflinks UAE, antique clocks Dubai, premium gifts UAE, luxury shopping Dubai" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta property="og:title" content="Dubai Luxury Store | Premium Collections Since 1985" />
        <meta property="og:description" content="Exclusive luxury watches, jewelry & premium gifts in Dubai. Trusted since 1985 with free UAE delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dubailuxurystore.ae" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="Dubai Luxury Store" />
        <link rel="canonical" href="https://www.dubailuxurystore.ae/collections" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Dubai Luxury Store",
              "description": "Premium luxury watches, jewelry and gifts in Dubai since 1985",
              "url": "https://www.dubailuxurystore.ae",
              "telephone": "+97142233445",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sheikh Zayed Road",
                "addressLocality": "Dubai",
                "addressRegion": "DU",
                "postalCode": "12345",
                "addressCountry": "AE"
              },
              "openingHours": "Mo-Fr 10:00-22:00, Sa-Su 11:00-23:00",
              "priceRange": "$$$"
            }
          `}
        </script>
      </Helmet>

    

      {/* Hero Banner with UAE imagery */}
      <div className="relative bg-gray-800 h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
   
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-wider">
              LUXURY COLLECTIONS IN <span className="text-amber-400">DUBAI</span>
            </h2>
            <p className="text-white text-lg md:text-xl font-light max-w-2xl mx-auto">
              Premium watches, jewelry & gifts in UAE since 1985
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badges - UAE specific */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <FaShippingFast className="text-amber-600 text-2xl mb-1" />
              <span className="text-xs md:text-sm font-medium">Free UAE Delivery</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <FaShieldAlt className="text-amber-600 text-2xl mb-1" />
              <span className="text-xs md:text-sm font-medium">Authentic Products</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <FaStar className="text-amber-600 text-2xl mb-1" />
              <span className="text-xs md:text-sm font-medium">Since 1985</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <FaGift className="text-amber-600 text-2xl mb-1" />
              <span className="text-xs md:text-sm font-medium">Gift Wrapping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3">
            OUR <span className="text-amber-600">PREMIUM</span> COLLECTIONS
          </h2>
          <div className="w-20 h-0.5 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive range of luxury products available across the UAE. 
            Each piece is carefully selected to meet the highest standards of quality and elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.name} in Dubai`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{category.description}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif font-medium text-gray-800 mb-1">{category.name}</h3>
                <p className="text-amber-600 font-semibold mb-1">{category.price}</p>
                <p className="text-sm text-gray-500 mb-3">{category.pieces}</p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300 text-sm font-medium">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

 

  
    </div>
  );
};

export default Listings;