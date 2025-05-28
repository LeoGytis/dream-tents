import TentCard from './TentCard';
import {tentCards} from './tentsData';

const SectionPrices = () => {
	return (
		<section
			id="sectionPrices"
			className="flex justify-center py-20 bg-gray-200 background"
		>
			<div className="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 max-w-7xl">
				{tentCards.map((tent, index) => (
					<TentCard key={index} {...tent} />
				))}
			</div>
		</section>
	);
};

export default SectionPrices;
