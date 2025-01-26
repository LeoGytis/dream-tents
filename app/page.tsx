import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
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
      <PricesSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
