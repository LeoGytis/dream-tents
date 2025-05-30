import Image from 'next/image';

const SectionRentOurTents = () => {
	return (
		<section className="py-16 lg:py-32">
			<div className="container flex gap-16 mx-auto">
				<div className="flex flex-col items-start flex-1 gap-8 lg:items-end">
					<h1>Rent Our Tents</h1>
					<p className="lg:text-end">
						Planning a celebration in the great outdoors? Our event
						tents rental is the ideal choice! Whether you&apos;re
						hosting a wedding, christening, corporate gathering, or
						birthday party, we’ll help you create a stylish, modern,
						and adaptable space to suit any occasion. To make your
						event even more convenient, we also provide furniture
						rentals, pavilion lighting solutions, and illuminated
						letter rentals.
					</p>
					<button className="self-end px-10 py-3 mt-8 border border-black hover:bg-black hover:text-white">
						PRICES
					</button>
				</div>
				<div className="relative flex-1 max-lg:hidden">
					<Image
						src={`/images/gallery/tent1.jpg`}
						alt="tents_section"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionRentOurTents;
