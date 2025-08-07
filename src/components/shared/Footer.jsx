import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { SiPaypal, SiApplepay, SiSamsungpay, SiGooglepay } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">MONTRE'S</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3" />
                  <div>
                    <p>Shop 5, Moza Plaza 1, Al Khor Street,</p>
                    <p>Delta Waterfront, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhoneAlt className="mt-1 mr-3" />
                  <p>+97142671124</p>
                </div>
                <div className="flex items-start">
                  <FaPhoneAlt className="mt-1 mr-3" />
                  <p>WhatsApp: +97142671124</p>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-3" />
                  <p>seks@montres.ae</p>
                </div>
                <div className="flex items-start">
                  <FaInstagram className="mt-1 mr-3" />
                  <p>@montres.ae</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop By Categories</h3>
            <ul className="space-y-2">
              <li>Watch</li>
              <li>Bags</li>
              <li>Wallets</li>
              <li>Jewellery</li>
              <li>Clocks</li>
              <li>Pocket Watch</li>
              <li>Personal Accessories</li>
              <li>Cufflinks</li>
              <li>Pens</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Authentication & Watch Grading</li>
              <li>Frequently Asked Questions (FAQ)</li>
              <li>Refund And Returns Policy</li>
              <li>Terms And Conditions</li>
              <li>Warranty Policy</li>
              <li>About US</li>
              <li>Contact Us</li>
              <li>Request Item</li>
            </ul>
          </div>

          {/* Payment Options Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Options</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <FaCcVisa className="text-2xl text-blue-800" />
                <span className="text-xs mt-1">Visa</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <FaCcMastercard className="text-2xl text-red-600" />
                <span className="text-xs mt-1">Mastercard</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <SiPaypal className="text-2xl text-blue-600" />
                <span className="text-xs mt-1">PayPal</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <SiApplepay className="text-2xl text-black" />
                <span className="text-xs mt-1">Apple Pay</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <SiGooglepay className="text-2xl text-gray-800" />
                <span className="text-xs mt-1">Google Pay</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <SiSamsungpay className="text-2xl text-blue-800" />
                <span className="text-xs mt-1">Samsung Pay</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <div className="text-sm font-bold">COD</div>
                <span className="text-xs mt-1">Cash on Delivery</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded shadow">
                <div className="text-sm font-bold">Bank Transfer</div>
                <span className="text-xs mt-1">UAE Banks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">
                Visit Our <span className="text-amber-600">Dubai</span> Showroom
              </h3>
              <p className="text-gray-600 mb-4">
                Experience our luxury collections in person at our flagship
                showroom in Dubai.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Shop 5, Moza Plaza 1</p>
                    <p className="text-gray-600 text-sm">
                      Al Khor Street, Delta Waterfront, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhoneAlt className="text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">+971 4 267 1124</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">seks@montres.ae</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110942.72228082338!2d55.21420366975388!3d25.27417092315784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f435ad7cce631%3A0x7bb62949cfd4ba39!2s77FW%2BMJV%20Moza%20Plaza%20-%201%20Al%20Khor%20St%20-%20Deira%20-%20Dubai!3m2!1d25.2741938!2d55.296605199999995!5e1!3m2!1sen!2sae!4v1754506903484!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Montre's Dubai Showroom Location"
                aria-label="Google Maps location of Montre's Dubai Showroom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Montres Trading LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;