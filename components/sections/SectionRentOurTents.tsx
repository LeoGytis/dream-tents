import Image from 'next/image';

const SectionRentOurTents = () => {
	return (
		<section className="flex justify-center py-20">
			<div className="flex gap-8 max-w-7xl">
				<div className="flex flex-col items-end w-1/2 gap-4">
					<h1>Rent Our Tents</h1>
					<p className="text-end">
						Planning a celebration in the great outdoors? Our event
						pavilion rental is the ideal choice! Whether you&apos;re
						hosting a wedding, christening, corporate gathering, or
						birthday party, we’ll help you create a stylish, modern,
						and adaptable space to suit any occasion. To make your
						event even more convenient, we also provide furniture
						rentals, pavilion lighting solutions, and illuminated
						letter rentals.
					</p>
					<button className="px-10 py-3 mt-8 border-black">
						PRICES
					</button>
				</div>
				<div className="relative w-1/2">
					<Image
						src={`/images/gallery/tent1.jpg`}
						alt="tents_section"
						fill
						objectFit="cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionRentOurTents;
