import { ArrowRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { flashSaleProducts } from "../data/flashSaleProducts";
import { categories } from "../data/Categories";
import { exploreProducts } from "../data/ExploreProducts";
import { bestSellingProducts } from "../data/bestSellingProducts";
import { newArrivals } from "../data/newArrivals";
const HomePage = () => {
  // Sample product data

  return (
    <div>
      {/* Voucher Banner */}
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm">Up to 10% off Voucher</p>
              <img
                src="https://via.placeholder.com/300x100"
                alt="Voucher"
                className="h-20 my-2 mx-auto"
              />
              <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium mt-2">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sale */}
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

      {/* Categories */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Browse By Category</h2>
            <div className="flex space-x-2">
              <button className="p-2 border border-gray-300 rounded-full">
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button className="p-2 border border-gray-300 rounded-full">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center h-32 hover:border-red-500 cursor-pointer"
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Best Selling Products</h2>
            <button className="flex items-center text-red-500 font-medium">
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhance Your Music Experience */}
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-semibold mb-4">
                Enhance Your Music Experience
              </h2>
              <div className="flex space-x-4 mb-6">
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                  1
                </div>
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                  2
                </div>
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                  3
                </div>
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                  4
                </div>
              </div>
              <button className="bg-green-500 text-white px-6 py-3 rounded-md font-medium">
                Buy Now!
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
                alt="Headphones"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
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

      {/* New Arrival */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">New Arrival</h2>
            <button className="flex items-center text-red-500 font-medium">
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-2 row-span-2 bg-black text-white rounded-md overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="PlayStation 5"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
                <p className="mb-4">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="text-white underline font-medium">
                  Shop Now
                </button>
              </div>
            </div>
            {newArrivals.map((product) => (
              <div key={product.id} className="bg-gray-100 rounded-md p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">Shop Now</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold mb-2">FREE AND FAST DELIVERY</h3>
              <p className="text-sm text-gray-500">
                Free delivery for all orders over $140
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
              <p className="text-sm text-gray-500">
                Friendly 24/7 customer support
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">MONEY BACK GUARANTEE</h3>
              <p className="text-sm text-gray-500">
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
