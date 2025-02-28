import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import "./globals.css";
import HomePage from "./home/page";
export default function Home() {
  return (
    <div>
      <TopBar message="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!" />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
