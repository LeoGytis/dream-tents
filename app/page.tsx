import SectionAccessories from '@/components/sections/Accessories/AccessoriesSection';
import HeroSection from '@/components/sections/HeroSection';
import SectionPrices from '@/components/sections/Prices/SectionPrices';
import SectionAboutUs from '@/components/sections/SectionAboutUs';
import SectionGallery from '@/components/sections/SectionGallery';
import SectionRentOurTents from '@/components/sections/SectionRentOurTents';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<div className="z-10 background mt-[100dvh]">
				<SectionRentOurTents />
				<SectionGallery />
				<SectionPrices />
				<SectionAccessories />
				<SectionAboutUs />
			</div>
		</>
	);
};

export default HomePage;
