import React from 'react';

const WatchForm = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen justify-center items-center px-4 py-10 lg:py-20 gap-8 lg:gap-16">
      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 lg:p-8 border-t-8 border-blue-900">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-gray-900">TELL US ABOUT YOUR WATCH</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Watch Brand/Model</label>
            <input
              type="text"
              placeholder="e.g. Rolex Submariner, Omega Seamaster"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select service</option>
              <option value="battery">Battery Replacement</option>
              <option value="cleaning">Cleaning & Maintenance</option>
              <option value="repair">Mechanical Repair</option>
              <option value="pressure">Pressure Testing</option>
              <option value="polishing">Polishing & Refinishing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description of Issues</label>
            <textarea
              placeholder="Describe any symptoms or problems with your watch..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Manufacture Year</label>
              <input
                type="text"
                placeholder="Approximate year"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Watch Type</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select type</option>
                <option value="mechanical">Mechanical</option>
                <option value="automatic">Automatic</option>
                <option value="quartz">Quartz</option>
                <option value="chronograph">Chronograph</option>
                <option value="smart">Smart Watch</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition shadow-md"
            >
              REQUEST WATCH SERVICE
            </button>
          </div>
        </form>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col items-center lg:items-start max-w-md">
        <div className="relative w-72 h-72 lg:w-80 lg:h-80 mb-8">
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt="Luxury watch repair"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
            <div className="text-blue-900 font-bold text-lg">20+ Years</div>
            <div className="text-gray-600 text-sm">of expertise</div>
          </div>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center lg:text-left leading-tight">
          Precision Watch Care <br />for Your Timepiece
        </h2>
        
        <p className="text-gray-700 mt-4 text-center lg:text-left">
          Our certified watchmakers provide expert service for luxury and vintage watches, using original parts and manufacturer-approved techniques.
        </p>

        <ul className="mt-6 space-y-3 text-gray-800 font-medium">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Certified watchmakers with specialized training</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>1-year warranty on all repairs</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Free estimate and diagnosis</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WatchForm;