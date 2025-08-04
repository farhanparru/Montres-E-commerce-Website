import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Rolex from "../assets/PremimumBrands/image.png";
import Omega from "../assets/PremimumBrands/360_F_308911374_fGRIDIPYXi2UAn14huC25LcFgQIFoCjJ.jpg";
import AudemarsPiguet from "../assets/PremimumBrands/bbdc6dc34c14f4427a5d1fe1475cd453.jpg";
import RichedMillen from "../assets/PremimumBrands/images (1).png";
import PatekPhilippe from "../assets/PremimumBrands/Patek-Philippe-logo2.jpg";
import Cartier from "../assets/PremimumBrands/OOGACR5TPNOJHBKMHDTUGXTS6E.jpg";
import VacheronConstantin from "../assets/PremimumBrands/Vacheron-Constantin-emblem.jpg";
import Hublot from "../assets/PremimumBrands/ac8cb0c703739077d236a5ffb03f9331.jpg";
const PremiumBrands = () => {
  // Premium watch brands data
  const premiumBrands = [
    { id: 1, logo: Rolex, alt: "Rolex Luxury Watches" },
    { id: 2, logo: Omega, alt: "Omega Premium Watches" },
    { id: 3, logo: AudemarsPiguet, alt: "Audemars Piguet Swiss Watches" },
    { id: 4, logo: RichedMillen, alt: "Richard Mille Luxury Timepieces" },
    { id: 5, logo: PatekPhilippe, alt: "Patek Philippe Exclusive Watches" },

    { id: 6, logo: Cartier, alt: "Cartier Watches" },
    { id: 7, logo: VacheronConstantin, alt: "Richard Mille Luxury Timepieces" },
    { id: 8, logo: Hublot, alt: "Patek Philippe Exclusive Watches" },
  ];

  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="premium-brands-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="premium-brands-heading"
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Explore Our Premium Watch Brands
        </h2>

        <div
          className="max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
            loop={true}
            className="py-6"
          >
            {premiumBrands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-40 w-full border border-gray-100">
                  <div className="h-full w-full flex items-center justify-center p-4">
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      style={{ height: "100px", width: "auto" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SEO-rich content for UAE market */}
        <div
          className="mt-16 text-center max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Discover the finest selection of premium watch brands in the UAE.
            Our collection features exclusive timepieces from world-renowned
            Swiss manufacturers, offering unparalleled craftsmanship and luxury
            for Dubai and Abu Dhabi's discerning clientele.
          </p>
          <p className="text-gray-600 text-lg">
            Whether you're looking for classic elegance, modern sophistication,
            or high-end complications, we represent only the most prestigious
            watch brands to bring you exceptional quality and heritage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumBrands;
