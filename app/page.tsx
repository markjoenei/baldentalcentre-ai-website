import AffordableSection from "../components/AffordableSection";
import FAQ from "../components/FAQ";
import FeaturedServices from "../components/FeaturedServices";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import LocatedSection from "../components/LocatedSection";
import MapSection from "../components/MapSection";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import NIHBSection from "../components/NIHBSection";
import PricingCards from "../components/PricingCards";
import Promotions from "../components/Promotions";
import TopBar from "../components/TopBar";
import TourOffice from "../components/TourOffice";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <InfoBar />
      <PricingCards />
      <WhyChoose />
      <TourOffice />
      <Promotions />
      <AffordableSection />
      <FeaturedServices />
      <FAQ />
      <NIHBSection />
      <LocatedSection />
      <Marquee />
      <MapSection />
      <Footer />
    </main>
  );
}
