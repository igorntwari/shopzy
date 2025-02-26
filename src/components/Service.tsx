const Service = () => {
  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="font-semibold mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-gray-500">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-gray-500">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-gray-500">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
