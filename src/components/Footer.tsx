import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="mb-2">111 Bijoy sarani, Dhaka,</p>
            <p className="mb-2">DH 1515, Bangladesh.</p>
            <p className="mb-2">exclusive@gmail.com</p>
            <p className="mb-2">+88015-88888-9999</p>
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-xs text-gray-400 mb-2">
              Save $3 with App New User Only
            </p>
            <div className="flex mb-4">
              <div className="mr-2">
                <img
                  src="https://via.placeholder.com/80x80"
                  alt="QR Code"
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col justify-between">
                <img
                  src="https://via.placeholder.com/100x30"
                  alt="Google Play"
                  className="h-8"
                />
                <img
                  src="https://via.placeholder.com/100x30"
                  alt="App Store"
                  className="h-8"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
