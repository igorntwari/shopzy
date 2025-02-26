const HoteSales = () => {
  return (
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">
              Enhance Your Music Experience
            </h2>
            <div className="flex space-x-4 mb-6">
              <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                1
              </div>
              <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                2
              </div>
              <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                3
              </div>
              <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                4
              </div>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-medium">
              Buy Now!
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
              alt="Headphones"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoteSales;
