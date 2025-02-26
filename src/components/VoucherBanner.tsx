import { useState, memo } from "react";
import { VoucheredProducts } from "../data/VoucheredProducts";

const VoucherBanner = () => {
  // Sample product data
  const [currentIndex, setCurrentIndex] = useState(0);
  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? VoucheredProducts.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % VoucheredProducts.length);
  };
  // Get current product
  const currentProduct = VoucheredProducts[currentIndex];

  return (
    <div className="bg-black text-white w-full relative overflow-hidden">
      <div className="relative h-96">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-1/2 pr-8">
            <div className="mb-4">
              <p className="text-xl font-medium">{currentProduct.name}</p>
            </div>
            <h2 className="text-6xl font-bold mb-8">
              {currentProduct.discount}
            </h2>
            <div className="inline-block">
              <a href={currentProduct.link} className="group flex items-center">
                <span className="text-lg font-medium border-b border-white pb-1">
                  Shop Now
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src={currentProduct.imageSrc}
              alt={currentProduct.alt}
              className="h-64 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Left and Right Arrow Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
        aria-label="Previous product"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
        aria-label="Next product"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicator dots at bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {VoucheredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full border border-gray-500 ${
              currentIndex === index
                ? "bg-red-600 border-red-600"
                : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(VoucherBanner);
