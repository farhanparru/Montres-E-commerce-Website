import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingBag } from 'react-icons/fa';
import videoWatch from '../../assets/11965317-uhd_3840_2160_24fps.mp4';
import Helmet from 'react-helmet'
const EcommerceBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  // SEO-optimized slides with rich schema data
  const slides = [
    {
      type: 'image',
      content: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
      alt: 'Luxury watches collection with discount offer',
      title: "Summer Sale 2023",
      subtitle: "Up to 40% Off Premium Watches",
      description: "Limited time offer on selected luxury timepieces. Free shipping and 2-year warranty included.",
      cta: "Shop Now",
      buttonVariant: 'primary',
      textPosition: 'left',
      schema: {
        "@type": "Offer",
        "name": "Summer Sale 2023",
        "description": "Limited time 40% discount on luxury watches",
        "priceCurrency": "USD",
        "url": "/summer-sale"
      }
    },
    {
      type: 'video',
      content: videoWatch,
      alt: '3D animation of premium chronograph watch',
      title: "New Collection",
      subtitle: "Exclusive Timepieces",
      description: "Discover our latest designs with cutting-edge technology and craftsmanship.",
      cta: "View Collection",
      buttonVariant: 'secondary',
      textPosition: 'center',
      schema: {
        "@type": "ProductCollection",
        "name": "New Watch Collection",
        "description": "Premium chronograph watches with advanced features"
      }
    },
    {
      type: 'image',
      content: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
      alt: 'Close-up of luxury wristwatch with leather strap',
      title: "Free Shipping",
      subtitle: "On All Orders Over $500",
      description: "Enjoy complimentary worldwide shipping and easy returns on premium purchases.",
      cta: "Learn More",
      buttonVariant: 'outline',
      textPosition: 'right',
      schema: {
        "@type": "ShippingDeliveryTime",
        "name": "Free Shipping Offer",
        "description": "Free shipping on orders over $500"
      }
    }
  ];

  // Handle slide transitions
  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    clearInterval(intervalRef.current);
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 7000);
    }
  };

  // Handle video play when slide becomes active
  useEffect(() => {
    if (slides[currentSlide].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log("Auto-play prevented:", e));
      }
    }
  }, [currentSlide]);

  // Auto-rotate slides with cleanup
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 7000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  // Pause on hover for better UX
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    resetAutoPlay();
  };

  // Generate structured data for SEO
  const renderStructuredData = () => {
    return (
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Luxury Watches Collection",
          "description": "Premium timepieces with exclusive offers",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": slides.map((slide, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": slide.title,
              "item": `#slide-${index}`
            }))
          },
          "mainEntity": slides.map(slide => slide.schema)
        })}
      </script>
    );
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Luxury Watches | Premium Timepieces & Collections</title>
        <meta name="description" content="Discover our exclusive collection of luxury watches with special offers. Free shipping on orders over $500." />
        <meta name="keywords" content="luxury watches, premium timepieces, watch collection, designer watches, limited edition watches" />
        <meta property="og:title" content="Luxury Watches Collection | Premium Timepieces" />
        <meta property="og:description" content="Explore our curated selection of high-end watches with exclusive offers." />
        <meta property="og:type" content="website" />
        {slides[currentSlide] && (
          <meta property="og:image" content={slides[currentSlide].content} />
        )}
        {renderStructuredData()}
      </Helmet>

      {/* Banner Slider */}
      <section 
        className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-gray-100"
        aria-label="Promotional banner slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            id={`slide-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            aria-hidden={index !== currentSlide}
          >
            {slide.type === 'image' ? (
              <div className="relative w-full h-full">
                <img 
                  src={slide.content} 
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : 'low'}
                />
                <div className={`absolute inset-0 bg-black/30 flex items-center ${slide.textPosition === 'left' ? 'justify-start' : slide.textPosition === 'right' ? 'justify-end' : 'justify-center'}`}>
                  <div className={`px-6 md:px-12 lg:px-24 max-w-2xl ${slide.textPosition === 'left' ? 'text-left' : slide.textPosition === 'right' ? 'text-right' : 'text-center'}`}>
                    {slide.subtitle && (
                      <p className="text-lg md:text-xl text-amber-400 mb-2 animate-fadeInUp uppercase tracking-wider font-medium">
                        {slide.subtitle}
                      </p>
                    )}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp delay-100">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg text-white/90 mb-6 animate-fadeInUp delay-200">
                      {slide.description}
                    </p>
                    <div className="animate-fadeInUp delay-300">
                      <button 
                        className={`
                          ${slide.buttonVariant === 'primary' ? 'bg-amber-600 hover:bg-amber-700 text-white' : ''}
                          ${slide.buttonVariant === 'secondary' ? 'bg-white hover:bg-gray-100 text-gray-900' : ''}
                          ${slide.buttonVariant === 'outline' ? 'border-2 border-white hover:bg-white/10 text-white' : ''}
                          font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2
                        `}
                        aria-label={`${slide.cta} - ${slide.title}`}
                      >
                        {slide.cta} <FaShoppingBag />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <video 
                  ref={videoRef}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover object-center"
                  aria-label={slide.alt}
                >
                  <source src={slide.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={`absolute inset-0 bg-black/30 flex items-center ${slide.textPosition === 'left' ? 'justify-start' : slide.textPosition === 'right' ? 'justify-end' : 'justify-center'}`}>
                  <div className={`px-6 md:px-12 lg:px-24 max-w-2xl ${slide.textPosition === 'left' ? 'text-left' : slide.textPosition === 'right' ? 'text-right' : 'text-center'}`}>
                    {slide.subtitle && (
                      <p className="text-lg md:text-xl text-amber-400 mb-2 animate-fadeInUp uppercase tracking-wider font-medium">
                        {slide.subtitle}
                      </p>
                    )}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp delay-100">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg text-white/90 mb-6 animate-fadeInUp delay-200">
                      {slide.description}
                    </p>
                    <div className="animate-fadeInUp delay-300">
                      <button 
                        className={`
                          ${slide.buttonVariant === 'primary' ? 'bg-amber-600 hover:bg-amber-700 text-white' : ''}
                          ${slide.buttonVariant === 'secondary' ? 'bg-white hover:bg-gray-100 text-gray-900' : ''}
                          ${slide.buttonVariant === 'outline' ? 'border-2 border-white hover:bg-white/10 text-white' : ''}
                          font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2
                        `}
                        aria-label={`${slide.cta} - ${slide.title}`}
                      >
                        {slide.cta} <FaShoppingBag />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
          <button 
            onClick={prevSlide}
            className="bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-500 w-6' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1} of ${slides.length}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>

        {/* Promo Badge with Animation */}
        <div className="absolute top-4 left-4 z-20 bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
          <span className="font-medium text-sm">Limited Time Offer</span>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeInUp.delay-100 {
          animation-delay: 0.2s;
        }
        .animate-fadeInUp.delay-200 {
          animation-delay: 0.4s;
        }
        .animate-fadeInUp.delay-300 {
          animation-delay: 0.6s;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  );
};

export default EcommerceBannerSlider;