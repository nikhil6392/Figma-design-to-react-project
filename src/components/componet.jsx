import React from "react";

import Customer from './assets/customer.png'

const QuickLending = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0c1b3a] to-[#12264d] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-row items-center justify-between relative">
        {/* Left & Center Intersection Section */}
        <div className="flex-1 flex items-start space-x-6 relative">
          {/* Left Section */}
          <div className="text-white relative z-10">
            <h1 className="text-4xl font-bold leading-tight">
              Learn how we are 
              <span className="mx-2 text-red-500">Different</span> from <br />
              other lenders.
            </h1>
            <p className="text-gray-300 mt-2">—</p>
            <p className="text-gray-300 mt-2">Get your loan Quickly and efficiently.</p>
            <button className="mt-6 bg-red-500 px-6 py-3 text-white rounded-lg shadow-md hover:bg-red-600">
              Apply now →
            </button>
            <div className="flex items-center mt-6">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="/user1.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="/user2.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="/user3.jpg" alt="User" />
              </div>
              <span className="ml-4 text-lg font-semibold">320K Active users</span>
            </div>
          </div>
          
          {/* Center Section - Man Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 z-0">
            <img className="w-80 rounded-lg shadow-lg" src={Customer} alt="Man" />
          </div>
        </div>
        
        {/* Right Section - Cards */}
        <div className="relative flex-1 flex flex-col items-start space-y-6 ml-16">
          <div className="relative flex flex-col space-y-6">
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 text-xl font-bold">📊</span>
              <span>2M+ Business Owners</span>
            </div>
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-blue-500 text-xl font-bold">🌎</span>
              <span>10+ Countries Supported</span>
            </div>
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-xl font-bold">⭐</span>
              <span>4.9 Ratings by Customers</span>
            </div>
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 text-xl font-bold">💰</span>
              <span>Residential & Commercial Loan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLending;

