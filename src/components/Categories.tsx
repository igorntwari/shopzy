import { ArrowRight } from "lucide-react";
import { categories } from "../data/Categories";

const Categories = () => {
  return (
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
  );
};

export default Categories;
