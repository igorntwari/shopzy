import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { exploreProducts } from "../data/ExploreProducts";

const Explorer = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Explore Our Products</h2>
          <button className="flex items-center text-red-500 font-medium">
            View All <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {exploreProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorer;
