import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1616252082912-b8ae0d724deb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      quantity: 1,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      quantity: 2,
    },
  ]);

  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-medium mb-6">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Subtotal
                  </th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 object-contain mr-4"
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4">${item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center border border-gray-300 rounded-md w-24">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-2 py-1"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="px-2 py-1"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                    <td className="py-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-8">
            <Link
              to="/shop"
              className="border border-gray-300 px-4 py-2 rounded-md"
            >
              Return to Shop
            </Link>
            <button className="border border-gray-300 px-4 py-2 rounded-md">
              Update Cart
            </button>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="border border-gray-200 rounded-md p-6">
            <h2 className="text-lg font-medium mb-4">Cart Total</h2>

            <div className="flex justify-between py-2 border-b border-gray-200">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-200">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between py-2 font-medium">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
