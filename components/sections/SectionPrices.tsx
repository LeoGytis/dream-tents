import Image from 'next/image';

const SectionPrices = () => {
	return (
		<section
			id="sectionPrices"
			className="flex justify-center py-20 bg-gray-200 background"
		>
			<div className="flex w-full gap-8 max-w-7xl">
				<div className="relative w-1/2">
					<Image
						src={`/images/spec/spectentpng.png`}
						alt="prices_section"
						fill
						objectFit="contain"
					/>
				</div>
				<div className="flex flex-col w-1/2 gap-4 p-6">
					<h1>Tent</h1>
					<div>
						<span>Palapinės išmatavimai:</span>
						<span> 4,5 x 5 x 6</span>
					</div>
					<div>
						<span>Palapinės plotas:</span>
						<span> 28m</span>
					</div>
					<div>
						<span>Talpina:</span>
						<span> 25 žmonės</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionPrices;
