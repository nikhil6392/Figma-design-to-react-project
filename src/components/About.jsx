import React from "react";
import BusinessMan from './assets/businessman.png';
import Vector from './assets/Vector.png';
import Growth from './assets/growth.png';
import PartnerShip from './assets/partnership.png';

const About = () => {
  return (
    <div className="bg-[#0f1c2e] text-white py-16 px-8 md:px-16 lg:px-24 relative">
    
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-1/2 text-center lg:text-left">
        <p>Quick Lending</p>
          <h2 className="text-4xl font-bold">
            Who <span className="text-red-500">We</span> Are
          </h2>
          <span className='block h-2 w-10 bg-red-700 mt-6'></span>
          <p className="mt-4 text-gray-300">
            As a client-focused, boutique private lender, we’re flexible enough
            to cater to most needs and nimble enough to execute quickly. We
            pride ourselves on the ability to make a fast decision and execute
            seamlessly.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <span>Extended support for borrowers</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <span>Your success is our focus</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <span>We fund, fix, and flip all transactional deals</span>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 relative">
          <img
            src={BusinessMan}
            alt="Businessman"
            className="rounded-lg shadow-lg w-64 md:w-72 lg:w-full mx-auto"
          />

          <div className="absolute inset-0 flex flex-col items-center lg:items-start">
            <div className="absolute top-8 left-[-50px] md:left-[-10px] bg-white p-3 shadow-lg rounded-lg flex items-center space-x-2">
              <img src={Growth} alt="Growth" className="w-8 h-8" />
              <span className="text-sm text-gray-800 font-medium">
                Your success is our focus
              </span>
            </div>

            <div className="absolute bottom-6 left-[-60px] md:left-[-80px] bg-white p-3 shadow-lg rounded-lg flex items-center space-x-2">
              <img src={Vector} alt="Support" className="w-12 h-8 bg-red-600 rounded" />
              <span className="text-sm text-gray-800 font-medium">
                Extended support for borrowers
              </span>
            </div>

            <div className="absolute top-[-30px] right-[-30px] md:right-[-70px] bg-white p-3 shadow-lg rounded-lg flex items-center space-x-2">
              <img src={PartnerShip} alt="Partnership" className="w-8 h-8" />
              <span className="text-sm text-gray-800 font-medium">
                Your <span className="text-red-500">success</span> is our focus
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
