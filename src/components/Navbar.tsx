import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-helvetica font-bold">
          Shopzy
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link to="/contact" className="hover:text-red-500">
            Contact
          </Link>
          <Link to="/about" className="hover:text-red-500">
            About
          </Link>
          <Link to="/signup" className="hover:text-red-500">
            Sign Up
          </Link>
        </div>

        <div className="sm:flex hidden items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 rounded-md py-2 pl-3 pr-10 w-40 lg:w-64 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <Link to="/wishlist" className="text-gray-700 hover:text-red-500">
            <Heart className="h-6 w-6" />
          </Link>

          <Link
            to="/cart"
            className="text-gray-700 hover:text-red-500 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Link>

          <Link to="/login" className="text-gray-700 hover:text-red-500">
            <User className="h-6 w-6" />
          </Link>
        </div>
        <Link
          to="/menu"
          className="text-gray-700 hover:text-red-500 sm:hidden block "
        >
          <Menu className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
