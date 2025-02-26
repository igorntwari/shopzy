import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Star,
  Truck,
  ShieldCheck,
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import FeaturedProducts from "../components/FeaturedProducts";

// Sample product data - in a real app, this would come from an API
const product = {
  id: 1,
  name: "Premium Cotton T-Shirt",
  price: 29.99,
  originalPrice: 39.99,
  description:
    "This premium cotton t-shirt is perfect for everyday wear. Made from 100% organic cotton, it's soft, comfortable, and durable. The classic fit and versatile design make it a must-have addition to your wardrobe.",
  features: [
    "100% organic cotton",
    "Classic fit",
    "Crew neck",
    "Short sleeves",
    "Machine washable",
  ],
  colors: ["White", "Black", "Navy", "Gray"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
  ],
  rating: 4.5,
  reviewCount: 127,
  inStock: true,
  sku: "TS-001-WHT",
  category: "Men's Clothing",
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(product.images[0]);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product images */}
          <div className="lg:max-w-lg lg:self-start">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`overflow-hidden rounded-md ${
                    mainImage === image
                      ? "ring-2 ring-indigo-500"
                      : "ring-1 ring-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-center object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 ${
                          product.rating > rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-500">
                    {product.reviewCount} reviews
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <p className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                {product.originalPrice && (
                  <>
                    <p className="ml-3 text-lg text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </p>
                    <p className="ml-2 text-sm font-medium text-red-500">
                      {discount}% OFF
                    </p>
                  </>
                )}
              </div>
              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>
                <p className="mt-2 text-base text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
