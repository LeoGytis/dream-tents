import AboutSection from "./components/AboutSection";
import AccessoriesSection from "./components/AccessoriesSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PricesSection from "./components/PricesSection";
import TentsSection from "./components/TentsSection";

const HomePage = () => {
  return (
    <>
      {/* <SlideShow /> */}
      <HeroSection />
      <TentsSection />
      <AccessoriesSection />
      <PricesSection />
      <GallerySection />
      <AboutSection />
    </>
  );
};

export default HomePage;
