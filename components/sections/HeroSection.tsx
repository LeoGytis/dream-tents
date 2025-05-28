import HeroImage from '@/public/images/gallery/tent5.jpg';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<section id="heroSection" className="fixed visible w-full h-dvh">
			<Image
				src={HeroImage}
				alt="Dream Tents"
				priority
				fill
				className="object-cover"
			/>
			<div className="absolute z-10 flex flex-col mx-auto text-white transform -translate-x-1/2 sm:bottom-20 left-1/2 sm:left-20 bottom-14 max-sm:text-center fade-up">
				<h1 className="sm:mr-6">DREAM</h1>
				{/* <span>&nbsp; &nbsp; &nbsp;</span> */}
				<h1>TENTS</h1>
				<br />
				<h3>Forever</h3>
				&nbsp;
				<h3>under</h3>
				&nbsp;
				<h3>blissful</h3>
				&nbsp;
				<h3>dream</h3>
				<br />
				<button className="px-10 py-3 mt-8">ORDER NOW</button>
			</div>
		</section>
	);
};

export default HeroSection;
