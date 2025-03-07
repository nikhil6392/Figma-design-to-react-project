import { useState } from "react";
import Linda from "./assets/Linda.png";

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "James and his team are my go-to source for any transaction we are considering. They are courteous, efficient and quick to get you to the closing table.",
      name: "Linda",
      rating: 4,
      image: Linda,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10  max-w-6xl mx-auto space-x-6">
    
      <div className="md:w-1/3 text-left">
        <p className="text-sm text-gray-500">Testimonial</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-1 whitespace-nowrap">
          What <span className="text-blue-600">People Think</span> of Us
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur. Sodales risus suspendisse ullamcorper etiam vel mi eleifend nisi.
        </p>
        <div className="flex mt-5 space-x-3">
          <button
            onClick={handlePrev}
            className="p-2 bg-blue-600 rounded-full shadow-md flex items-center justify-center w-10 h-10"
          >
            ⬅
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-blue-600 rounded-full shadow-md flex items-center justify-center w-10 h-10"
          >
            ➡
          </button>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center">
        <img
          src={testimonials[currentIndex].image}
          alt="Testimonial"
          className="w-56 h-56 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="md:w-1/3 bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-700 text-sm">"{testimonials[currentIndex].text}"</p>
        <p className="text-gray-900 font-bold mt-3">{testimonials[currentIndex].name}</p>
        <div className="flex mt-1 text-yellow-500">
          {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>

    </div>
  );
}

