import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Head from "next/head";
import Watch1 from "../../assets/Watche/rendering-smart-home-device (1).jpg";
import Watch2 from "../../assets/Watche/stylish-golden-watch-white-surface.jpg";
import watch3 from "../../assets/Watche/rendering-smart-home-device.jpg";
import watch4 from "../../assets/Watche/closeup-shot-hand-watch-with-bstrap-reflective-surface.jpg";
import watch5 from "../../assets/Watche/beautiful-rendering-steel-object (1).jpg";
import watch6 from "../../assets/Watche/elegant-watch-with-silver-golden-chain-isolated.jpg";

import bag1 from "../../assets/HandBags/bag-hanging-from-furniture-item-indoors (1).jpg";
import bag2 from "../../assets/HandBags/black-bag-with-scarf.jpg";
import bag3 from "../../assets/HandBags/luxury-woman-handbag.jpg";
import bag4 from "../../assets/HandBags/color-purple-elegance-woman-luxury.jpg";

import Jewelry1 from "../../assets/Jewelry/luxury-jewellery-display.jpg";
import Jewelry2 from "../../assets/Jewelry/side-view-pair-silver-diamond-earrings-with-emerald-black-wall-black.jpg";
import Jewelry3 from "../../assets/Jewelry/view-luxurious-golden-ring-felt-jewelry-display (1).jpg";
import Jewelry4 from "../../assets/Jewelry/view-luxurious-golden-ring-felt-jewelry-display (1).jpg";

import Clocks1 from "../../assets/Clocks/37431.jpg";
import Clocks2 from "../../assets/Clocks/8992.jpg";
import Clocks3 from "../../assets/Clocks/ec937fc8-0b61-4418-8021-c70b4f447e96.jpg";
import Clocks4 from "../../assets/Clocks/8992.jpg";

import Cufflinks1 from "../../assets/Cufflinks/18966314.jpg";
import Cufflinks2 from "../../assets/Cufflinks/closeup-photo-stud-white-shirt-with-red-tie.jpg";
import Cufflinks3 from "../../assets/Cufflinks/high-angle-thimble-silk-arrangement.jpg";
import Cufflinks4 from "../../assets/Cufflinks/high-angle-thimble-silk-arrangement.jpg";

import HomeAccessories1 from "../../assets/HomeAccessories/close-up-arrangement-modern-vases (1).jpg";
import HomeAccessories2 from "../../assets/HomeAccessories/close-up-arrangement-modern-vases.jpg";
import HomeAccessories3 from "../../assets/HomeAccessories/white-modern-vases-arrangement.jpg";
import HomeAccessories4 from "../../assets/HomeAccessories/close-up-arrangement-modern-vases.jpg";

const data = [
  {
    title: "Luxury Watches",
    items: [
      {
        price: "8,500 AED",
        quantity: "Limited Edition",
        image: Watch1,
        brand: "Rolex",
      },
      {
        price: "12,000 AED",
        quantity: "New Collection",
        image: Watch2,
        brand: "Patek Philippe",
      },
      {
        price: "6,200 AED",
        quantity: "Classic Series",
        image: watch3,
        brand: "Audemars Piguet",
      },
      {
        price: "15,800 AED",
        quantity: "Masterpiece",
        image: watch4,
        brand: "Vacheron Constantin",
      },
      {
        price: "15,800 AED",
        quantity: "Masterpiece",
        image: watch5,
        brand: "Vacheron Constantin",
      },
      {
        price: "15,800 AED",
        quantity: "Masterpiece",
        image: watch6,
        brand: "Vacheron Constantin",
      },
    ],
  },
  {
    title: "Bags, Wallets & Pens",
    items: [
      {
        price: "22,000 AED",
        quantity: "Limited Stock",
        image: bag1,
        brand: "Louis Vuitton",
      },
      {
        price: "18,500 AED",
        quantity: "Exclusive",
        image: bag2,
        brand: "Gucci",
      },
      {
        price: "9,800 AED",
        quantity: "New Arrival",
        image: bag3,
        brand: "Chanel",
      },
      {
        price: "32,000 AED",
        quantity: "Signature",
        image: bag4,
        brand: "Hermès",
      },

      {
        price: "32,000 AED",
        quantity: "Signature",
        image: bag4,
        brand: "Hermès",
      },

      {
        price: "32,000 AED",
        quantity: "Signature",
        image: bag4,
        brand: "Hermès",
      },
    ],
  },
  {
    title: "Jewelry",
    items: [
      {
        price: "45,000 AED",
        quantity: "1.5ct Diamond",
        image: Jewelry1,
        brand: "Cartier",
      },
      {
        price: "32,000 AED",
        quantity: "Emerald Collection",
        image: Jewelry2,
        brand: "Bvlgari",
      },
      {
        price: "15,500 AED",
        quantity: "Pearl Set",
        image: Jewelry3,
        brand: "Tiffany & Co.",
      },
      {
        price: "28,000 AED",
        quantity: "Platinum",
        image: Jewelry4,
        brand: "Van Cleef & Arpels",
      },
      {
        price: "28,000 AED",
        quantity: "Platinum",
        image: Jewelry4,
        brand: "Van Cleef & Arpels",
      },
      {
        price: "28,000 AED",
        quantity: "Platinum",
        image: Jewelry4,
        brand: "Van Cleef & Arpels",
      },
    ],
  },
  {
    title: "Clocks & Pocket Watch",
    items: [
      {
        price: "22,000 AED",
        quantity: "Limited Stock",
        image: Clocks1,
        brand: "Louis Vuitton",
      },
      {
        price: "18,500 AED",
        quantity: "Exclusive",
        image: Clocks2,
        brand: "Gucci",
      },
      {
        price: "9,800 AED",
        quantity: "New Arrival",
        image: Clocks3,
        brand: "Chanel",
      },
      {
        price: "45,000 AED",
        quantity: "Grandfather",
        image: Clocks4,
        brand: "Jaeger-LeCoultre",
      },
      {
        price: "45,000 AED",
        quantity: "Grandfather",
        image: Clocks4,
        brand: "Jaeger-LeCoultre",
      },
      {
        price: "45,000 AED",
        quantity: "Grandfather",
        image: Clocks4,
        brand: "Jaeger-LeCoultre",
      },
    ],
  },
  {
    title: "Personal Accessories & Cufflinks",
    items: [
      {
        price: "5,200 AED",
        quantity: "Limited Stock",
        image: Cufflinks1,
        brand: "Montblanc",
      },
      {
        price: "4,800 AED",
        quantity: "Exclusive",
        image: Cufflinks2,
        brand: "Dunhill",
      },
      {
        price: "3,900 AED",
        quantity: "New Arrival",
        image: Cufflinks3,
        brand: "Tateossian",
      },
      {
        price: "6,500 AED",
        quantity: "Platinum Set",
        image: Cufflinks4,
        brand: "Deakin & Francis",
      },
      {
        price: "6,500 AED",
        quantity: "Platinum Set",
        image: Cufflinks4,
        brand: "Deakin & Francis",
      },
      {
        price: "6,500 AED",
        quantity: "Platinum Set",
        image: Cufflinks4,
        brand: "Deakin & Francis",
      },
    ],
  },
  {
    title: "Home Accessories",
    items: [
      {
        price: "8,200 AED",
        quantity: "Limited Stock",
        image: HomeAccessories1,
        brand: "Baccarat",
      },
      {
        price: "12,500 AED",
        quantity: "Exclusive",
        image: HomeAccessories2,
        brand: "Lalique",
      },
      {
        price: "7,800 AED",
        quantity: "New Arrival",
        image: HomeAccessories3,
        brand: "Saint-Louis",
      },
      {
        price: "15,000 AED",
        quantity: "Crystal Decor",
        image: HomeAccessories4,
        brand: "Swarovski",
      },

      {
        price: "15,000 AED",
        quantity: "Crystal Decor",
        image: HomeAccessories4,
        brand: "Swarovski",
      },
      {
        price: "15,000 AED",
        quantity: "Crystal Decor",
        image: HomeAccessories4,
        brand: "Swarovski",
      },
    ],
  },
];

const Listings = () => {
  return (
    <>
      <Head>
        <title>
          Luxury Goods Dubai | Premium Watches, Jewelry & Accessories in UAE
        </title>
        <meta
          name="description"
          content="Discover authentic luxury watches, jewelry, bags and home accessories in Dubai. Free shipping across UAE with certification of authenticity for all premium items."
        />
        <meta
          name="keywords"
          content="luxury watches Dubai, designer bags UAE, diamond jewelry, premium accessories, Dubai luxury shopping"
        />
        <meta
          property="og:title"
          content="Luxury Goods Dubai | Premium Collections in UAE"
        />
        <meta
          property="og:description"
          content="Authentic luxury items with free UAE delivery and certification"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourluxurystore.ae" />
        <meta property="og:image" content="/images/luxury-store-social.jpg" />
        <link
          rel="canonical"
          href="https://www.yourluxurystore.ae/collections"
        />
      </Head>

      <div className="bg-[#f8f5f2] min-h-screen">
        {/* Product Grid */}
        <div className="w-full px-4 sm:px-6 py-8">
          {data.map((section, index) => (
            <div key={index} className="mb-12">
              <div className="flex justify-between items-center mb-6 px-2">
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 relative pb-2 
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-16 after:h-0.5 after:bg-[#8b6b4a]"
                >
                  {section.title}
                </h2>
                <button className="text-sm font-medium text-[#8b6b4a] hover:text-[#6a4f36] transition">
                  View All →
                </button>
              </div>

              <div className="w-full overflow-x-auto">
                <div
                  className="flex gap-4 pb-6 px-2"
                  style={{
                    minWidth: `${section.items.length * 288}px`,
                    marginLeft: "55px",
                  }}
                >
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="group flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                    >
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={
                            typeof item.image === "string"
                              ? item.image
                              : item.image?.src
                          }
                          alt={`${item.brand} ${section.title}`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white text-[10px] tracking-wide font-semibold px-3 py-1 rounded-full shadow-md">
                          New Arrival
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-sm text-[#8b6b4a] font-medium">
                          {item.brand}
                        </p>
                        <h3 className="text-base font-semibold text-[#1a1a1a] mt-1">
                          {section.title.split(" ")[0]} Collection
                        </h3>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="text-base font-bold text-[#1a1a1a]">
                            {item.price}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.quantity}
                          </span>
                        </div>
                        <button className="mt-3 w-full bg-[#8b6b4a] hover:bg-[#6a4f36] text-white py-2 rounded-md text-sm transition">
                          View Collection
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listings;