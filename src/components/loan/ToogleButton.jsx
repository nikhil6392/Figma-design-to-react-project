import { useState } from "react";

export default function ToggleButtons() {
  const [activeButton, setActiveButton] = useState("Residential Loan");
  
    return (
      <div className="flex flex-col items-center mt-10">
        {/* Title Container */}
        <div className="w-[324px] h-[123px] flex flex-col items-center gap-2">
          <h6 className="text-center">How we can help</h6>
          <div className="flex items-center text-3xl font-bold">
            <span className="mx-2 text-blue-900">Loan</span>
            <span className="mx-2 text-blue-950">Types</span>
          </div>
          {/* Dash below the title */}
          <div className="h-1 w-10 bg-blue-900 mt-2"></div>
        </div>
  
        {/* Buttons Container - Adjusted margin-top */}
        <div className="mt-8 w-[700px] h-[100px] mx-auto border border-gray-500 rounded-[50px] flex items-center justify-center gap-4 bg-gray-300 p-2">
          <button
            className={`h-[76px] w-[340px] text-white rounded-[38px] transition-all duration-300 text-center ${
              activeButton === "Residential Loan" ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setActiveButton("Residential Loan")}
          >
            🏡 Residential Loan
          </button>
          <button
            className={`h-[76px] w-[340px] text-white rounded-[38px] transition-all duration-300 text-center ${
              activeButton === "Commercial Loan" ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setActiveButton("Commercial Loan")}
          >
            🏢 Commercial Loan
          </button>
        </div>
      </div>
    );

}
