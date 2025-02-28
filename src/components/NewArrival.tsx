import { newArrivals } from "@/data/NewArrivals";
import { ArrowRight } from "lucide-react";

const NewArrival = () => {
  return (
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
  );
};

export default NewArrival;
