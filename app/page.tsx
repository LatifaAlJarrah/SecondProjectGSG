import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/header/Header";
import Sidebar from "@/components/home/Sidebar";
import Hero from "@/components/home/Hero";
import FlashSale from "@/components/home/flash-sale/FlashSale";
import Categories from "@/components/home/categories/Categories";
import BestSelling from "@/components/home/best-selling/BestSelling";
import MusicPromo from "@/components/home/music-promo/MusicPromo";
import ExploreProducts from "@/components/home/explore/ExploreProducts";
import NewArrival from "@/components/home/new-arrival/NewArrival";
import ServiceFeatures from "@/components/home/features/ServiceFeatures";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <AnnouncementBar />
      <Header />
      <main className="w-full grow bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <Sidebar />
            </div>
            <div className="md:col-span-9">
              <Hero />

            </div>
          </section>
          
        </div>
        <FlashSale />
        <div className="mx-auto max-w-7xl px-4">
          <Categories />
          <BestSelling />
          <MusicPromo />
          <ExploreProducts />
          <NewArrival />
          <ServiceFeatures />
        </div>
        <Footer />
      </main>
    </div>
  );
}
