import { Truck, ShieldCheck, RotateCcw, Clock } from "lucide-react";

const PromoSection = () => {
  const features = [
    {
      name: "Free Shipping",
      description: "Free shipping on all orders over $50",
      icon: Truck,
    },
    {
      name: "Secure Payments",
      description: "100% secure payment processing",
      icon: ShieldCheck,
    },
    {
      name: "Easy Returns",
      description: "30-day money back guarantee",
      icon: RotateCcw,
    },
    {
      name: "24/7 Support",
      description: "Customer support available 24/7",
      icon: Clock,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
