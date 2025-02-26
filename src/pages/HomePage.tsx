import VoucherBanner from "../components/VoucherBanner";
import FlashSale from "../components/FlashSale";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import HoteSales from "../components/HotSales";
import Explorer from "../components/Explorer";
import NewArrival from "../components/NewArrival";
import Service from "../components/Service";
const HomePage = () => {
  return (
    <div>
      {/* Voucher Banner */}
      <VoucherBanner />
      {/* Flash Sale */}
      <FlashSale />
      {/* Categories */}
      <Categories />
      {/* Best Selling Products */}
      <BestSelling />
      {/* hot sales */}
      <HoteSales />
      {/* Explore Our Products */}
      <Explorer />
      {/* New Arrival */}
      <NewArrival />
      {/* Services */}
      <Service />
    </div>
  );
};

export default HomePage;
