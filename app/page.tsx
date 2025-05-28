import AboutSection from '@/components/sections/AboutSection';
import AccessoriesSection from '@/components/sections/Accessories/AccessoriesSection';
import GallerySection from '@/components/sections/GallerySection';
import HeroSection from '@/components/sections/HeroSection';
import PricesSection from '@/components/sections/PricesSection';
import TentsSection from '@/components/sections/TentsSection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<div className="w-screen z-10 background mt-[100dvh]">
				<TentsSection />
				<GallerySection />
				<PricesSection />
				<AccessoriesSection />
				<AboutSection />
			</div>
		</>
	);
};

export default HomePage;
