import AboutSection from '../components/AboutSection';
import AccessoriesSection from '../components/AccessoriesSection';
import GallerySection from '../components/GallerySection';
import HeroSection from '../components/HeroSection';
import PricesSection from '../components/PricesSection';
import TentsSection from '../components/TentsSection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<div className="w-screen z-10 bg-white mt-[65vh]">
				<TentsSection />
				<GallerySection />
				<AccessoriesSection />
				<PricesSection />
				<AboutSection />
			</div>
		</>
	);
};

export default HomePage;
