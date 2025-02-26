const VoucherBanner = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm">Up to 10% off Voucher</p>
            <img
              src="https://via.placeholder.com/300x100"
              alt="Voucher"
              className="h-20 my-2 mx-auto"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium mt-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherBanner;
