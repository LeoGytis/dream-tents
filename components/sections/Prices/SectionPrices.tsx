import TentCard from './TentCard';
import {tentCards} from './tentsData';

const SectionPrices = () => {
	return (
		<section id="sectionPrices" className="py-16 background lg:py-32">
			<div className="container grid w-full grid-cols-1 gap-6 lg:gap-16 px-4 mx-auto md:grid-cols-2 max-w-7xl">
				{tentCards.map((tent, index) => (
					<TentCard key={index} {...tent} />
				))}
			</div>
		</section>
	);
};

export default SectionPrices;
