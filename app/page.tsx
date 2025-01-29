import AboutSection from "./components/AboutSection";
import AccessoriesSection from "./components/AccessoriesSection";
import HeroSection from "./components/HeroSection";
import PricesSection from "./components/PricesSection";
import TentsSection from "./components/TentsSection";

const HomePage = () => {
  return (
    <div className="relative h-screen">
      <HeroSection />
      <div className="relative w-screen z-10 bg-white mt-[700px]">
        <TentsSection />
        <AccessoriesSection />
        {/* <GallerySection /> */}
        <PricesSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default HomePage;
