import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating = 0,
  reviewCount = 0,
  isNew = false,
  discount,
}) => {
  return (
    <div className="group relative">
      <div className="relative bg-gray-100 rounded-md aspect-square overflow-hidden">
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded z-10">
            -{discount}%
          </div>
        )}
        {isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded z-10">
            NEW
          </div>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-4"
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <Heart className="h-5 w-5 text-black" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <Eye className="h-5 w-5 text-black" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full flex items-center justify-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div className="mt-3">
        <Link href={`/product/${id}`}>
          <h3 className="text-base font-medium text-black truncate">{name}</h3>
        </Link>
        <div className="flex items-center mt-1">
          <span className="text-red-500 font-medium">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        {rating > 0 && (
          <div className="flex items-center mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            {reviewCount > 0 && (
              <span className="ml-1 text-xs text-gray-500">
                ({reviewCount})
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
