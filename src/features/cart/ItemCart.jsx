import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete, MdArrowBack } from "react-icons/md";
import PayPal from '../../assets/images (2).png';
import Mastercard from '../../assets/mastercard-icon-lg.png';
import Visa from '../../assets/visa-logo-visa-icon-free-free-vector.jpg';
import Head from "next/head";

const DUMMY_ITEMS = [
  { 
    id: 1,
    name: "Fifa 23", 
    price: 199.00, 
    originalPrice: 249.00,
    qty: 1, 
    img: "https://images.unsplash.com/photo-1608889825103-eb5a6f5ad50a?w=200&h=200&fit=crop", 
    category: "PS5",
    inStock: true,
    deliveryEstimate: "1-3 business days"
  },
  { 
    id: 2,
    name: "PlayStation 5 Console", 
    price: 2199.00, 
    qty: 1, 
    img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=200&fit=crop", 
    category: "Console",
    inStock: true,
    deliveryEstimate: "3-5 business days"
  },
  { 
    id: 3,
    name: "Wireless Headset", 
    price: 349.00, 
    originalPrice: 399.00,
    qty: 1, 
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop", 
    category: "Accessories",
    inStock: false,
    deliveryEstimate: "Backordered - ships in 2 weeks"
  }
];

const ShoppingCart = () => {
  const totalItems = DUMMY_ITEMS.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = DUMMY_ITEMS.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalSavings = DUMMY_ITEMS.reduce((sum, item) => 
    sum + (item.originalPrice ? (item.originalPrice - item.price) * item.qty : 0), 0);
  const shipping = 25.00;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <>
      <Head>
        <title>Shopping Cart | Your Store Name</title>
        <meta name="description" content="Review and manage items in your shopping cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Your Shopping Cart" />
        <meta property="og:description" content="Review your items before checkout" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourstore.com/cart" />
      </Head>

      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex mb-10" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 md:space-x-4">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-500">Shopping Cart</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items Section */}
            <div className="lg:w-2/3">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
                <a href="/shop" className="text-purple-600 hover:text-purple-800 flex items-center transition-colors">
                  <MdArrowBack className="mr-2" /> Continue Shopping
                </a>
              </div>

              {/* Cart Summary */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
                  </h2>
                  {totalSavings > 0 && (
                    <span className="text-sm font-medium text-green-600">
                      You save AED {totalSavings.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Cart Items */}
              <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
                {DUMMY_ITEMS.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover border border-gray-200"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/128?text=Product';
                          }}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              <a href={`/product/${item.id}`} className="hover:text-purple-600 transition-colors">
                                {item.name}
                              </a>
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                            {!item.inStock ? (
                              <p className="text-sm text-red-500">{item.deliveryEstimate}</p>
                            ) : (
                              <p className="text-sm text-green-500">In Stock • {item.deliveryEstimate}</p>
                            )}
                          </div>

                          {/* Desktop Price */}
                          <div className="hidden md:block text-right">
                            {item.originalPrice && (
                              <span className="text-sm line-through text-gray-400 mr-2">
                                AED {item.originalPrice.toFixed(2)}
                              </span>
                            )}
                            <span className="text-lg font-semibold text-gray-900">
                              AED {item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Mobile Price */}
                        <div className="md:hidden mt-3">
                          {item.originalPrice && (
                            <span className="text-sm line-through text-gray-400 mr-2">
                              AED {item.originalPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-lg font-semibold text-gray-900">
                            AED {item.price.toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button 
                              className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <FaMinus size={14} />
                            </button>
                            <span className="px-4 py-2 text-center w-12 font-medium">{item.qty}</span>
                            <button 
                              className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <FaPlus size={14} />
                            </button>
                          </div>

                          <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-900 mr-4">
                              AED {(item.price * item.qty).toFixed(2)}
                            </span>
                            <button className="text-red-600 hover:text-red-800 flex items-center transition-colors">
                              <MdDelete className="mr-1" /> 
                              <span className="text-sm font-medium">Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="sticky top-6">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-5 border-b">
                    <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
                  </div>

                  <div className="px-6 py-5 space-y-5">
                    {/* Subtotal */}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                      <span className="font-medium">AED {subtotal.toFixed(2)}</span>
                    </div>

                    {/* Shipping */}
                    <div>
                      <label htmlFor="shipping" className="block text-sm font-medium text-gray-700 mb-2">Shipping</label>
                      <select 
                        id="shipping"
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm py-2 px-3"
                      >
                        <option>Standard Delivery - AED 25.00</option>
                        <option>Express Delivery - AED 50.00</option>
                        <option>Free Delivery (over AED 500) - AED 0.00</option>
                      </select>
                    </div>

                    {/* Tax */}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (estimated)</span>
                      <span className="font-medium">AED {tax.toFixed(2)}</span>
                    </div>

                    {/* Promo Code */}
                    <div>
                      <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                      <div className="flex">
                        <input
                          type="text"
                          id="promo-code"
                          placeholder="Enter promo code"
                          className="flex-1 border-gray-300 rounded-l-lg shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm py-2 px-3"
                        />
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                          Apply
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-2"></div>

                    {/* Total */}
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-gray-900">AED {total.toFixed(2)}</span>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg text-base font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      Proceed to Checkout
                    </button>

                    {/* Payment Methods */}
                    <div className="flex justify-center space-x-4 pt-2">
                      <img src={Visa} alt="Visa" className="h-8" loading="lazy" />
                      <img src={Mastercard} alt="Mastercard" className="h-8" loading="lazy" />
                      <img src={PayPal} alt="PayPal" className="h-8" loading="lazy" />
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="mt-4 bg-white rounded-xl shadow-sm overflow-hidden p-5">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h3 className="text-base font-medium text-gray-900">Secure Checkout</h3>
                      <p className="text-sm text-gray-500 mt-1">All transactions are secure and encrypted with 256-bit SSL protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;