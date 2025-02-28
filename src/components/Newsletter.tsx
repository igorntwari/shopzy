"use client";
import { Mail } from "lucide-react";
import { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      // In a real app, you would send this to your backend
    }
  };

  return (
    <section className="bg-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 text-white" />
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-indigo-200">
            Get the latest updates, deals, and exclusive offers directly to your
            inbox.
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:max-w-lg">
          {isSubmitted ? (
            <div className="bg-white py-4 px-6 rounded-md shadow-md">
              <p className="text-center text-green-600 font-medium">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 border border-transparent rounded-l-md focus:ring-2 focus:ring-white focus:border-white sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-900 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
          <p className="mt-3 text-sm text-indigo-200">
            We care about your data. Read our{" "}
            <a href="/privacy" className="font-medium text-white underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
