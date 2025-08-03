import React from 'react';
import { Helmet } from 'react-helmet';
import { FaStar, FaShoppingBag, FaRegClock } from 'react-icons/fa';
import { RiVipCrownLine } from 'react-icons/ri';
import Watheadd from '../assets/rehearsal-preparation-groom-s-watch-hand.jpg'

const UAEWatchAd = () => {
  return (
    <>
      <Helmet>
        <title>Dubai Luxury Watches | Gold & Diamond Timepieces UAE</title>
        <meta name="description" content="Exclusive Arabian-inspired luxury watches in Dubai. 24K gold, diamond-encrusted timepieces with free UAE delivery and authenticity certification." />
        <meta name="keywords" content="Dubai luxury watches, UAE gold watches, Arabic watch design, diamond watches Dubai, Emirates collection" />
      </Helmet>

      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a0e0b] text-white px-4 py-12 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Arabic Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        
        {/* Gold Dust Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-amber-400"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content - Arabic Inspired */}
          <div className="text-right lg:text-left">
            <div className="flex justify-end lg:justify-start items-center mb-4">
              <RiVipCrownLine className="text-amber-400 text-2xl mr-2" />
              <span className="text-amber-400 font-arabic tracking-widest text-sm">مجموعة الإمارات</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-amber-400 font-arabic">ساعة</span> <br />
              <span className="font-light">Royal</span> <span className="font-bold">Edition</span>
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg border-r-2 border-amber-400 pr-4 lg:border-r-0 lg:border-l-2 lg:pl-4">
              Crafted in Dubai with 18K gold and genuine diamonds. Each watch bears the emblem of the UAE's heritage.
            </p>
            
            <div className="mb-8 space-y-3 text-right lg:text-left">
              {[
                "24K gold plating with Arabic numerals",
                "Genuine diamond hour markers",
                "Limited to 50 pieces worldwide",
                "5-year international warranty",
                "Free engraving in Arabic calligraphy"
              ].map((feature, index) => (
                <div key={index} className="flex justify-end lg:justify-start items-center">
                  <span className="text-gray-100 ml-3">{feature}</span>
                  <FaStar className="text-amber-400 text-xs" />
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-end lg:justify-start">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
                <FaShoppingBag /> SHOP NOW
              </button>
              <button className="border border-amber-400 hover:bg-amber-400/10 text-amber-400 font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
                <FaRegClock /> LIMITED STOCK
              </button>
            </div>
            
            <div className="mt-8 flex justify-end lg:justify-start items-center gap-4 text-sm text-gray-400">
              <span>Free UAE Delivery</span>
              <span className="h-1 w-1 rounded-full bg-amber-400"></span>
              <span>Authenticity Certificate</span>
            </div>
          </div>

          {/* Right Image - Watch with UAE Elements */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <img
                src={Watheadd}
                alt="Dubai Royal Edition Luxury Watch with Arabic Numerals and Gold Finish"
                className="w-full h-auto rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                loading="eager"
                width="600"
                height="600"
              />
              
              {/* UAE Flag Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
                <span className="mr-1">🇦🇪</span> UAE EXCLUSIVE
              </div>
              
              {/* Price in AED */}
              <div className="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-amber-400/30">
                <span className="text-xs text-gray-300 block">Starting from</span>
                <span className="text-amber-400 font-bold text-xl">12,999 AED</span>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation */}
        <style jsx global>{`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
          }
          .font-arabic {
            font-family: 'Traditional Arabic', Arial, sans-serif;
          }
        `}</style>
      </section>
    </>
  );
};

export default UAEWatchAd;