import React from "react";
import VintagePieces from "../../assets/Services/018-desk-clock.png";
import AffordableLuxury from "../../assets/Services/022-cash-r42ecoqc28j50xw6lx7t6u43pqksk63juypunm0cqc.png";
import WarrantyIcon from "../../assets/Services/Warranty-icon-Custom.png";
import ShippingIcon from "../../assets/Services/shipping-Custom.png";
import AuthenticityIcon from "../../assets/Services/Authenticity-icon-Custom.png";
import AdditionalServicesIcon from "../../assets/Services/services-icon-Custom.png";

const Services = () => {
  const services = [
    {
      icon: VintagePieces,
      title: "Vintage Pieces",
      description: "Unique watches in top condition.",
    },
    {
      icon: AffordableLuxury,
      title: "Affordable Luxury",
      description: "Luxury Watches, Fair Prices",
    },
    {
      icon: WarrantyIcon,
      title: "Warranty",
      description: "1 Year Warranty for all watches.",
    },
    {
      icon: ShippingIcon,
      title: "Shipping",
      description: "Fast World Wide Shipping.",
    },
    {
      icon: AuthenticityIcon,
      title: "Authenticity",
      description: "All Items are verified & authentic.",
    },
    {
      icon: AdditionalServicesIcon,
      title: "Additional Services",
      description: "Request a service at our physical store.",
    },
  ];

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow min-h-[200px]"
            >
              <div className="flex items-center justify-center h-20 w-20 mb-4">
                {" "}
                {/* Bigger container */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="max-h-16 max-w-16 object-contain" // Bigger image
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {service.title}
              </h3>{" "}
              {/* Bigger title */}
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
