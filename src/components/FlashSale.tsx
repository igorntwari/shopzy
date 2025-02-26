import { ArrowRight } from "lucide-react";
import { flashSaleProducts } from "../data/flashSaleProducts";
import ProductCard from "./ProductCard";

const FlashSale = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold">Flash Sales</h2>
            <div className="ml-8 flex space-x-4">
              <div className="text-center">
                <span className="block text-sm">Days</span>
                <span className="block text-xl font-bold">03</span>
              </div>
              <div className="text-center">
                <span className="block text-sm">Hours</span>
                <span className="block text-xl font-bold">23</span>
              </div>
              <div className="text-center">
                <span className="block text-sm">Minutes</span>
                <span className="block text-xl font-bold">19</span>
              </div>
              <div className="text-center">
                <span className="block text-sm">Seconds</span>
                <span className="block text-xl font-bold">56</span>
              </div>
            </div>
          </div>
          <button className="flex items-center text-red-500 font-medium">
            View All <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
