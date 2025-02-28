import Link from "next/link";

interface Category {
  id: number;
  name: string;
  image: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    itemCount: 1240,
  },
  {
    id: 2,
    name: "Men's Fashion",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    itemCount: 890,
  },
  {
    id: 3,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    itemCount: 567,
  },
  {
    id: 4,
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    itemCount: 432,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Browse our wide selection of products across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
<<<<<<< HEAD
              to={`/category/${category.id}`}
=======
              href={`/category/${category.id}`}
>>>>>>> 856cf0aca4b98f4f951d232695a6526d783d3be1
              className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-2 h-60">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="text-sm opacity-80">
                  {category.itemCount} Products
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
