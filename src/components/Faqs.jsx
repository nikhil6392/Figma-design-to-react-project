import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const faqs = [
  {
    question:
      "What is the difference between a real estate investment loan (asset based) and traditional bank loans?",
    answer:
      "Traditional banks generally have many more guidelines and lending criteria that make it nearly impossible to get a loan from them for the purpose of buying, rehabbing, and reselling residential properties. Asset based lenders specialize in loans against these types of distressed properties. Asset based loans are usually short term and have somewhat higher interest rates, BUT can close quickly and finance repairs, and closing costs when purchasing within 70% loan to value.",
  },
  { question: "How much can I borrow?" },
  { question: "Do you loan on rental property?" },
  { question: "Do you loan on commercial property?" },
  { question: "Do you loan on multi-family properties?" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="h-screen bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 p-10 text-white">
      <h2 className="text-4xl font-bold text-center mb-2">
        Frequently Asked <span className="text-red-500">Questions</span>
      </h2>
      <div className="flex justify-center mb-8">
        <div className="h-1 w-10 bg-red-500"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full bg-[#1D2A5B] text-left text-lg font-semibold p-4 rounded-lg flex justify-between items-center"
              onClick={() => setOpenIndex(index === openIndex ? null : index)}>
              {faq.question}
              <FaArrowLeft
                className={`transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : "rotate-0"
                           } text-red-400`}
              />
            </button>
            {openIndex === index && faq.answer && (
              <div className="bg-white text-[#1D2A5B] p-4 mt-2 rounded-lg shadow-md">
                <p className="text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
