import React from "react";
import { CheckCircle } from "lucide-react";
import CardImg from "./images/cardImg.png";
import PersonImg from "./images/PersonImg.png";

const LoanSection = () => {
  return (
    <div className="py-12 px-6 mt-2">
      <div className="relative flex flex-col lg:flex-row items-center justify-center mt-12 max-w-6xl mx-auto gap-12">
        
        <div className="relative flex items-center">
        
          <div className="bg-white rounded-lg shadow-lg w-52 text-center flex flex-col items-center relative z-10">
            <img
              src={CardImg}
              alt="Investor Card"
              className="w-[200px] h-[120px] object-cover "
            />
            <p className="text-xl font-bold">
              <span className="text-blue-950">3,200+</span>
            </p>
            <p className="text-sm text-gray-600">Investors trusted us</p>
          </div>

          
          <img
            src={PersonImg}
            alt="Person"
            className="w-[800px] "
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-md w-72 text-lg">
            <CheckCircle className="text-green-500" />
            <p className="font-semibold">Loans for Investors</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-md w-72 text-lg">
            <CheckCircle className="text-green-500" />
            <p className="font-semibold">Multi Family up to 4 units</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-md w-72 text-lg">
            <CheckCircle className="text-green-500" />
            <p className="font-semibold">Short term Interest</p>
          </div>
        </div>
        <div className="max-w-lg text-left">
          <h3 className="text-3xl font-bold text-gray-900">
            Residential <span className="text-blue-600">Loan</span>
          </h3>
          <p className="text-gray-600 mt-4">
            Quick Lending’s short-term, interest-only loans are for investors purchasing single-family,
            townhouses, condominiums, multifamily up to 4 units, and lot/land under an LLC or Corporation.
            We do not lend to consumers (personal loans).
          </p>
          <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg">
            Apply Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanSection;
