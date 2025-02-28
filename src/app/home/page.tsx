import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import Explorer from "@/components/Explorer";
import FlashSale from "@/components/FlashSale";
import NewArrival from "@/components/NewArrival";
import Service from "@/components/Service";
import VoucherBanner from "@/components/VoucherBanner";

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
