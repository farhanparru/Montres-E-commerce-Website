import React, { useState, useEffect, useRef } from 'react';
import videoWatch from '../../assets/11965317-uhd_3840_2160_24fps.mp4';

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  
  const slides = [
    {
      type: 'image',
      content: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Luxury watches display',
      title: "TIMELESS ELEGANCE",
      description: "Discover our exclusive collection of handcrafted timepieces",
      cta: "SHOP NOW"
    },
    {
      type: 'video',
      content: videoWatch,
      alt: '3D rotating watch video',
      title: "PRECISION CRAFTSMANSHIP",
      description: "Each watch is a masterpiece of engineering and design",
      cta: "EXPLORE DETAILS"
    },
    {
      type: 'image',
      content: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Close-up of luxury watch',
      title: "LUXURY REDEFINED",
      description: "Experience the perfect blend of innovation and tradition",
      cta: "VIEW COLLECTION"
    },
    {
      type: 'image',
      content: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Watches on display',
      title: "YOUR PERFECT TIMEPIECE",
      description: "Find the watch that matches your style and personality",
      cta: "BROWSE SELECTION"
    }
  ];

  // Handle video play when slide becomes active
  useEffect(() => {
    if (slides[currentSlide].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    }
  }, [currentSlide, slides]);

  // Auto-rotate slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Luxury Gold Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] opacity-5 z-10 pointer-events-none"></div>
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
        >
          {slide.type === 'image' ? (
            <div className="relative w-full h-full">
              <img 
                src={slide.content} 
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end pb-20 md:pb-32 lg:items-center lg:justify-start lg:pl-28">
                <div className="text-center lg:text-left px-6 max-w-4xl">
                  <div className="overflow-hidden">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 animate-fadeIn uppercase tracking-wider">
                      {slide.title}
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl lg:text-2xl text-amber-100 mb-8 animate-fadeIn delay-100 font-light max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-light py-3 px-8 rounded-none transition-all duration-500 animate-fadeIn delay-200 uppercase tracking-widest text-sm">
                      {slide.cta}
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
              >
                <source src={slide.content} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end pb-20 md:pb-32 lg:items-center lg:justify-start lg:pl-28">
                <div className="text-center lg:text-left px-6 max-w-4xl">
                  <div className="overflow-hidden">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 animate-fadeIn uppercase tracking-wider">
                      {slide.title}
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl lg:text-2xl text-amber-100 mb-8 animate-fadeIn delay-100 font-light max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-light py-3 px-8 rounded-none transition-all duration-500 animate-fadeIn delay-200 uppercase tracking-widest text-sm">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
              {/* Video Controls */}
              <button 
                onClick={toggleMute}
                className="absolute bottom-8 right-8 z-20 bg-black/50 rounded-full p-2"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Luxury Navigation Dots */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 ${index === currentSlide ? 'bg-amber-500 w-12' : 'bg-white/50 w-8'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* UAE Luxury Branding */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xs font-light tracking-widest">DUBAI</span>
            <span className="text-amber-500 text-lg">🇦🇪</span>
          </div>
          <div className="h-px w-16 bg-amber-500 my-2"></div>
          <p className="text-white/80 text-xs font-light uppercase tracking-widest">Since 1985</p>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-xs mb-2 font-light tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-t from-amber-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;