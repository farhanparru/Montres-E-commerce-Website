import React, { useState } from "react";
import Head from "next/head";

// Import your images (consider using Next.js Image component in production)
import Item1 from '../../assets/Cufflinks/closeup-photo-stud-white-shirt-with-red-tie.jpg';
import Item2 from '../../assets/HandBags/luxury-woman-handbag.jpg';
import Offer1 from '../../assets/Jewelry/view-luxurious-golden-ring-felt-jewelry-display (1).jpg';
import Offer2 from '../../assets/Watche/rendering-smart-home-device (1).jpg';

const ItemCart = () => {
  // State management
  const [activeStep, setActiveStep] = useState(1);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Timothy [712634000236]",
      description: "Premium quality product with UAE certification",
      price: 160,
      originalPrice: 170,
      quantity: 1,
      image: Item1
    },
    {
      id: 2,
      name: "Desert Oasis [712634000237]",
      description: "Exclusive UAE edition with special features",
      price: 220,
      originalPrice: 250,
      quantity: 1,
      image: Item2
    }
  ]);

  const [insuranceEnabled, setInsuranceEnabled] = useState(true);

  // Static offers data
  const offers = [
    {
      id: 1,
      name: "Arabian Nights Special [712634000238]",
      description: "Limited edition product for UAE customers",
      price: 199,
      image: Offer1
    },
    {
      id: 2,
      name: "Dubai Gold [712634000239]",
      description: "Luxury product with gold finishing",
      price: 299,
      image: Offer2
    }
  ];

  // Constants for calculations
  const SHIPPING_COST = 10;
  const VAT_RATE = 0.05; // 5% VAT for UAE
  const INSURANCE_COST = 15;

  // Helper functions
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addOfferToCart = (offer) => {
    const existingItem = items.find(i => i.id === offer.id);
    if (existingItem) {
      updateQuantity(offer.id, existingItem.quantity + 1);
    } else {
      setItems([...items, {
        ...offer,
        quantity: 1,
        originalPrice: offer.price * 1.1 // Add 10% as original price for discount display
      }]);
    }
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * VAT_RATE);
  const total = subtotal + SHIPPING_COST + tax + (insuranceEnabled ? INSURANCE_COST : 0);

  // Empty cart handler
  const handleEmptyCart = () => {
    if (confirm("Are you sure you want to remove all items from your cart?")) {
      setItems([]);
    }
  };

  return (
    <>
      <Head>
        <title>Shopping Cart | Your UAE Store Name</title>
        <meta name="description" content="Complete your purchase with secure checkout. Free shipping across UAE, 100% money-back guarantee." />
        <meta name="keywords" content="UAE shopping, online store UAE, secure checkout, Dubai shopping" />
        <meta property="og:title" content="Your Shopping Cart | UAE's Premium Online Store" />
        <meta property="og:description" content="Review your items and proceed to secure checkout with UAE-wide delivery options." />
        <link rel="canonical" href="https://www.yourstore.ae/cart" />
      </Head>

      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-gray-50 min-h-screen">
        {/* Main Cart Section */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Cart Items Section */}
          <section aria-labelledby="cart-heading" className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 id="cart-heading" className="text-xl font-bold text-gray-800">
                Your Shopping Cart <span className="text-blue-600">({items.length} items)</span>
              </h2>
              {items.length > 0 && (
                <button 
                  onClick={handleEmptyCart}
                  className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Empty Cart
                </button>
              )}
            </div>
            
            {items.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <article key={item.id} className="flex flex-col sm:flex-row py-4 gap-4">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                        <p className="text-gray-500 text-sm mt-2">AED {item.price.toFixed(2)}</p>
                        
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center border rounded-md">
                            <button 
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              −
                            </button>
                            <span className="px-3 py-1 text-center w-8">{item.quantity}</span>
                            <button 
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <span className="text-lg font-semibold text-gray-900">AED {(item.price * item.quantity).toFixed(2)}</span>
                            {item.originalPrice && (
                              <span className="block text-xs text-gray-400 line-through">AED {item.originalPrice.toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors self-start sm:self-center"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 mb-2">Your cart is empty</p>
                <button 
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => setActiveStep(1)}
                >
                  Continue Shopping
                </button>
              </div>
            )}

            {items.length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg flex flex-wrap items-center justify-between gap-2 text-sm">
                <div className="flex items-center gap-2 text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Buy With Confidence</strong> - 100% NO-RISK MONEY BACK GUARANTEE</span>
                </div>
              </div>
            )}
          </section>

          {/* Exclusive Offers for UAE Customers */}
          {items.length > 0 && (
            <section aria-labelledby="offers-heading" className="space-y-4">
              <h2 id="offers-heading" className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Exclusive offers for UAE customers</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {offers.map((offer) => (
                  <article key={offer.id} className="bg-white rounded-xl p-4 shadow border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={offer.image}
                          alt={offer.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900">{offer.name}</h3>
                        <p className="text-gray-500 text-sm mt-1">{offer.description}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-bold text-blue-600">AED {offer.price.toFixed(2)}</span>
                          <button 
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                            onClick={() => addOfferToCart(offer)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Order Summary Section */}
        {items.length > 0 && (
          <aside className="w-full md:w-1/3 space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 sticky top-4">
              {/* Shipping Insurance */}
              <section aria-labelledby="insurance-heading" className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 id="insurance-heading" className="font-semibold text-gray-900">Shipping Insurance</h4>
                    <p className="text-xs text-gray-500 mt-1">Protection against loss, theft, or damage during transit</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">AED {INSURANCE_COST.toFixed(2)}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={insuranceEnabled}
                        onChange={() => setInsuranceEnabled(!insuranceEnabled)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </section>

              {/* Order Summary */}
              <section aria-labelledby="summary-heading" className="py-4 border-b border-gray-200">
                <h4 id="summary-heading" className="font-semibold text-gray-900 mb-3">Order Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({items.length} items)</span>
                    <span className="font-medium">AED {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">AED {SHIPPING_COST.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">VAT (5%)</span>
                    <span className="font-medium">AED {tax.toFixed(2)}</span>
                  </div>
                  {insuranceEnabled && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Insurance</span>
                      <span className="font-medium">AED {INSURANCE_COST.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </section>

              {/* Total */}
              <section className="py-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-gray-900">Total Payable</span>
                  <span className="text-xl font-bold text-blue-600">AED {total.toFixed(2)}</span>
                </div>
                
                <button 
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-md"
                  onClick={() => setActiveStep(2)}
                >
                  Proceed to Secure Checkout
                </button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>100% Secure Payment</span>
                </div>
              </section>
            </div>

            {/* UAE Customer Guarantee */}
            <section className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>UAE Customer Guarantee</span>
              </h3>
              
              <p className="text-sm text-gray-600 mb-4">
                We're proud to offer the best products in the UAE market at competitive prices. All our products meet UAE standards and regulations.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Authentic products with UAE certification and warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Fast delivery across all Emirates (1-3 business days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">60-day money back guarantee with free returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">24/7 UAE-based customer support in Arabic & English</span>
                </li>
              </ul>
            </section>
          </aside>
        )}
      </div>
    </>
  );
};

export default ItemCart;