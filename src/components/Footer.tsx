import { Link } from "react-router-dom";
import { Send } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Exclusive</h2>
            <p className="mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex border border-white rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent py-2 px-3 w-full text-sm focus:outline-none"
              />
              <button className="px-3">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="hover:text-red-500">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-red-500">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-red-500">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-red-500">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-red-500">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-red-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-red-500">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© Copyright by Igor Ntwali 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
