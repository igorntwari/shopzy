import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
}

const WishlistPage: React.FC = () => {
  // Sample wishlist data
  const wishlistItems: WishlistItem[] = [
    {
      id: 1,
      name: "Gucci Duffle Bag",
      price: 960,
      originalPrice: 1160,
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      id: 2,
      name: "RGB Liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      originalPrice: 700,
      image:
        "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 660,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    },
    {
      id: 5,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      originalPrice: 800,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
    },
    {
      id: 6,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      image:
        "https://images.unsplash.com/photo-1616252082912-b8ae0d724deb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 7,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 8,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      image:
        "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-medium mb-6">
        Wishlist ({wishlistItems.length})
      </h1>

      <div className="flex justify-end mb-4">
        <Link
          href="/shop"
          className="bg-white border border-gray-300 text-black px-4 py-2 rounded-md text-sm"
        >
          Move All To Bag
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-200 rounded-md p-4 group"
          >
            <button className="absolute top-2 right-2 text-red-500">
              <Heart className="h-5 w-5 fill-red-500" />
            </button>

            <div className="mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain"
              />
            </div>

            <h3 className="font-medium mb-1 truncate">{item.name}</h3>

            <div className="flex items-center mb-3">
              <span className="text-red-500 font-medium">
                ${item.price.toFixed(2)}
              </span>
              {item.originalPrice && (
                <span className="ml-2 text-gray-500 line-through text-sm">
                  ${item.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <button className="w-full bg-black text-white py-2 rounded-md text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
