import React from 'react'
import megaOffer from '../assets/cbc5227b-6dc5-4903-a781-9e73357d7d1f.jpg'
import WatchOffer from '../assets/black_friday_banner_18.jpg'

const AddSection = () => {
  return (
    <div className="bg-gray-100"> {/* Added background color here */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Image Section */}
          <div className="relative rounded-xl overflow-hidden group h-80">
            <img 
              src={megaOffer}
              alt="Special offers"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            {/* Animated Title Container */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 px-4">
                <h2 className="text-4xl font-bold text-white mb-2">
                  <span className="text-amber-400">DUBAI</span> DEALS
                </h2>
                <p className="text-xl text-gray-100 font-light mb-4">Up to 70% Off Premium Brands</p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Second Image Section */}
          <div className="relative rounded-xl overflow-hidden group h-80">
            <img 
              src={WatchOffer}
              alt="Watch offers"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            {/* Animated Title Container */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 px-4">
                <h2 className="text-4xl font-bold text-white mb-2">
                  <span className="text-amber-400">ABU DHABI</span> COLLECTION
                </h2>
                <p className="text-xl text-gray-100 font-light mb-4">New Arrivals Every Week</p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSection