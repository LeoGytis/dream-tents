import HeroImage from '@/public/images/gallery/tent5.jpg';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<section id="heroSection" className="fixed w-screen h-dvh">
			<div className="w-[100vw] h-full">
				<Image
					src={HeroImage}
					alt="Dream Tents"
					priority
					fill
					objectFit="cover"
				/>
				<div className="absolute z-10 left-0 bottom-0 w-1/2 flex flex-col text-white m-20">
					<div className="fade-up">
						<h1>DREAM</h1>
						&nbsp; &nbsp; &nbsp;
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
						<button className="py-3 px-10 mt-8">ORDER NOW</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
