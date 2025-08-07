import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Head from "next/head";
import Watch1 from "../../assets/Watche/rendering-smart-home-device.jpg";
import Watch2 from '../../assets/Watche/closeup-shot-hand-watch-with-bstrap-reflective-surface.jpg';
import watch3 from '../../assets/Watche/rendering-smart-home-device (1).jpg';
import bag1 from '../../assets/HandBags/bag-hanging-from-furniture-item-indoors (1).jpg'
import bag2  from '../../assets/HandBags/black-bag-with-scarf.jpg'
import bag3 from '../../assets/HandBags/luxury-woman-handbag.jpg'

import Jewelry1 from '../../assets/Jewelry/luxury-jewellery-display.jpg'
import Jewelry2 from '../../assets/Jewelry/side-view-pair-silver-diamond-earrings-with-emerald-black-wall-black.jpg'
import Jewelry3 from '../../assets/Jewelry/view-luxurious-golden-ring-felt-jewelry-display (1).jpg'


import Clocks1 from '../../assets/Clocks/37431.jpg'
import Clocks2 from '../../assets/Clocks/8992.jpg'
import Clocks3 from '../../assets/Clocks/ec937fc8-0b61-4418-8021-c70b4f447e96.jpg'


import Cufflinks1 from '../../assets/Cufflinks/18966314.jpg'
import  Cufflinks2 from '../../assets/Cufflinks/closeup-photo-stud-white-shirt-with-red-tie.jpg'
import  Cufflinks3 from '../../assets/Cufflinks/high-angle-thimble-silk-arrangement.jpg'


import HomeAccessories1 from '../../assets/HomeAccessories/close-up-arrangement-modern-vases (1).jpg'
import  HomeAccessories2 from '../../assets/HomeAccessories/close-up-arrangement-modern-vases.jpg'
import HomeAccessories3 from '../../assets/HomeAccessories/white-modern-vases-arrangement.jpg'

const data = [
  {
    title: "Luxury Watches",
    items: [
      { price: "8,500 AED", quantity: "Limited Edition", image: Watch1, brand: "Rolex" },
      { price: "12,000 AED", quantity: "New Collection", image: Watch2, brand: "Patek Philippe" },
      { price: "6,200 AED", quantity: "Classic Series", image: watch3, brand: "Audemars Piguet" },
    ],
  },
  {
    title: "Bags, Wallets & Pens",
    items: [
      { price: "22,000 AED", quantity: "Limited Stock", image:bag1, brand: "Louis Vuitton" },
      { price: "18,500 AED", quantity: "Exclusive", image:bag2, brand: "Gucci" },
      { price: "9,800 AED", quantity: "New Arrival", image: bag3, brand: "Chanel" },
    ],
  },
  {
    title: "Jewelry",
    items: [
      { price: "45,000 AED", quantity: "1.5ct Diamond", image: Jewelry1, brand: "Cartier" },
      { price: "32,000 AED", quantity: "Emerald Collection", image:Jewelry2, brand: "Bvlgari" },
      { price: "15,500 AED", quantity: "Pearl Set", image: Jewelry3, brand: "Tiffany & Co." },
    ],
  },

    {
    title: "Clocks & Pocket Watch",
    items: [
      { price: "22,000 AED", quantity: "Limited Stock", image: Clocks1, brand: "Louis Vuitton" },
      { price: "18,500 AED", quantity: "Exclusive", image:Clocks2, brand: "Gucci" },
      { price: "9,800 AED", quantity: "New Arrival", image:Clocks3, brand: "Chanel" },
    ],
  },

  {
    title: "Personal Accessories & Cufflinks",
    items: [
      { price: "22,000 AED", quantity: "Limited Stock", image: Cufflinks1, brand: "Louis Vuitton" },
      { price: "18,500 AED", quantity: "Exclusive", image: Cufflinks2, brand: "Gucci" },
      { price: "9,800 AED", quantity: "New Arrival", image: Cufflinks3, brand: "Chanel" },
    ],
  },

  {
    title: "Home Accessories",
    items: [
      { price: "22,000 AED", quantity: "Limited Stock", image: HomeAccessories1, brand: "Louis Vuitton" },
      { price: "18,500 AED", quantity: "Exclusive", image:HomeAccessories2, brand: "Gucci" },
      { price: "9,800 AED", quantity: "New Arrival", image: HomeAccessories3, brand: "Chanel" },
    ],
  },
];

const Listings = () => {
  return (
    <>
      <Head>
        <title>Luxury Goods Dubai | Premium Watches, Jewelry & Accessories in UAE</title>
        <meta name="description" content="Discover authentic luxury watches, jewelry, bags and home accessories in Dubai. Free shipping across UAE with certification of authenticity for all premium items." />
        <meta name="keywords" content="luxury watches Dubai, designer bags UAE, diamond jewelry, premium accessories, Dubai luxury shopping" />
        <meta property="og:title" content="Luxury Goods Dubai | Premium Collections in UAE" />
        <meta property="og:description" content="Authentic luxury items with free UAE delivery and certification" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourluxurystore.ae" />
        <meta property="og:image" content="/images/luxury-store-social.jpg" />
        <link rel="canonical" href="https://www.yourluxurystore.ae/collections" />
      </Head>

      <div className="bg-[#f8f5f2] min-h-screen p-6">
   

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          {data.map((section, index) => (
            <div key={index} className="mb-20">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a]">{section.title}</h2>
                <button className="text-sm font-medium text-[#8b6b4a] hover:text-[#6a4f36] transition">
                  View All →
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <div key={i} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div className="relative w-full h-60 overflow-hidden">
                      <img
                        src={typeof item.image === "string" ? item.image : item.image?.src}
                        alt={`${item.brand} ${section.title}`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-[#8b6b4a] text-white text-xs font-medium px-2 py-1 rounded">
                        New
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-[#8b6b4a] font-medium">{item.brand}</p>
                      <h3 className="text-lg font-semibold text-[#1a1a1a] mt-1">{section.title.split(' ')[0]} Collection</h3>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-bold text-[#1a1a1a]">{item.price}</span>
                        <span className="text-sm text-gray-500">{item.quantity}</span>
                      </div>
                      <button className="mt-6 w-full  bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg hover:bg-[#3a3a3a] transition">
                       view collection
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Value Propositions */}
        <section className="bg-[#1a1a1a] py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#e6d6b8]">
              The Ultimate Luxury Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: (
                    <div className="h-24 w-24 mx-auto">
                      <DotLottieReact
                        src="https://lottie.host/e4487b38-a08b-465b-801b-13204c74e176/8mhnMgEha5.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ),
                  title: "Fast UAE Delivery",
                  description: "Free shipping across all Emirates with next-day delivery in Dubai & Abu Dhabi",
                },
                {
                  icon: (
                    <div className="h-24 w-24 mx-auto">
                      <DotLottieReact
                        src="https://lottie.host/fad7a522-5a88-47ee-a7b4-af5d78666035/4VzMrQWzN9.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ),
                  title: "100% Authentic",
                  description: "Official certificates of authenticity with money-back guarantee",
                },
                {
                  icon: (
                    <div className="h-24 w-24 mx-auto">
                      <DotLottieReact
                        src="https://lottie.host/47990b1f-1f7b-4847-9285-ac4b2e95be70/fpsyUDMhrz.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ),
                  title: "Premium Selection",
                  description: "Curated collection of only the finest luxury items in the UAE",
                },
                {
                  icon: (
                    <div className="h-24 w-24 mx-auto">
                      <DotLottieReact
                        src="https://lottie.host/a6f0fba9-8d61-4cf6-9a61-6df458fba694/BMgV8XKQnr.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ),
                  title: "VIP Services",
                  description: "Personal shopping assistance & gift wrapping in Dubai showroom",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#2a2a2a] rounded-xl hover:bg-[#3a3a3a] transition duration-300"
                >
                  {feature.icon}
                  <h3 className="text-xl font-medium mb-3 text-white">{feature.title}</h3>
                  <p className="text-[#e6d6b8]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

     
      </div>
    </>
  );
};

export default Listings;