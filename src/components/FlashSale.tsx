"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { flashSaleProducts } from "@/data/FlashSaleProducts";

const FlashSale = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // State to track if all products should be shown
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Products to display - either all products or just the first few
  const displayedProducts = showAllProducts
    ? flashSaleProducts
    : flashSaleProducts.slice(0, 4); // Showing only first 4 products initially

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;
        const newDays = newHours < 0 ? prevTime.days - 1 : prevTime.days;

        return {
          days: newDays >= 0 ? newDays : 0,
          hours: newHours < 0 ? 23 : newMinutes < 0 ? newHours - 1 : newHours,
          minutes:
            newMinutes < 0 ? 59 : newSeconds < 0 ? newMinutes - 1 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time digits to always show two digits
  const formatDigit = (digit: number) => {
    return digit < 10 ? `0${digit}` : `${digit}`;
  };

  // Handle View All button click
  const handleViewAllClick = () => {
    setShowAllProducts(true);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold">Flash Sales</h2>
            <div className="ml-8 flex space-x-4">
              {/* Days */}
              <div className="text-center">
                <span className="block text-sm">Days</span>
                <span className="block text-xl font-bold bg-gray-100 px-3 py-1 rounded">
                  {formatDigit(timeLeft.days)}
                </span>
              </div>
              <div className="flex items-center text-red-500 text-xl font-bold">
                :
              </div>
              {/* Hours */}
              <div className="text-center">
                <span className="block text-sm">Hours</span>
                <span className="block text-xl font-bold bg-gray-100 px-3 py-1 rounded">
                  {formatDigit(timeLeft.hours)}
                </span>
              </div>
              <div className="flex items-center text-red-500 text-xl font-bold">
                :
              </div>
              {/* Minutes */}
              <div className="text-center">
                <span className="block text-sm">Minutes</span>
                <span className="block text-xl font-bold bg-gray-100 px-3 py-1 rounded">
                  {formatDigit(timeLeft.minutes)}
                </span>
              </div>
              <div className="flex items-center text-red-500 text-xl font-bold">
                :
              </div>
              {/* Seconds */}
              <div className="text-center">
                <span className="block text-sm">Seconds</span>
                <span className="block text-xl font-bold bg-gray-100 px-3 py-1 rounded">
                  {formatDigit(timeLeft.seconds)}
                </span>
              </div>
            </div>
          </div>

          <button
            className="flex items-center text-red-500 font-medium"
            onClick={handleViewAllClick}
          >
            View All <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Products button at the bottom when not showing all products */}
        {!showAllProducts && (
          <div className="mt-8 text-center">
            <button
              onClick={handleViewAllClick}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlashSale;
