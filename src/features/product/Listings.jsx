import React from "react";
import { Helmet } from "react-helmet";
import {
  FaShippingFast,
  FaShieldAlt,
  FaStar,
  FaGift,
  FaArrowRight,
} from "react-icons/fa";
import barndWathes from "../../assets/beautiful-rendering-steel-object.jpg";
import Bags from "../../assets/bag-hanging-from-furniture-item-indoors.jpg";
import Jwellry from "../../assets/view-luxurious-golden-ring-felt-jewelry-display.jpg";
import Clocks from "../../assets/pd109-pdobj02045a-image.jpg";
import cufflinks from "../../assets/tailoring-items-arrangement-still-life.jpg";
import LuxuryHomeDecor from "../../assets/modern-styled-entryway.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const mainCategories = [
  {
    title: "Luxury Watches",
    image: barndWathes,
    description: "Premium timepieces from leading brands",
    items: 125,
  },
  {
    title: "Designer Bags",
    image: Bags,
    description: "Elegant handbags & accessories",
    items: 89,
  },
  {
    title: "Fine Jewelry",
    image: Jwellry,
    description: "Exquisite rings, necklaces & more",
    items: 156,
  },
  {
    title: "Antique Clocks",
    image: Clocks,
    description: "Vintage & modern timekeepers",
    items: 42,
  },
  {
    title: "Men's Accessories",
    image: cufflinks,
    description: "Cufflinks, pens & luxury items",
    items: 78,
  },
  {
    title: "Home Decor",
    image: LuxuryHomeDecor,
    description: "Luxury furnishings & decor",
    items: 64,
  },
];

const Listings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Dubai Luxury Mall | Premium Categories</title>
        <meta
          name="description"
          content="Browse our premium luxury categories including watches, jewelry, bags, and home decor. The finest collections in UAE."
        />
        <meta
          name="keywords"
          content="luxury categories UAE, Dubai premium shopping, luxury watches, designer bags Dubai"
        />
      </Helmet>

      {/* Main Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-2">
            Our Premium Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully selected luxury categories featuring the
            finest products from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-medium mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-black/30 px-2 py-1 rounded">
                      {category.items} items
                    </span>
                    <button className="flex items-center text-sm font-medium hover:text-amber-300 transition-colors">
                      View Collection <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked luxury items from our collections
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mainCategories.slice(0, 4).map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">From 1,200 AED</p>
                  <button className="w-full text-sm bg-gray-900 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors">
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      {/* Value Propositions */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
              title: "Fast Delivery",
              description: "Free shipping across UAE on orders over 500 AED",
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
              title: "Authenticity Guaranteed",
              description: "All products come with certification",
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
              title: "Premium Quality",
              description: "Curated selection of luxury items",
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
              title: "Gift Services",
              description: "Special packaging & personalization",
            },
          ].map((feature, index) => (
            <div key={index} className="p-4">
              {feature.icon}
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Listings;
